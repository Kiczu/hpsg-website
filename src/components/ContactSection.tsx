"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import TurnstileWidget from "./TurnstileWidget";

type Status = "idle" | "sending" | "success" | "error";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactSection = () => {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [consentRequired, setConsentRequired] = useState(false);
  const [consentMarketing, setConsentMarketing] = useState(false);

  const [company, setCompany] = useState("");

  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const siteKey = useMemo(
    () => process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "",
    []
  );

  const validate = () => {
    if (company.trim().length > 0) return "Coś tu śmierdzi (spam).";
    if (name.trim().length < 2) return "Podaj imię i nazwisko.";
    if (!emailRegex.test(email.trim())) return "Podaj poprawny e-mail.";
    if (message.trim().length < 10) return "Wiadomość jest za krótka.";
    if (!consentRequired) return "Zaznacz zgodę wymaganą.";
    if (siteKey && !turnstileToken) return "Potwierdź, że nie jesteś botem.";
    return null;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const v = validate();
    if (v) {
      setError(v);
      setStatus("error");
      return;
    }

    setStatus("sending");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          consentRequired,
          consentMarketing,
          company, // honeypot
          turnstileToken,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Nie udało się wysłać wiadomości.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setConsentRequired(false);
      setConsentMarketing(false);
      setCompany("");
      setTurnstileToken(null);
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "Coś poszło nie tak.");
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="page-container">
        <h2 className="text-center text-black text-2xl md:text-4xl lg:text-5xl font-bold uppercase tracking-[0.06em]">
          SKONTAKTUJ SIĘ Z NAMI!
        </h2>
      </div>

      <div className="mt-10 grid gap-10 lg:gap-20 lg:grid-cols-[minmax(0,720px)_1fr] lg:items-stretch">
        {/* LEFT: form (page-container offset) */}
        <div className="page-container lg:pr-0 lg:pl-20">
          <form onSubmit={onSubmit} className="space-y-10 max-w-[620px]">
            <div>
              <label className="block text-[16px] font-bold uppercase tracking-[0.08em] text-black">
                IMIĘ I NAZWISKO
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full rounded-tr-4xl rounded-br-4xl bg-[#AFC7D8] px-6 py-4 text-sm text-black outline-none
                         focus:ring-2 focus:ring-[#104F77]/40"
              />
            </div>

            <div>
              <label className="block text-[16px] font-bold uppercase tracking-[0.08em] text-black">
                E-MAIL
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="mt-2 w-full rounded-tr-4xl rounded-br-4xl bg-[#AFC7D8] px-6 py-4 text-sm text-black outline-none
                         focus:ring-2 focus:ring-[#104F77]/40"
              />
            </div>

            <div>
              <label className="block text-[16px] font-bold uppercase tracking-[0.08em] text-black">
                NAPISZ WIADOMOŚĆ
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-2 w-full min-h-[170px] resize-none rounded-tr-4xl rounded-br-4xl bg-[#AFC7D8] px-6 py-5 text-sm text-black outline-none
                         focus:ring-2 focus:ring-[#104F77]/40"
              />
            </div>

            {/* honeypot (hidden) */}
            <div className="hidden">
              <label>Company</label>
              <input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>

            {/* button + status */}
            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-full bg-[#7DB1D3] px-10 py-4 text-xs font-bold uppercase tracking-[0.08em] text-black
                         hover:bg-[#6AA8CF] disabled:opacity-60"
              >
                {status === "sending" ? "Wysyłam..." : "Wyślij"}
              </button>

              {status === "success" && (
                <span className="text-sm font-semibold text-green-700">
                  Success!
                </span>
              )}
            </div>

            {/* Turnstile */}
            {siteKey ? (
              <div className="pt-2">
                <TurnstileWidget
                  siteKey={siteKey}
                  onToken={setTurnstileToken}
                />
              </div>
            ) : null}

            {/* Errors */}
            {status === "error" && error ? (
              <p className="text-sm font-semibold text-red-700">{error}</p>
            ) : null}

            {/* Consents */}
            <div className="space-y-4 pt-2 text-[10px] leading-relaxed text-slate-700">
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={consentRequired}
                  onChange={(e) => setConsentRequired(e.target.checked)}
                  className="mt-1 h-4 w-4"
                />
                <span>
                  Oświadczam, że zapoznałem się z informacją o przetwarzaniu
                  danych osobowych zawartą w {" "}
                  <Link href="/polityka-prywatnosci" className="underline">
                    Polityce Prywatności
                  </Link>{" "}
                   oraz z {" "}
                  <Link href="/regulamin-serwisu" className="underline">
                    Regulaminem Serwisu
                  </Link>{" "}
                   i akceptuję ich warunki. oraz z i akceptuję ich warunki.
                </span>
              </label>

              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={consentMarketing}
                  onChange={(e) => setConsentMarketing(e.target.checked)}
                  className="mt-1 h-4 w-4"
                />
                <span>
                  Wyrażam zgodę się na przetwarzanie przez HPS Group Sp. z o.o.
                  moich danych osobowych wskazanych w formularzu kontaktowym w
                  celu otrzymywania informacji marketingowych, w tym newslettera
                  oraz informacji handlowych, drogą elektroniczną za
                  pośrednictwem telekomunikacyjnych urządzeń końcowych i
                  automatycznych systemów wywołujących, zgodnie z art. 398
                  ustawy z dnia 12 lipca 2024 r. – Prawo komunikacji
                  elektronicznej (Dz.U. z 2024 r. poz. 1221, z późn. zm.).
                </span>
              </label>
            </div>
          </form>
        </div>

        {/* RIGHT: image touches right edge */}
        <div className="relative w-[90%] max-h-4/6 justify-self-end overflow-hidden bg-slate-200 lg:rounded-bl-[70px]">
          <div className="relative h-full">
            <Image
              src="/images/contact/contact.png"
              alt="Kontakt"
              fill
              className="object-cover"
              priority={false}
            />
            <div className="absolute inset-0 bg-[#5B8EAE]/37" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
