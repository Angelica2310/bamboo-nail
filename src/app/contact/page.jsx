import Link from "next/link";

export default function ContactPage() {
  const addressLines = ["611 Anlaby Road,", "Hull", "HU3 6SU"];
  const phoneDisplay = "07926 607979";
  const phoneE164 = "+447926607979";
  const email = "bambooltd611@gmail.com";
  const whatsappUrl = "https://wa.me/447926607979";

  const subject = encodeURIComponent("Enquiry - Bamboo Nails & Spa");
  const bodyTemplate = encodeURIComponent(
    `Hi Bamboo Nails & Spa,\n\nName:\nService (optional):\nPreferred date/time (optional):\nMessage:\n\nThank you!`
  );
  const mailto = `mailto:${email}?subject=${subject}&body=${bodyTemplate}`;

  const hours = [
    { day: "Mon – Sat", time: "9am – 6pm" },
    { day: "Sunday", time: "Closed", italic: true },
  ];

  return (
    <main className="mx-auto max-w-7xl px-4 md:px-12 py-14 md:py-20">
      {/* Header */}
      <div className="max-w-2xl">
        <p className="text-xs tracking-[0.35em] text-(--primary)">CONTACT</p>
        <h1 className="mt-4 text-3xl md:text-5xl tracking-wide text-(--textMain)">
          Get in touch
        </h1>
        <p className="mt-5 text-sm md:text-base leading-relaxed text-(--textMain)/65">
          Have a question or want to book? Message us by email, call, or
          WhatsApp — we’ll reply as soon as possible.
        </p>
      </div>

      {/* Top grid */}
      <section className="mt-12 grid gap-8 md:grid-cols-3">
        {/* Contact methods */}
        <div className="md:col-span-2 rounded-3xl bg-white/60 p-7 md:p-9 shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
          <h2 className="text-sm tracking-widest text-(--primary)">
            CONTACT DETAILS
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {/* Address */}
            {/* Address */}
            <div className="rounded-2xl bg-white/60 p-6">
              <p className="text-xs tracking-widest text-(--textMain)/55">
                ADDRESS
              </p>

              <p className="mt-3 text-sm leading-relaxed text-(--textMain)/75">
                611 Anlaby Road,
                <br />
                Hull
                <br />
                HU3 6SU
              </p>

              {/* Map under address */}
              <div className="mt-5 overflow-hidden rounded-2xl border border-(--primary)/10">
                <iframe
                  title="Bamboo Nails & Spa Location"
                  src="https://www.google.com/maps?q=611%20Anlaby%20Road,%20Hull,%20HU3%206SU&output=embed"
                  className="h-[220px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://www.google.com/maps?q=611+Anlaby+Road+Hull+HU3+6SU"
                  target="_blank"
                  rel="noopener"
                  className="
        inline-flex w-full items-center justify-center
        rounded-lg
        border border-(--primary)
        bg-white/50
        px-4 py-2.5
        text-xs tracking-widest
        text-(--primary)
        hover:bg-(--primary)
        hover:text-white
        transition
      "
                >
                  OPEN IN GOOGLE MAPS
                </a>

                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=611+Anlaby+Road+Hull+HU3+6SU"
                  target="_blank"
                  rel="noopener"
                  className="
        inline-flex w-full items-center justify-center
        rounded-lg
        bg-(--primary)
        px-4 py-2.5
        text-xs tracking-widest
        text-white
        hover:bg-(--primary)/90
        transition
      "
                >
                  GET DIRECTIONS
                </a>
              </div>
            </div>

            {/* Phone + Email */}
            <div className="rounded-2xl bg-white/60 p-6">
              <p className="text-xs tracking-widest text-(--textMain)/55">
                PHONE
              </p>
              <a
                href={`tel:${phoneE164}`}
                className="mt-3 inline-block text-sm tracking-wide text-(--primary) hover:opacity-80 transition"
              >
                {phoneDisplay}
              </a>

              <p className="mt-6 text-xs tracking-widest text-(--textMain)/55">
                EMAIL
              </p>
              <a
                href={mailto}
                className="mt-3 inline-block text-sm tracking-wide text-(--primary) hover:opacity-80 transition break-all"
              >
                {email}
              </a>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener"
                  className="
                    inline-flex items-center justify-center
                    rounded-lg
                    border border-(--primary)
                    bg-(--primary)/10
                    px-5 py-2.5
                    text-xs tracking-widest
                    text-(--primary)
                    hover:bg-(--primary)
                    hover:text-white
                    transition
                  "
                >
                  WHATSAPP
                </a>

                <Link
                  href="/book"
                  className="
                    inline-flex items-center justify-center
                    rounded-lg
                    bg-(--primary)
                    px-5 py-2.5
                    text-xs tracking-widest
                    text-white
                    hover:bg-(--primary)/90
                    transition
                  "
                >
                  BOOK
                </Link>
              </div>
            </div>
          </div>

          {/* Helpful note */}
          <div className="mt-7 rounded-2xl bg-white/50 p-6">
            <p className="text-xs tracking-widest text-(--primary)">
              QUICK TIP
            </p>
            <p className="mt-3 text-sm leading-relaxed text-(--textMain)/65">
              To book faster, include the service you want, 2–3 preferred time
              options, and a reference photo if you have one.
            </p>
          </div>
        </div>

        {/* Opening hours */}
        <aside className="rounded-3xl bg-white/60 p-7 md:p-9 shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
          <h2 className="text-sm tracking-widest text-(--primary)">
            OPENING HOURS
          </h2>

          <div className="mt-6 space-y-3">
            {hours.map((h) => (
              <div
                key={h.day}
                className="flex items-center justify-between gap-6 text-sm"
              >
                <span className="text-(--textMain)/70">{h.day}</span>
                <span
                  className={`text-(--textMain) ${
                    h.italic ? "italic text-(--textMain)/70" : ""
                  }`}
                >
                  {h.time}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-20 rounded-2xl bg-white/50 p-6">
            <p className="text-xs tracking-widest text-(--textMain)/55">
              FIRST TIME?
            </p>
            <p className="mt-3 text-sm leading-relaxed text-(--textMain)/65">
              If you’re unsure what to book, send us a message and we’ll
              recommend the best option.
            </p>
          </div>
        </aside>
      </section>

      {/* Simple email form (no backend) */}
      <section className="mt-12 rounded-[32px] bg-white/55 p-7 md:p-10 shadow-[0_12px_32px_rgba(0,0,0,0.06)]">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.35em] text-(--primary)">
            SEND A MESSAGE
          </p>
          <h2 className="mt-3 text-2xl md:text-3xl tracking-wide text-(--textMain)">
            Message us by email
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-(--textMain)/65">
            This form opens your email app with a pre-filled message (no account
            needed).
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-white/60 p-5">
            <p className="text-xs tracking-widest text-(--textMain)/55">
              INCLUDE
            </p>
            <ul className="mt-3 space-y-2 text-sm text-(--textMain)/65">
              <li className="flex items-start gap-3">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-(--accent)/80 flex-shrink-0" />
                <span>Name</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-(--accent)/80 flex-shrink-0" />
                <span>Service (optional)</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-(--accent)/80 flex-shrink-0" />
                <span>Preferred date/time</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-(--accent)/80 flex-shrink-0" />
                <span>Message</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white/60 p-5">
            <p className="text-xs tracking-widest text-(--textMain)/55">
              QUICK ACTION
            </p>
            <a
              href={mailto}
              className="
                mt-4 inline-flex w-full items-center justify-center
                rounded-lg
                bg-(--primary)
                px-6 py-3
                text-xs tracking-widest
                text-white
                hover:bg-(--primary)/90
                transition
              "
            >
              OPEN EMAIL MESSAGE
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener"
              className="
                mt-3 inline-flex w-full items-center justify-center
                rounded-lg
                border border-(--primary)
                bg-(--primary)/10
                px-6 py-3
                text-xs tracking-widest
                text-(--primary)
                hover:bg-(--primary)
                hover:text-white
                transition
              "
            >
              OPEN WHATSAPP
            </a>
          </div>
        </div>
      </section>

      {/* Back link */}
      <div className="mt-10">
        <Link
          href="/"
          className="text-xs tracking-widest text-(--primary) hover:opacity-80 transition"
        >
          ← BACK TO HOME
        </Link>
      </div>
    </main>
  );
}
