import { defineConfig } from "drizzle-kit";

export default defineConfig({
    schema: "./src/drizzle/schema.ts",
    out: "./src/drizzle/migrations",
    driver: "pglite",
    // dialect: "postgresql",
    dbCredentials: {
        connectionSring: process.env.DATABASE_URL as string
    },
    verbose: true,
    strict: true
})