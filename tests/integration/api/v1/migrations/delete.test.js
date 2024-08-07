import database from "infra/database.js";

beforeAll(cleanDatabase);

async function cleanDatabase() {
  await database.query("drop schema public cascade; create schema public;");
}

test("DELETE to /api/v1/migrations should return 200", async () => {
  const statusResponse = await fetch("http://localhost:3000/api/v1/status", {
    method: "DELETE",
  });
  const responseBody2 = await statusResponse.json();

  console.log(responseBody2.dependencies.database.opened_connections);
  expect(responseBody2.dependencies.database.opened_connections).toEqual(1);
});
