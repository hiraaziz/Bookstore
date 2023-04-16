import { NextResponse } from "next/server";
import postgres from "postgres";
import { v4 as uuidv4 } from "uuid";

export function connectdb() {
  //@ts-ignore
  const sql = postgres(process.env.DATABASE_URL, {
    ssl: require,
  });
  return sql;
}

function generateToken(length: number) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;

  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

export async function POST(request: Request) {
  const { name, email } = await request.json();
  const id = uuidv4();
  const token = generateToken(20);
  if (!name || !email)
    return NextResponse.json({ message: "missing data required" });

  let sql = connectdb();

  try {
    const result = await sql.unsafe(
      "insert into users (id, name, email, token) values ($1, $2, $3, $4)",
      [id, name, email, token]
    );
    return NextResponse.json({ "access-token": token });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ message: "bad request" });
  }
}
