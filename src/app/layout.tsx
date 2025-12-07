import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "HPSG – Twój partner w rozwoju produkcji",
  description:
    "Automatyzacja produkcji, stanowiska montażowe, diagnostyka, projektowanie i wdrożenia.",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pl">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
