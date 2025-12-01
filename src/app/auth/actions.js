"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function getUserSession() {
  const supabase = createSupabaseServerClient();
  const { data } = await supabase.auth.getSession();
  return data?.session ?? null;
}
