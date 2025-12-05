import { NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function GET(request) {
  const supabase = createRouteHandlerClient({ cookies });

  // This exchanges the "code" from Google OAuth for a Supabase session
  await supabase.auth.exchangeCodeForSession(request.url);

  // Redirect to home after successful login
  return NextResponse.redirect("/");
}
