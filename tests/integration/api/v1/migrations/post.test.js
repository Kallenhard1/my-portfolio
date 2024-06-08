import database from "infra/database.js";
import orchestrator from "tests/orchetrator.js";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await database.query("drop schema public cascade; create schema public;");
});

test("POST to /api/v1/migrations should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });
  const responseBody = await response.json();
  const migrationResult = await database.query(
    "SELECT * FROM public.pgmigrations;",
  );
  const migrationValues = migrationResult.rows;
  expect(Array.isArray(responseBody)).toBe(true);
  const responseElement = responseBody.map((element) => {
    return element.name;
  });
  const migrationElement = migrationValues.map((element) => {
    return element.name;
  });
  console.log(responseElement, migrationElement);
  expect(responseElement).toStrictEqual(migrationElement);
});
