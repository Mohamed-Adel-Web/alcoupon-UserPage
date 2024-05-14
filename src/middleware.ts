import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone(); // Clone the URL to safely modify it

  // Check if the 'lang' query parameter is present
  if (!url.searchParams.has("lang")) {
    // If 'lang' parameter is missing, set it to 'en'
    url.searchParams.set("lang", "ar");

    // Redirect to the new URL with 'lang=en'
    return NextResponse.redirect(url);
  }

  // If 'lang' is already present, continue with the normal flow
  return NextResponse.next();
}
