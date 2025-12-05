"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabaseBrowserClient } from "@/lib/supabase/client";

export default function AuthCallback() {
  const router = useRouter();
  const [status, setStatus] = useState("processing");

  useEffect(() => {
    const handleCallback = async () => {
      try {
        const hashParams = new URLSearchParams(window.location.hash.substring(1));
        const accessToken = hashParams.get("access_token");
        const refreshToken = hashParams.get("refresh_token");
        const error = hashParams.get("error");

        if (error) {
          setStatus("error");
          setTimeout(() => router.push("/"), 2000);
          return;
        }

        if (!accessToken || !refreshToken) {
          setStatus("error");
          setTimeout(() => router.push("/"), 2000);
          return;
        }

        const { data, error: sessionError } = await supabaseBrowserClient.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken,
        });

        if (sessionError || !data?.session) {
          setStatus("error");
          setTimeout(() => router.push("/"), 2000);
          return;
        }

        setStatus("success");
        window.history.replaceState(null, "", window.location.pathname);
        router.push("/dashboard");
      } catch (err) {
        setStatus("error");
        setTimeout(() => router.push("/"), 2000);
      }
    };

    if (typeof window !== "undefined") {
      handleCallback();
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000000] to-[#0D0D0D] flex items-center justify-center">
      <div className="text-center">
        {status === "processing" && (
          <>
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#B844E8] mx-auto mb-4"></div>
            <p className="text-white text-xl font-semibold" style={{ fontFamily: "Poppins, sans-serif" }}>
              Signing you in...
            </p>
          </>
        )}
        {status === "success" && (
          <>
            <div className="text-green-500 text-5xl mb-4">✓</div>
            <p className="text-white text-xl font-semibold" style={{ fontFamily: "Poppins, sans-serif" }}>
              Success! Redirecting...
            </p>
          </>
        )}
        {status === "error" && (
          <>
            <div className="text-red-500 text-5xl mb-4">✕</div>
            <p className="text-white text-xl font-semibold" style={{ fontFamily: "Poppins, sans-serif" }}>
              Authentication failed. Redirecting...
            </p>
          </>
        )}
      </div>
    </div>
  );
}
