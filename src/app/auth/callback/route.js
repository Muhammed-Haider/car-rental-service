import { NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

export async function GET(request) {
  const supabase = createRouteHandlerClient({ cookies: () => request.cookies });
  await supabase.auth.exchangeCodeForSession(request.url);
  return NextResponse.redirect("/");
}
