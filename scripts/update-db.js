// scripts/update-db.js

const { neon } = require('@neondatabase/serverless');
require('dotenv').config({ path: '.env.local' });

async function migrate() {
  if (!process.env.POSTGRES_URL) {
    console.error("❌ Error: POSTGRES_URL not found in environment.");
    return;
  }

  const sql = neon(process.env.POSTGRES_URL);

  try {
    console.log('⏳ Checking Database schema...');

    // PL/pgSQL block to safely update the table
    await sql`
      DO $$ 
      BEGIN 
        -- 1. Make password optional for OAuth users
        ALTER TABLE users ALTER COLUMN password DROP NOT NULL;
        
        -- 2. Add 'image' column if it doesn't exist
        IF NOT EXISTS (SELECT 1 FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME='users' AND COLUMN_NAME='image') THEN
          ALTER TABLE users ADD COLUMN image TEXT;
        END IF;

        -- 3. Add 'email_verified' column if it doesn't exist
        IF NOT EXISTS (SELECT 1 FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME='users' AND COLUMN_NAME='email_verified') THEN
          ALTER TABLE users ADD COLUMN email_verified TIMESTAMP;
        END IF;
      END $$;
    `;

    console.log('✅ Database is now OAuth-ready!');
  } catch (error) {
    console.error('❌ Migration failed:', error);
  }
}

migrate();