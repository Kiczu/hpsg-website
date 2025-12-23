import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/config/paths";

const Footer = () => {
  return (
    <footer className="bg-[#5f6469] text-white mt-16 py-10 lg:py-14">
      <div className="page-container mx-auto">
        <div className="mb-8">
          <Image
            src="/images/hpsg-logo.png"
            alt="HPSG Logo"
            width={150}
            height={60}
          />
        </div>
        <div className="lg:py-6 grid gap-10 md:grid-cols-3 lg:grid-cols-4">
          <div className="space-y-2">
            <div className="text-sm leading-relaxed text-white/90">
              HPS Group sp. z o.o.
              <br />
              ul. Akacjowa 21
              <br />
              55–330 Źródła
              <br />
              NIP: 9131629424
            </div>
          </div>
          <div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={ROUTES.about} className="hover:underline">
                  O firmie
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:underline">
                  Produkty
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#catalog" className="hover:underline">
                  Pobierz broszurę produktową
                </Link>
              </li>
              <li>
                <Link href="#offer" className="hover:underline">
                  Oferta
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:underline">
                  Usługi
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#contact" className="hover:underline">
                  Skontaktuj się z nami!
                </a>
              </li>
              <li>
                <a href="#news" className="hover:underline">
                  Nowości
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden lg:block" />
        </div>
      </div>

      {/* BELOW BAR */}
      <div className="border-t border-white/20 mt-6">
        <div className="w-[90%] mx-auto py-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-xs text-white/80">
          <div className="flex flex-wrap gap-x-2 gap-y-1">
            <a href="/polityka-prywatnosci" className="hover:underline">
              Polityka Prywatności
            </a>
            <span>/</span>
            <a href="/regulamin-serwisu" className="hover:underline">
              Regulamin Serwisu
            </a>
            <span>/</span>
            <a href="/przetwarzanie-danych" className="hover:underline">
              Przetwarzanie Danych osobowych
            </a>
          </div>

          <div className="text-right">
            Copyright by HPS Group Sp. z o.o.
            <br />
            Wszystkie prawa zastrzeżone
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
