import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone(); 

  if (!url.searchParams.has("lang")) {
    url.searchParams.set("lang", "ar");

    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
