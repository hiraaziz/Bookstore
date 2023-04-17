import { NextResponse } from "next/server";
import { connectdatabase } from "../../../../components/databaseConn";

type Props = {
  params: {
    id: string;
  };
};

export async function GET(request: Request, { params: { id } }: Props) {
  let sql = connectdatabase();

  try {
    const result: order[] = await sql.unsafe(
      "select * from orders where bookid = $1",
      [id]
    );
    return NextResponse.json({ result });
  } catch (error: any) {
    return NextResponse.json({ message: "bad request" });
  }
}

export async function PUT(request: Request, { params: { id } }: Props) {
  let sql = connectdatabase();

  try {
    const { customerName } = await request.json();
    await sql.unsafe("update orders set customerName = $1 where id = $2", [
      customerName,
      id,
    ]);
    return NextResponse.json({ message: "Resource updated" });
  } catch (error: any) {
    return NextResponse.json({ message: "bad request" });
  }
}

export async function DELETE(request: Request, { params: { id } }: Props) {
  let sql = connectdatabase();

  try {
    await sql.unsafe("delete from orders where id = $1", [id]);
    return NextResponse.json({ message: "Resource updated" });
  } catch (error: any) {
    return NextResponse.json({ message: "bad request" });
  }
}
