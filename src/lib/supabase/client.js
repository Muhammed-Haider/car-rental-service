"use client";

import { createBrowserClient } from "@supabase/ssr";

export const supabaseBrowserClient = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  {
    cookies: {
      get(name) {
        if (typeof document === "undefined") return undefined;
        const cookie = document.cookie
          .split("; ")
          .find((row) => row.startsWith(`${name}=`));
        return cookie ? decodeURIComponent(cookie.split("=")[1]) : undefined;
      },
      set(name, value, options) {
        if (typeof document === "undefined") return;
        let cookieStr = `${name}=${encodeURIComponent(value)}`;
        if (options?.maxAge) cookieStr += `; max-age=${options.maxAge}`;
        if (options?.path) cookieStr += `; path=${options.path}`;
        if (options?.domain) cookieStr += `; domain=${options.domain}`;
        if (options?.sameSite) cookieStr += `; samesite=${options.sameSite}`;
        if (options?.secure) cookieStr += "; secure";
        document.cookie = cookieStr;
      },
      remove(name, options) {
        if (typeof document === "undefined") return;
        let cookieStr = `${name}=; max-age=0`;
        if (options?.path) cookieStr += `; path=${options.path}`;
        if (options?.domain) cookieStr += `; domain=${options.domain}`;
        document.cookie = cookieStr;
      },
    },
    cookieOptions: {
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    },
  }
);
