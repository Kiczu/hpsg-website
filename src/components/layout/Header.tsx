"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { NAV_ITEMS, CTA_CONTACT, PRODUCTS_DROPDOWN } from "@/config/nav";
import { ROUTES, homeSection } from "@/config/paths";
import Image from "next/image";

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const resolvedNav = useMemo(() => {
    const resolve = (href: string) => {
      if (!href.startsWith("__HOME__#")) return href;
      const id = href.replace("__HOME__#", "") as any;
      return homeSection(id, pathname);
    };

    return {
      items: NAV_ITEMS.map((i) => ({ ...i, href: resolve(i.href) })),
      contactHref: resolve(CTA_CONTACT.href),
    };
  }, [pathname]);

  const handleNavClick = () => setOpen(false);

  return (
    <header className="sticky top-0 z-30 bg-white shadow-sm shadow-slate-200 after:content-[''] after:absolute after:inset-0 after:bg-[#BEDFF5]/57 after:z-0">
      {/* TOP ROW */}
      <div className="relative z-10 mx-auto flex max-w-[90%] items-center justify-between gap-6 px-4 py-3">
        {/* Logo */}
        <Link
          href={ROUTES.home}
          className="flex items-center shrink-0"
          onClick={handleNavClick}
        >
          <Image
            src="/images/hpsg-logo.png"
            alt="HPSG Logo"
            width={140}
            height={40}
            className="h-20 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden flex-1 items-center justify-end gap-10 text-xs font-bold tracking-[0.18em] uppercase lg:flex">
          {resolvedNav.items.map((item) => {
            const isProducts = item.label === "Produkty";

            if (isProducts) {
              return (
                <div key={item.label} className="relative group">
                  <Link href={item.href} className={`text-black text-[15px]`}>
                    {item.label}
                  </Link>

                  <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition absolute left-1/2 top-full -translate-x-1/2 pt-4">
                    <div className="min-w-[280px] rounded-xl border border-slate-200 bg-[#BEDFF5] shadow-lg p-2">
                      {PRODUCTS_DROPDOWN.map((p) => (
                        <Link
                          key={p.href}
                          href={p.href}
                          onClick={handleNavClick}
                          className={`block rounded-lg px-4 py-3 text-xs font-bold tracking-[0.14em] uppercase
                                    hover:bg-white/40 ${
                                      pathname === p.href
                                        ? "text-slate-900"
                                        : "text-slate-700"
                                    }`}
                        >
                          {p.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={handleNavClick}
                className={`text-black text-[15px]`}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href={resolvedNav.contactHref}
            className="hidden rounded-full bg-[#568BD8] px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[15px] text-white md:inline-flex"
            onClick={handleNavClick}
          >
            Kontakt
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-transparent lg:hidden"
        >
          <span className="sr-only">Otwórz menu</span>

          <span
            className={[
              "absolute h-0.5 w-6 bg-black transition",
              open ? "rotate-45" : "-translate-y-2",
            ].join(" ")}
          />
          <span
            className={[
              "absolute h-0.5 w-6 bg-black transition",
              open ? "opacity-0" : "opacity-100",
            ].join(" ")}
          />
          <span
            className={[
              "absolute h-0.5 w-6 bg-black transition",
              open ? "-rotate-45" : "translate-y-2",
            ].join(" ")}
          />
        </button>
      </div>

      {/* MOBILE MENU (dropdown panel) */}
      {open && (
        <>
          {/* overlay */}
          <button
            className="fixed inset-0 z-20 bg-black/20 md:hidden"
            aria-label="Zamknij menu"
            onClick={handleNavClick}
          />

          <nav
            id="mobile-nav"
            className="absolute right-4 top-full z-30 mt-3 w-[280px] rounded-2xl border border-slate-200 bg-white/90 backdrop-blur shadow-xl lg:hidden"
          >
            <div className="p-5">
              <div className="flex flex-col gap-3 text-xs font-bold tracking-[0.16em] uppercase">
                {resolvedNav.items
                  .filter((i) => i.label !== "Produkty")
                  .map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={handleNavClick}
                      className="text-slate-800 hover:text-slate-900"
                    >
                      {item.label}
                    </Link>
                  ))}

                <div className="pt-2">
                  <div className="text-slate-400">Produkty</div>
                  <div className="mt-2 flex flex-col gap-2 pl-1">
                    {PRODUCTS_DROPDOWN.map((p) => (
                      <Link
                        key={p.href}
                        href={p.href}
                        onClick={handleNavClick}
                        className="text-slate-800 hover:text-slate-900"
                      >
                        {p.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href={resolvedNav.contactHref}
                  className="mt-4 inline-flex items-center justify-center rounded-full bg-[#568BD8] px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white"
                  onClick={handleNavClick}
                >
                  Kontakt
                </Link>
              </div>
            </div>
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;
