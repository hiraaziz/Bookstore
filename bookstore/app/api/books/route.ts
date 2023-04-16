import { NextResponse } from "next/server";
import { connectdatabase } from "../../../components/databaseConn";

export async function GET(request: Request) {
  const urls = request.url;
  const url = new URL(urls);
  const type = url.searchParams?.get("type");
  const limit = url.searchParams?.get("limit");

  let sql = connectdatabase();

  if (type && limit) {
    const result = await sql.unsafe(
      "select * from book where type = $1 limit $2",
      [type, limit]
    );
    return NextResponse.json({ result });
  }
  if (type) {
    const result = await sql.unsafe("select * from book where type = $1", [
      type,
    ]);
    return NextResponse.json({ result });
  }
  if (limit) {
    const result = await sql.unsafe("select * from book limit $1", [limit]);
    return NextResponse.json({ result });
  }
  try {
    const result = await sql.unsafe("select * from book");
    return NextResponse.json({ result });
  } catch (error: any) {
    return NextResponse.json({ message: "bad request" });
  }
}
