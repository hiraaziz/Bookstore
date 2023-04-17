import { NextResponse } from "next/server";
import { connectdatabase } from "../../../components/databaseConn";

export async function GET(request: Request) {
  const authorizationValue = request.headers.get("authorization");
  const auth = authorizationValue?.split(" ");
  const bearer_token = auth ? auth[1] : "";

  let sql = connectdatabase();

  try {
    let result: [] | [{ token: string }] = await sql.unsafe(
      "select token from users where token = $1",
      [bearer_token]
    );

    return NextResponse.json({ result });
  } catch (error: any) {
    return NextResponse.json({ message: "bad request" });
  }
}
