"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const mainNavItems = [
  { href: "/#about", label: "O firmie" },
  { href: "/#products", label: "Produkty" },
  { href: "/#services", label: "Usługi" },
  { href: "/#realizations", label: "Realizacje" },
  { href: "/blog", label: "Blog" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleNavClick = () => setOpen(false);

  return (
    <header className="sticky top-0 z-30 bg-sky-50 py-5 shadow-sm shadow-slate-200">
      <div className="mx-auto flex max-w-[90%] items-center gap-8 px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          {/* <Image> */}
          <div className="h-8 w-24 bg-slate-300 rounded" />
        </Link>
        {/* Desktop nav*/}
        <nav className="hidden flex-1 items-center justify-end gap-10 text-xs font-bold tracking-[0.18em] uppercase md:flex">
          {mainNavItems.map((item) => {
            const isActive =
              (item.href.startsWith("/blog") && pathname === "/blog") ||
              (item.href === "/#about" && pathname === "/");

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`hover:text-slate-900 ${
                  isActive ? "text-slate-900" : "text-slate-800"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/#contact"
            className="hidden rounded-full bg-[#568BD8] px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white md:inline-flex"
          >
            Kontakt
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="inline-flex items-center justify-center rounded border border-slate-300 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          Menu
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t border-slate-200 bg-sky-50 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-2 text-sm font-bold tracking-[0.16em]">
            {mainNavItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="py-2 uppercase tracking-[0.16em]"
                onClick={handleNavClick}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/#contact"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[#568BD8] px-6 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white"
              onClick={handleNavClick}
            >
              Kontakt
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
