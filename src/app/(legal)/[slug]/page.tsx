import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import {
  LEGAL_SLUGS,
  SUBTITLE,
  getLegalMarkdown,
  getLegalPdfHref,
  getLegalTitle,
  isLegalSlug,
  type LegalSlug,
} from "@/lib/legal";

type PageProps = {
  params: { slug: string } | Promise<{ slug: string }>;
};

export const runtime = "nodejs";
export const dynamicParams = false;

export const generateStaticParams = () => {
  return LEGAL_SLUGS.map((slug) => ({ slug }));
};

export const generateMetadata = async ({ params }: PageProps) => {
  const { slug } = await params;
  if (!isLegalSlug(slug)) return {};
  return { title: getLegalTitle(slug) };
};

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;
  if (!isLegalSlug(slug)) notFound();

  const legalSlug = slug as LegalSlug;

  const title = getLegalTitle(legalSlug);
  const md = await getLegalMarkdown(legalSlug);
  const pdfHref = getLegalPdfHref(legalSlug);

  return (
    <div className="page-container">
      <article className="legal-content prose max-w-none">
        <h1>{title}</h1>
        <span className="text-2xl">{SUBTITLE}</span>

        <ReactMarkdown remarkPlugins={[remarkGfm]}>{md}</ReactMarkdown>
      </article>

      <div className="mt-10 flex justify-center gap-4">
        <a
          href={pdfHref}
          download
          className="inline-flex items-center justify-center rounded-full bg-[#7DB1D3] px-6 py-3 text-sm font-semibold text-white hover:bg-[#7DB1D3]/90"
        >
          Pobierz PDF
        </a>

        <a
          href={pdfHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-[#7DB1D3] px-6 py-3 text-sm font-semibold text-white hover:bg-[#7DB1D3]/90"
        >
          Otwórz PDF
        </a>
      </div>
    </div>
  );
};

export default Page;
