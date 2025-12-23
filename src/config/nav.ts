import { ROUTES } from "./paths";

export type NavItem = { label: string; href: string };

export const NAV_ITEMS: NavItem[] = [
    { label: "O firmie", href: ROUTES.about },
    { label: "Produkty", href: "__HOME__#products" },
    { label: "Usługi", href: "__HOME__#services" },
    { label: "Realizacje", href: "__HOME__#realizations" },
    { label: "Blog", href: ROUTES.blog },
];

export const CTA_CONTACT = { label: "Kontakt", href: "__HOME__#contact" };

export const PRODUCTS_DROPDOWN = [
    { label: "Stanowiska prób siłowników", href: ROUTES.cylinderTestStands },
] as const;
