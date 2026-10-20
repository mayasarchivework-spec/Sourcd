import Link from "next/link";
import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7f8f5] px-6 py-12 text-[#172018]">
      <div className="w-full max-w-md">
        <Link href="/" className="mb-10 block text-center text-xl font-semibold tracking-tight">
          sourcd<span className="text-[#6f8f74]">.</span>
        </Link>
        {children}
      </div>
    </main>
  );
}
