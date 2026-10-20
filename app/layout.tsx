import type { Metadata } from "next";
import "@/Styles/globals.css";
import FloatingNav from "@/Components/FloatingNav";

export const metadata: Metadata = {
  title: "Sourcd",
  description: "A home for every idea",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full">
        <div className="app-shell">
          <FloatingNav />
          <main className="app-content">{children}</main>
        </div>
      </body>
    </html>
  );
}
