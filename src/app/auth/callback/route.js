import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function GET(request) {
  const supabase = await createSupabaseServerClient();

  const {
    data: { session },
    error
  } = await supabase.auth.getSession();

  if (error) {
    console.error("OAuth callback error:", error);
    return NextResponse.redirect("/signin?error=auth");
  }

  return NextResponse.redirect("/");
}
