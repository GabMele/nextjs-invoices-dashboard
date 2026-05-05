const { neon } = require('@neondatabase/serverless');
require('dotenv').config({ path: '.env.local' });

async function resetAuthDatabase() {
  if (!process.env.POSTGRES_URL) {
    console.error("❌ Error: POSTGRES_URL not found in environment.");
    return;
  }

  const sql = neon(process.env.POSTGRES_URL);

  try {
    console.log('🔄 Resetting database for hybrid auth...');

    // Drop existing users table
    await sql`DROP TABLE IF EXISTS users CASCADE;`;
    console.log('✅ Dropped existing users table');

    // Create new hybrid auth users table
    await sql`
      CREATE TABLE users (
        id TEXT PRIMARY KEY,
        email TEXT UNIQUE NOT NULL,
        name TEXT,
        image TEXT,
        password TEXT,
        provider TEXT DEFAULT 'email',
        provider_id TEXT,
        email_verified TIMESTAMP,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `;
    console.log('✅ Created new hybrid auth users table');

    // Add indexes for performance
    await sql`CREATE INDEX idx_users_email ON users(email);`;
    await sql`CREATE INDEX idx_users_provider ON users(provider);`;
    await sql`CREATE INDEX idx_users_provider_id ON users(provider_id);`;
    console.log('✅ Created database indexes');

    console.log('🎉 Database is now ready for hybrid auth (Google + GitHub + Email/Password)!');

  } catch (error) {
    console.error('❌ Database reset failed:', error);
  }
}

resetAuthDatabase();
