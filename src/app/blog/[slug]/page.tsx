import Image from "next/image";
import { notFound } from "next/navigation";
import { formatPlBlogDate, getPostBySlug } from "@/lib/blog";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const BlogPostPage = async ({ params }: PageProps) => {
  const { slug } = await params;

  const post = await getPostBySlug(slug);
  if (!post) return notFound();

  return (
    <main className="py-16">
      <div className="page-container">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-2xl md:text-4xl font-bold text-black">
            {post.title}
          </h1>

          <p className="mt-2 text-sm text-slate-500 italic">
            {formatPlBlogDate(post.date)}
          </p>

          {post.image?.src && (
            <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden bg-slate-200">
              <Image
                src={post.image.src}
                alt={post.image.alt || post.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {post.contentHtml ? (
            <div
              className="mt-8 text-slate-800 leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
          ) : (
            <p className="mt-8 text-slate-700">
              {post.excerpt || "Treść wkrótce."}
            </p>
          )}
        </div>
      </div>
    </main>
  );
};

export default BlogPostPage;
