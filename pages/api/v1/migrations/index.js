import migrationRunner from "node-pg-migrate";
import { join } from "node:path";
import database from "infra/database.js";

function getMigrationOptions(dbClient, liveRun) {
  return {
    dbClient: dbClient,
    databaseUrl: process.env.DATABASE_URL,
    dir: join("infra", "migrations"),
    direction: "up",
    verbose: true,
    migrationsTable: "pgmigrations",
    dryRun: !liveRun,
  };
}

export default async function migrations(request, response) {
  const allowedmethods = ["GET", "POST"];
  if (!allowedmethods.includes(request.method)) {
    return response.status(405).end();
  }
  let dbClient;
  try {
    dbClient = await database.getNewClient();
    const liveRun = request.method === "POST" ? true : false;
    const options = getMigrationOptions(dbClient, liveRun);
    const migrations = await migrationRunner(options);
    const status = liveRun && migrations.length > 0 ? 201 : 200;
    return response.status(status).json(migrations);
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    await dbClient.end();
  }
}
