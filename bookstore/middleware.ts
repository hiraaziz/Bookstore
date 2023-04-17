import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const bearer_token = request.headers // destructure autorization
    .get("authorization")
    ?.replace("Bearer ", "");

  const result = await fetch("https://hira-bookstore.vercel.app/api/auth/", {
    //Call API to Verify token from database
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${bearer_token}`,
    },
  });

  const res = await result.json();

  if (res.result.length !== 0) {
    const headers = new Headers(request.headers);
    return NextResponse.next({ headers });
  }
  // if token is not valid
  else {
    return NextResponse.json({ message: "Invalid token" });
  }
}

// See "Matching Paths"
export const config = {
  matcher: ["/api/orders/:path*"],
};
