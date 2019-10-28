const dbUser = process.env.DB_USER || "default-name";
const dbPass = process.env.DB_PASS || "";
const host = process.env.DB_HOST || "localhost";
const dbName = process.env.DB_NAME || "test";

module.exports = {
  port: process.env.PORT || 3001,
  databaseUrl: `mongodb+srv://${dbUser}:${dbPass}@${host}/${dbName}`
};
