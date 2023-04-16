import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// call this function when token is valid
export default async function validToken(
  method: string,
  url: string,
  request: NextRequest
) {
  if (method == "GET" || method == "DELETE") {
    const result = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    });
    const results = await result.json();
    return NextResponse.json({ results });
  }
  // POST PUT method
  else if (method == "POST" || method == "PUT") {
    const buffer = await request.arrayBuffer(); // getthe request body as a buffer
    const body = new TextDecoder().decode(buffer); // text decoder decodes the buffer into string
    const bodyJson = body ? JSON.parse(body) : null; // string is parsed into the json
    const result = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyJson),
    });
    const results = await result.json();
    return NextResponse.json({ results });
  }
}
