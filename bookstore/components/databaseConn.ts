import postgres from "postgres";

export function connectdatabase() {
  //@ts-ignore
  const sql = postgres(process.env.DATABASE_URL, {
    ssl: require,
  });
  return sql;
}
