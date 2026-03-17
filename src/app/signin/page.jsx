"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError("");
    
    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
          queryParams: {
            prompt: 'select_account'
          }
        },
      });
      
      if (error) throw error;
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      
      router.push("/");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#000000] flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#8B3FBF]/10 blur-3xl opacity-60 animate-pulse"></div>
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#B844E8]/10 blur-3xl opacity-60 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="w-full max-w-md relative z-10">
        {/* Back to Home Link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors group"
        >
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm font-medium">Back to Home</span>
        </Link>

        {/* Card Container */}
        <div className="bg-[#1A1A1A]/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-white/5">
          {/* Logo/Brand */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8B3FBF] to-[#B844E8] p-[1px] mb-4 shadow-2xl shadow-purple-500/20">
              <div className="w-full h-full bg-[#1A1A1A] rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-[#B844E8]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                </svg>
              </div>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Welcome Back
            </h1>
            <p className="text-white/50 text-xs md:text-sm max-w-[280px] mx-auto leading-relaxed">
              Experience the pinnacle of luxury with WTB DXB
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-2.5 rounded-xl mb-6 text-xs flex items-center gap-2.5">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {error}
            </div>
          )}

          {/* Email Form */}
          <form onSubmit={handleEmailSignIn} className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-white/30 uppercase tracking-[0.15em] ml-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                required
                className="w-full bg-white/5 border border-white/10 text-white placeholder-white/20 px-4 py-3.5 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#B844E8]/50 focus:border-[#B844E8]/50 transition-all duration-300 text-sm"
              />
            </div>
            
            <div className="space-y-1">
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] font-bold text-white/30 uppercase tracking-[0.15em]">Password</label>
                <Link href="#" className="text-[10px] font-bold text-[#B844E8] hover:text-[#9D5FFF] transition-colors uppercase tracking-wider">Forgot?</Link>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full bg-white/5 border border-white/10 text-white placeholder-white/20 px-4 py-3.5 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#B844E8]/50 focus:border-[#B844E8]/50 transition-all duration-300 text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 bg-gradient-to-r from-[#8B3FBF] via-[#B844E8] to-[#9D5FFF] text-white font-bold rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg shadow-purple-500/20 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] text-[10px] tracking-[0.2em] uppercase mt-2"
            >
              {loading ? "Processing..." : "Sign In"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-white/5"></div>
            <span className="text-white/10 text-[8px] font-bold tracking-[0.3em] uppercase">OR</span>
            <div className="flex-1 h-px bg-white/5"></div>
          </div>

          {/* Google OAuth Button */}
          <button
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white font-semibold py-2.5 px-4 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <svg className="w-4 h-4 transition-transform group-hover:scale-110" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="text-[10px] uppercase tracking-widest">Google</span>
          </button>

          {/* Footer */}
          <div className="text-center mt-6">
            <p className="text-white/30 text-[10px] font-bold uppercase tracking-wider">
              New here?{" "}
              <Link 
                href="/signup" 
                className="text-[#B844E8] hover:text-[#9D5FFF] transition-colors duration-300 ml-1"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>

        {/* Legal links */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <Link href="/terms-of-service" className="text-[10px] text-white/30 hover:text-white/50 uppercase tracking-widest font-bold transition-colors">Terms</Link>
          <Link href="/privacy-policy" className="text-[10px] text-white/30 hover:text-white/50 uppercase tracking-widest font-bold transition-colors">Privacy</Link>
          <Link href="/cookie-policy" className="text-[10px] text-white/30 hover:text-white/50 uppercase tracking-widest font-bold transition-colors">Cookies</Link>
        </div>
      </div>
    </div>
  );
}
