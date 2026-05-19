"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function getUserSession() {
  try {
    // Check if environment variables are set
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      return null;
    }

    const supabase = await createSupabaseServerClient();
    
    // Check if supabase client was created successfully
    if (!supabase || !supabase.auth) {
      return null;
    }

    const { data, error } = await supabase.auth.getSession();
    
    if (error) {
      return null;
    }
    
    return data?.session ?? null;
  } catch (error) {
    return null;
  }
}
