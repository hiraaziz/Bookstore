import { NextResponse } from "next/server";
import { connectdatabase } from "../../../../components/databaseConn";
type Props = {
  params: {
    id: string;
  };
};

export async function GET(request: Request, { params: { id } }: Props) {
  //   const id = request.url.slice(request.url.lastIndexOf("/"));
  let sql = connectdatabase();

  try {
    const result = await sql.unsafe("select * from book where id = $1", [id]);
    return NextResponse.json({ result });
  } catch (error: any) {
    return NextResponse.json({ message: "bad request" });
  }
}
