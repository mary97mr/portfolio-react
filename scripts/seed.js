const { sql } = require('@vercel/postgres');
const { users } = require('../app/lib/data.js')

async function seedDevelopers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS devs (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        fullname VARCHAR(255) NOT NULL,
        introduction TEXT NOT NULL,
        links TEXT NOT NULL
      );
    `;

    console.log(`Created "devs" table`);

    // Insert data into the "devs" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const linksString = JSON.stringify(user.links)
        return client.sql`
          INSERT INTO devs (fullname, introduction, links)
          VALUES (${user.fullname}, ${user.introduction}, ${linksString})
          ON CONFLICT (id) DO NOTHING;
        `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function main() {
  const client = await sql.connect();

  await seedDevelopers(client);
  client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});