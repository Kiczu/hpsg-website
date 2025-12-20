export type BlogPostPreview = {
    id: number | string;
    slug: string;
    title: string;
    excerpt: string;
    date: string; // ISO
    image?: { src: string; alt: string };
    contentHtml?: string;
};

const DEMO_POSTS: BlogPostPreview[] = [
    {
        id: 1,
        slug: "automatyzacja-krok-po-kroku",
        title: "Automatyzacja krok po kroku",
        excerpt: "5 sposobów na optymalizację produkcji...",
        date: "2025-09-04T10:00:00Z",
        image: { src: "/images/product-categories/03-robotic.png", alt: "Automatyzacja" },
        contentHtml: `
      <p>To jest przykładowa treść posta (mock).</p>
      <p>Wersja demo: pokazujemy layout, typografię i obrazek.</p>
      <h2>Co zyskujesz?</h2>
      <ul>
        <li>krótszy czas cyklu</li>
        <li>powtarzalność jakości</li>
        <li>mniej błędów operatora</li>
      </ul>
      <p>Jeśli chcesz, podpinamy to potem do WordPressa.</p>
    `,
    },
    {
        id: 2,
        slug: "automatyzacja-kontroli-i-montazu",
        title: "Automatyzacja kontroli i montażu w praktyce przemysłowej...",
        excerpt: "Jak połączyć kontrolę jakości z montażem w jednym procesie.",
        date: "2025-09-04T10:00:00Z",
        image: { src: "/images/product-categories/02-torque.png", alt: "Kontrola i montaż" },
        contentHtml: `
      <p>Mock treści: kontrola jakości + montaż.</p>
      <h2>Typowe rozwiązania</h2>
      <p>Stanowiska testowe, pomiary momentu, weryfikacja parametrów.</p>
    `,
    },
    {
        id: 3,
        slug: "stanowiska-montazowo-diagnostyczne",
        title: "Jak stanowiska montażowo–diagnostyczne zwiększają jakość i bezpieczeństwo produkcji...",
        excerpt: "Dlaczego warto łączyć diagnostykę z montażem.",
        date: "2025-09-04T10:00:00Z",
        image: { src: "/images/product-categories/04-diagnostic.png", alt: "Diagnostyka" },
        contentHtml: `
      <p>Mock treści: stanowiska montażowo-diagnostyczne.</p>
      <h2>Korzyści</h2>
      <ul>
        <li>mniej reklamacji</li>
        <li>pełna historia pomiarów</li>
        <li>łatwiejszy audyt jakości</li>
      </ul>
    `,
    },
];

const stripHtml = (html: string) => html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();

export const formatPlBlogDate = (iso: string) => {
    const d = new Date(iso);
    const weekday = d.toLocaleDateString("pl-PL", { weekday: "long" });
    const monthYear = d.toLocaleDateString("pl-PL", { month: "2-digit", year: "numeric" }); // ex. 09.2025
    return `${weekday.charAt(0).toUpperCase()}${weekday.slice(1)}, ${monthYear}`;
};

// .env: WORDPRESS_API_URL=https://hpsg.pl/wp-json/wp/v2
const WP_BASE = process.env.WORDPRESS_API_URL;

const mapWpPost = (p: any): BlogPostPreview => {
    const media = p?._embedded?.["wp:featuredmedia"]?.[0];
    const imageSrc = media?.source_url as string | undefined;

    return {
        id: p.id,
        slug: p.slug,
        title: stripHtml(p.title?.rendered ?? ""),
        excerpt: stripHtml(p.excerpt?.rendered ?? ""),
        date: p.date,
        image: imageSrc ? { src: imageSrc, alt: stripHtml(media?.alt_text ?? "") } : undefined,
        contentHtml: p.content?.rendered,
    };
}

export const getLatestPosts = async (limit = 3): Promise<BlogPostPreview[]> => {
    if (!WP_BASE) return DEMO_POSTS.slice(0, limit);

    const url = `${WP_BASE}/posts?per_page=${limit}&_embed=1`;
    const res = await fetch(url, { next: { revalidate: 60 } });

    if (!res.ok) return DEMO_POSTS.slice(0, limit);
    const data = await res.json();
    return (Array.isArray(data) ? data : []).map(mapWpPost);
}

export const getPostBySlug = async (slug: string): Promise<BlogPostPreview | null> => {
    if (!WP_BASE) {
        return DEMO_POSTS.find((p) => p.slug === slug) ?? null;
    }

    const url = `${WP_BASE}/posts?slug=${encodeURIComponent(slug)}&_embed=1`;
    const res = await fetch(url, { next: { revalidate: 60 } });

    if (!res.ok) return null;
    const data = await res.json();
    const post = Array.isArray(data) ? data[0] : null;
    return post ? mapWpPost(post) : null;
}
