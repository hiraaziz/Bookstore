import { NextResponse } from "next/server";
import { connectdatabase } from "../../../components/databaseConn";

export async function GET(request: Request) {
  let sql = connectdatabase();

  try {
    const result = await sql.unsafe("select * from book");
    return NextResponse.json({ result });
  } catch (error: any) {
    return NextResponse.json({ message: "bad request" });
  }
}
