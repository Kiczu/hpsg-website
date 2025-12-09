import Image from "next/image";

const categories = [
  {
    title: "STANOWISKA POMIAROWE",
    image: "/images/product-categories/01-measuring.png",
    alt: "Stanowiska pomiarowe",
  },
  {
    title: "KLUCZE WYSOKO MOMENTOWE",
    image: "/images/product-categories/02-torque.png",
    alt: "Klucze wysoko momentowe",
  },
  {
    title: "STANOWISKA ZROBOTYZOWANE",
    image: "/images/product-categories/03-robotic.png",
    alt: "Stanowiska zrobotyzowane",
  },
  {
    title: "STANOWISKA MONTAŻOWO–DIAGNOSTYCZNE",
    image: "/images/product-categories/04-diagnostic.png",
    alt: "Stanowiska montażowo-diagnostyczne",
  },
  {
    title: "STOŁY MONTAŻOWE I OSPRZĘT",
    image: "/images/product-categories/05-tables.png",
    alt: "Stoły montażowe i osprzęt",
  },
  {
    title: "INNE",
    image: "/images/product-categories/06-other.png",
    alt: "Inne rozwiązania",
  },
];

const ProductCategories = () => {
  return (
    <section id="products" className="py-16">
      <div className="page-container">
        <h2 className="text-center text-black text-2xl md:text-3xl lg:text-5xl font-bold uppercase p-15">
          Kategorie produktów
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((item) => (
            <div
              key={item.title}
              className="group relative aspect-16/10 w-full overflow-hidden cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-[#104F77]/53 group-hover:bg-[#0056A5]/35 transition-colors duration-200" />

              <div className="absolute inset-0 flex items-center justify-center px-4">
                <p className="text-white text-sm sm:text-2xl lg:w-[65%] font-semibold uppercase text-center">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
