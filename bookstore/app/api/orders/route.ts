import { NextResponse } from "next/server";
import { connectdatabase } from "@/components/databaseConn";

export async function POST(request: Request) {
  let sql = connectdatabase();

  const { bookId, customerName, quantity } = await request.json();

  if (!bookId || !customerName)
    return NextResponse.json({ message: "missing data required" });

  try {
    await sql.unsafe(
      "insert into orders ( bookId, customerName, quantity) values ($1, $2, $3)",
      [bookId, customerName, quantity]
    );
    return NextResponse.json({ message: "order created" });
  } catch (error: any) {
    return NextResponse.json({ message: "bad request" });
  }
}

export async function GET(request: Request) {
  let sql = connectdatabase();

  try {
    const result: order[] = await sql.unsafe("select * from orders");
    return NextResponse.json({ result });
  } catch (error: any) {
    return NextResponse.json({ message: "bad request" });
  }
}
