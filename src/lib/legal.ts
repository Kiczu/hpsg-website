import fs from "node:fs/promises";
import path from "node:path";

export const SUBTITLE = "HPS GROUP SP. Z O.O." as const;

export const LEGAL_PAGES = {
    "polityka-prywatnosci": { title: "Polityka prywatności" },
    "regulamin-serwisu": { title: "Regulamin serwisu" },
    "przetwarzanie-danych": { title: "Informacja o przetwarzaniu danych" },
} as const;

export type LegalSlug = keyof typeof LEGAL_PAGES;
export const LEGAL_SLUGS = Object.keys(LEGAL_PAGES) as LegalSlug[];

const LEGAL_DIR = path.join(process.cwd(), "src", "content", "legal");

export const getLegalMarkdown = async (slug: LegalSlug) => {
    const filePath = path.join(LEGAL_DIR, `${slug}.md`);
    return fs.readFile(filePath, "utf8");
};

export const getLegalTitle = (slug: LegalSlug) => LEGAL_PAGES[slug].title;

export const getLegalPdfHref = (slug: LegalSlug) => `/legal/${slug}.pdf`;

export const isLegalSlug = (v: string): v is LegalSlug =>
    Object.prototype.hasOwnProperty.call(LEGAL_PAGES, v);
