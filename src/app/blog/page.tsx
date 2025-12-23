import Image from "next/image";
import Link from "next/link";
import { formatPlBlogDate, getLatestPosts } from "@/lib/blog";

const BlogPage = async () => {
  const posts = await getLatestPosts(12);

  return (
    <main className="py-16">
      <div className="page-container">
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold uppercase text-black">
            Blog
          </h1>
          <p className="mt-4 text-sm md:text-lg text-slate-700">
            Baza wiedzy HPSG (na razie mocki – później podepniemy WordPressa).
          </p>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.id}
              className="overflow-hidden rounded-xl bg-white shadow-sm"
            >
              <Link href={`/blog/${p.slug}`} className="block">
                <div className="relative h-44 w-full bg-slate-200">
                  {p.image?.src ? (
                    <Image
                      src={p.image.src}
                      alt={p.image.alt || p.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-[#104F77]/20" />
                </div>

                <div className="p-6">
                  <h2 className="text-lg font-semibold text-slate-900 leading-snug line-clamp-2">
                    {p.title}
                  </h2>
                  <p className="mt-2 text-xs text-slate-500 italic">
                    {formatPlBlogDate(p.date)}
                  </p>

                  {p.excerpt ? (
                    <p className="mt-3 text-sm text-slate-700 line-clamp-3">
                      {p.excerpt}
                    </p>
                  ) : null}

                  <div className="mt-5 inline-flex rounded-full bg-[#98A2B3] px-6 py-2 text-sm font-semibold text-white">
                    Czytaj więcej
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default BlogPage;
