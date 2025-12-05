"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function getUserSession() {
  try {
    // Check if environment variables are set
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      console.warn("Supabase environment variables not found");
      return null;
    }

    const supabase = createSupabaseServerClient();
    
    // Check if supabase client was created successfully
    if (!supabase || !supabase.auth) {
      console.warn("Supabase client not properly initialized");
      return null;
    }

    const { data, error } = await supabase.auth.getSession();
    
    if (error) {
      console.error("Error getting session:", error);
      return null;
    }
    
    return data?.session ?? null;
  } catch (error) {
    console.error("Unexpected error in getUserSession:", error);
    return null;
  }
}
