"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActionButtons from "@/components/FloatingActionButtons";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/signin" || pathname === "/signup";

  return (
    <>
      {!isAuthPage && <Navbar />}
      {children}
      {!isAuthPage && <FloatingActionButtons />}
      {!isAuthPage && <Footer />}
    </>
  );
}
