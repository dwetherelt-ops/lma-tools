import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

// Use DATABASE_URL from environment
const connectionString = process.env.DATABASE_URL!;

// For query purposes (connection pooling)
const client = postgres(connectionString);
export const db = drizzle(client, { schema });

// Re-export schema for convenience
export * from "./schema";
