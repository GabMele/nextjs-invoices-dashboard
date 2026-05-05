import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import GitHub from 'next-auth/providers/github';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import postgres from 'postgres';
import bcrypt from 'bcrypt';
import { randomUUID } from 'crypto';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

// Simple user authentication for credentials provider
async function authenticateUser(email: string, password: string) {
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    if (user.length === 0) return null;
    
    const dbUser = user[0];
    if (!dbUser.password) return null; // OAuth users don't have passwords
    
    const passwordsMatch = await bcrypt.compare(password, dbUser.password);
    if (!passwordsMatch) return null;
    
    return {
      id: dbUser.id,
      email: dbUser.email,
      name: dbUser.name,
      image: dbUser.image,
    };
  } catch (error) {
    console.error('Authentication error:', error);
    return null;
  }
}

// OAuth user creation
async function createOrUpdateOAuthUser(user: { email?: string | null; name?: string | null; image?: string | null }, account: { provider: string; providerAccountId: string }) {
  try {
    if (!user.email) throw new Error('User email is required');
    
    // Check if user already exists
    const existingUser = await sql`SELECT * FROM users WHERE email=${user.email}`;
    
    if (existingUser.length === 0) {
      // Create new OAuth user
      await sql`
        INSERT INTO users (id, email, name, image, provider, provider_id, email_verified)
        VALUES (${randomUUID()}, ${user.email}, ${user.name || 'Unknown'}, ${user.image || null}, ${account.provider}, ${account.providerAccountId}, ${new Date()})
      `;
    } else {
      // Update existing OAuth user with latest info
      await sql`
        UPDATE users 
        SET name = ${user.name || 'Unknown'}, 
            image = ${user.image || null}, 
            provider = ${account.provider},
            provider_id = ${account.providerAccountId},
            email_verified = ${new Date()}
        WHERE email = ${user.email}
      `;
    }
  } catch (error) {
    console.error('Error creating/updating OAuth user:', error);
    throw error;
  }
}
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  callbacks: {
    async signIn({ user, account }) {
      // Handle OAuth users (Google + GitHub)
      if (account?.provider !== 'credentials') {
        if (!user.email || !account) return false;
        await createOrUpdateOAuthUser(user, account);
      }
      return true;
    },
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          return await authenticateUser(email, password);
        }
        return null;
      },
    }),
  ],
  debug: true,
});