import { NextResponse } from "next/server";
import { connectdatabase } from "../../../../components/databaseConn";

type Props = {
  params: {
    id: string;
  };
};

export async function GET(request: Request, { params: { id } }: Props) {
  const authorizationValue = request.headers.get("authorization");
  const auth = authorizationValue?.split(" ");
  const bearer_token = auth ? auth[1] : "";

  let sql = connectdatabase();
  let result: [{ token: string }] | [] = [];
  try {
    result = await sql.unsafe("select token from users where token = $1", [
      bearer_token,
    ]);

    if (result.length == 0) {
      return NextResponse.json({ message: "Invalid Token!" });
    }

    try {
      const result = await sql.unsafe(
        "select * from orders where bookid = $1",
        [id]
      );
      return NextResponse.json({ result });
    } catch (error: any) {
      return NextResponse.json({ message: "bad request" });
    }
  } catch (error: any) {
    return NextResponse.json({ message: "bad request" });
  }
}

export async function PUT(request: Request, { params: { id } }: Props) {
  let sql = connectdatabase();

  try {
    const { customerName } = await request.json();
    const result = await sql.unsafe(
      "update orders set customerName = $1 where id = $2",
      [customerName, id]
    );
    return NextResponse.json({ message: "Resource updated" });
  } catch (error: any) {
    return NextResponse.json({ message: "bad request" });
  }
}

export async function DELETE(request: Request, { params: { id } }: Props) {
  let sql = connectdatabase();

  try {
    const result = await sql.unsafe("delete from orders where id = $1", [id]);
    return NextResponse.json({ message: "Resource updated" });
  } catch (error: any) {
    return NextResponse.json({ message: "bad request" });
  }
}
