import Image from "next/image";

const stats = [
  {
    top: "PONAD 6 LAT",
    bottom: "NA RYNKU",
    icon: "/images/stats-section/01-time.png",
    alt: "Ponad 6 lat na rynku",
  },
  {
    top: "PONAD 300",
    bottom: "ZADOWOLONYCH KLIENTÓW",
    icon: "/images/stats-section/02-services.png",
    alt: "Ponad 300 zadowolonych klientów",
  },
  {
    top: "PONAD 350",
    bottom: "PROJEKTÓW",
    icon: "/images/stats-section/03-projects.png",
    alt: "Ponad 350 projektów",
  },
  {
    top: "BEZPIECZNE",
    bottom: "ROZWIĄZANIA",
    icon: "/images/stats-section/04-safe.png",
    alt: "Bezpieczne rozwiązania",
  },
];

const StatsSection = () => {
  return (
    <section id="stats" className="py-12">
      <div className="page-container">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {stats.map((item) => (
            <div
              key={item.top}
              className="flex flex-col items-center text-black"
            >
              <div
                className="relative 
                          w-28 h-28
                          sm:w-32 sm:h-32
                          md:w-36 md:h-36 
                          lg:w-40 lg:h-40 
                          mb-4"
              >
                <Image
                  src={item.icon}
                  alt={item.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-[10px] sm:text-xs lg:text-sm font-extrabold tracking-[0.18em] uppercase leading-snug">
                <div>{item.top}</div>
                <div className="mt-1 font-normal tracking-[0.16em]">
                  {item.bottom}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
