import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import validToken from "./components/validToken";

export async function middleware(request: NextRequest) {
  const { method, url } = request; // destructure method and url from request

  const bearer_token = request.headers // destructure autorization
    .get("authorization")
    ?.replace("Bearer ", "");

  const result = await fetch("http://localhost:3000/api/auth/", {
    //Call API to Verify token from database
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${bearer_token}`,
    },
  });

  const res = await result.json();

  if (res.result.length !== 0) {
    // Get DELETE method
    validToken(method, url, request);
  }
  // if token is not valid
  else {
    return NextResponse.json({ message: "Invalid token" });
  }
}

// See "Matching Paths"
export const config = {
  api: {
    bodyParser: false,
  },
  externalResolver: true,
  matcher: ["/api/orders/:path*"],
};
