import SplitSection from "@/components/SplitSection";
import Image from "next/image";

const reasons = [
  "INDYWIDUALNE PODEJŚCIE DO KLIENTA",
  "DOŚWIADCZENIE W PROJEKTACH PRZEMYSŁOWYCH",
  "OD PROJEKTOWANIA PO WDROŻENIE",
  "ELASTYCZNOŚĆ I PRECYZJA",
  "KOMPLEKSOWE WDROŻENIA TECHNOLOGICZNE",
  "PROJEKTOWANIE I DIAGNOSTYKA",
];

const AboutPage = () => {
  return (
    <main>
      {/* HERO */}
      <section className="relative h-[220px] md:h-[280px] lg:h-80">
        <Image
          src="/images/about/hero.png"
          alt="HPSG – od projektowania po wdrożenie"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#104F77]/53" />
        <div className="absolute inset-0 flex items-center">
          <div className="page-container">
            <h1 className="text-white text-center uppercase font-bold tracking-[0.12em] text-xl md:text-3xl lg:text-4xl">
              OD PROJEKTOWANIA <br className="hidden md:block" /> PO
              WDROŻENIE...
            </h1>
          </div>
        </div>
      </section>

      {/* KIM JESTEŚMY */}
      <SplitSection
        heading="KIM JESTEŚMY?"
        body={
          <p className="mt-6 text-lg leading-relaxed text-slate-700 font-medium">
            <strong>HPS Group</strong> to firma specjalizująca się w
            projektowaniu, diagnostyce oraz wdrażaniu maszyn i urządzeń
            przemysłowych. Łączymy nowoczesne technologie z przemyślanym
            podejściem, by zwiększyć wydajność i niezawodność produkcji.
          </p>
        }
        imageSrc="/images/about/kim-jestesmy.png"
        imageAlt="Zespół HPSG"
        imageSide="right"
        imageRadius="bl"
        imageHeightClassName="lg:h-[650px]"
        tintClassName="bg-[#5B8EAE]/37"
        watermarkSrc="/images/about/01-water-mark.png"
        watermarkSide="auto"
        watermarkTopClassName="top-0"
        watermarkSizeClassName="h-[780px] w-[780px]"
      />

      {/* DLACZEGO MY */}
      <section id="products" className="py-16">
        <div className="page-container">
          <h2 className="text-center text-black text-2xl md:text-3xl lg:text-5xl font-bold uppercase p-15">
            DLACZEGO MY?
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((item) => (
              <div
                key={item}
                className="group relative aspect-16/10 w-full overflow-hidden bg-[#E9EEF2] place-items-center px-6 flex justify-center items-center"
              >
                <div className="text-black text-center text-[18px] md:text-[22px] lg:text-2xl font-bold uppercase">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NASZE KOMPETENCJE */}
      <SplitSection
        heading="NASZE KOMPETENCJE"
        body={
          <p className="mt-6 text-lg leading-relaxed text-slate-700 font-medium">
            Łączymy wiedzę inzynieryjną, doświadczenie oraz kreatywność, aby
            dostarczać rozwiązania dopasowane do indywidualnych potrzeb naszych
            klientów. Naszym priorytetem jest jakość, niezawodność i relacje
            partnerskie.
          </p>
        }
        imageSrc="/images/about/nasze-kompetencje.png"
        imageAlt="Zespół HPSG"
        tintClassName="bg-[#5B8EAE]/37"
        watermarkSrc="/images/about/02-water-mark.png"
        desktopMinHeight={650}
        imageSide="left"
      />

      {/* NASZA STRATEGIA (BELKA Z TŁEM) */}
      <section className="relative py-14 md:py-30 lg:mt-30">
        <Image
          src="/images/about/nasza-strategia.png"
          alt="Nasza strategia"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#104F77]/53" />
        <div className="relative page-container text-center">
          <h2 className="uppercase font-bold tracking-[0.12em] text-white text-xl md:text-2xl lg:text-4xl">
            NASZA STRATEGIA
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-white/90 lg:text-lg">
            Działamy według sprawdzonej metody realizacji projektów
            technologicznych, gwarantującej najwyższą jakość efektów.
          </p>
        </div>
      </section>

      {/* NASZA MISJA */}
      <SplitSection
        heading="NASZA MISJA"
        body={
          <p className="mt-6 text-lg leading-relaxed text-slate-700 font-medium">
            Naszą misją jest wspieranie przedsiębiorstw w procesach
            produkcyjnych poprzez automatyzację, robotyzację i wdrażanie
            nowoczesnych technologii...
          </p>
        }
        imageSrc="/images/about/nasza-misja2.png"
        imageAlt="Nasza misja"
        imageSide="right"
        imageRadius="bl"
        imageHeightClassName="h-[360px] sm:h-[420px] lg:h-[650px]"
        watermarkSrc="/images/about/03-water-mark.png"
        watermarkSide="auto"
        watermarkTopClassName="top-0"
        watermarkSizeClassName="h-[780px] w-[780px]"
        imageFit="contain"
        imagePaddingClassName="p-10 lg:p-16"
        imageClassName="bg-transparent"
      />
    </main>
  );
};

export default AboutPage;
