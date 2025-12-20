import Image from "next/image";
import Link from "next/link";
import { formatPlBlogDate, getLatestPosts } from "@/lib/blog";

const BlogSection = async () => {
  const posts = await getLatestPosts(3);
  const featured = posts[0];
  const side = posts.slice(1, 3);

  if (!featured) return null;

  return (
    <section id="news" className="py-16 md:py-20">
      <div className="page-container">
        <div className="text-center">
          <h2 className="text-center text-black text-2xl md:text-3xl lg:text-5xl font-bold uppercase">
            BLOG
          </h2>
          <p className="mt-4 text-xl md:text-3xl font-medium uppercase tracking-[0.08em] text-black">
            BAZA WIEDZY HPSG
          </p>
        </div>
        <div className="mt-12 grid gap-10 xl:grid-cols-2 xl:grid-rows-[auto_1fr]">
          {/* LEFT: TEXT (row 1 on lg) */}
          <div
            className="
              order-2 md:order-1 lg:order-0
              lg:col-start-1 lg:row-start-1
              max-w-xl
              mt-0
            "
          >
            <h3 className="text-base md:text-3xl font-semibold text-slate-900">
              {featured.title}
            </h3>

            {featured.excerpt ? (
              <p className="mt-1 text-sm md:text-lg text-slate-700">
                {featured.excerpt}
              </p>
            ) : null}

            <p className="mt-2 text-medium text-slate-500 italic">
              {formatPlBlogDate(featured.date)}
            </p>

            {/* Mobile button */}
            <div className="mt-4 md:hidden">
              <Link
                href={`/blog/${featured.slug}`}
                className="inline-flex rounded-full bg-[#98A2B3] px-8 py-3 text-sm font-semibold text-white hover:bg-[#8791A3]"
              >
                Czytaj więcej
              </Link>
            </div>
          </div>

          {/* LEFT: IMAGE (row 2 on lg) */}
          <Link
            href={`/blog/${featured.slug}`}
            className="
              order-1 md:order-2 lg:order-0
              lg:col-start-1 lg:row-start-2
              group relative block w-full overflow-hidden bg-slate-200
              h-40 sm:h-[200px] md:h-80 lg:h-[500px]
              mt-0
            "
            aria-label={`Czytaj więcej: ${featured.title}`}
          >
            {featured.image?.src && (
              <Image
                src={featured.image.src}
                alt={featured.image.alt || featured.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            )}

            <div className="absolute inset-0 bg-[#104F77]/35" />

            {/* Overlay button only md+ */}
            <div className="absolute inset-x-0 bottom-8 hidden md:flex justify-center">
              <span className="rounded-full bg-[#2B3A4A]/80 px-10 py-3 md:text-xl font-semibold text-white transition group-hover:bg-[#2B3A4A]/90">
                Czytaj więcej
              </span>
            </div>
          </Link>

          {/* RIGHT */}
          <div className="order-3 xl:order-0 xl:col-start-2 xl:row-start-2 space-y-12">
            {side.map((p) => (
              <article
                key={p.id}
                className="grid gap-6 sm:grid-cols-[320px_1fr] items-start"
              >
                <Link
                  href={`/blog/${p.slug}`}
                  className="relative block h-40 sm:h-[200px] lg:h-[225px] w-full overflow-hidden bg-slate-200"
                  aria-label={`Czytaj więcej: ${p.title}`}
                >
                  {p.image?.src && (
                    <Image
                      src={p.image.src}
                      alt={p.image.alt || p.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 40vw"
                    />
                  )}
                  <div className="absolute inset-0 bg-[#104F77]/28" />
                </Link>

                <div className="pt-1">
                  <h3 className="text-base md:text-xl lg:text-2xl font-semibold text-slate-900 leading-snug line-clamp-3">
                    {p.title}
                  </h3>

                  <p className="mt-2 text-medium text-slate-500 italic">
                    {formatPlBlogDate(p.date)}
                  </p>

                  <Link
                    href={`/blog/${p.slug}`}
                    className="mt-4 inline-flex rounded-full bg-[#98A2B3] px-8 py-3 text-xl font-semibold text-white hover:bg-[#8791A3]"
                  >
                    Czytaj więcej
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
