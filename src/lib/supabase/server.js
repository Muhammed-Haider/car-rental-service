"use server";

import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createSupabaseServerClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name) {
          return cookieStore.get(name)?.value;
        },
        set(name, value, options) {
          try {
            cookieStore.set({
              name,
              value,
              ...options,
              path: options?.path || "/",
              sameSite: options?.sameSite || "lax",
              secure: process.env.NODE_ENV === "production",
            });
          } catch (error) {
            // Cookie setting can fail in middleware
          }
        },
        remove(name, options) {
          try {
            cookieStore.set({
              name,
              value: "",
              ...options,
              path: options?.path || "/",
              maxAge: 0,
            });
          } catch (error) {
            // Cookie removal can fail in middleware
          }
        },
      },
    }
  );
}