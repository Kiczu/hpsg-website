import Image from "next/image";
import Link from "next/link";

type Service = {
  title: string;
  href: string;
  image: string;
  alt: string;
};

const services: Service[] = [
  {
    title: "PROJEKTOWANIE\nI SZKOLENIA",
    href: "/#services",
    image: "/images/services/01-design.png",
    alt: "Projektowanie i szkolenia",
  },
  {
    title: "NAPRAWA",
    href: "/#services",
    image: "/images/services/02-repair.png",
    alt: "Naprawa",
  },
  {
    title: "DIAGNOSTYKA",
    href: "/#services",
    image: "/images/services/03-diagnostics.png",
    alt: "Diagnostyka",
  },
];

const splitLines = (text: string) =>
  text.split("\n").map((line, i) => (
    <span key={`${line}-${i}`} className="block">
      {line}
    </span>
  ));

const ServicesSection = () => {
  return (
    <section id="services" className="py-16">
      <div className="page-container">
        <h2 className="text-center text-black text-2xl md:text-3xl lg:text-5xl font-bold uppercase p-15">
          NASZE USŁUGI
        </h2>

        <div className="mt-10 mx-auto grid max-w-6xl grid-cols-1 gap-15 sm:grid-cols-3">
          {services.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative h-36 sm:h-40 md:h-85 w-full overflow-hidden rounded-tr-[34px] rounded-bl-[34px]"
              aria-label={item.title.replaceAll("\n", " ")}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-[#104F77]/53 group-hover:bg-[#0056A5]/35 transition-colors duration-200" />

              <div className="absolute inset-0 flex items-center justify-center px-4">
                <p className="text-white text-xl font-bold tracking-[0.18em] uppercase text-center leading-snug">
                  {splitLines(item.title)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
