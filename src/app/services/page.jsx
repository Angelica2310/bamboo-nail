import Link from "next/link";

export default function ServicesPage() {
  const sections = [
    {
      title: "Nail Extensions",
      subtitle: "Full sets, infills, and enhancements.",
      items: [
        "Acrylic with Gel Polish",
        "BIAB (Builder Gel)",
        "Ombre Acrylic",
        "Glitter Tips or Faded",
        "Take Off & New Set",
        "Nail Repair",
        "Acrylic on Toes",
      ],
      note: "If you need removal, please mention it when booking.",
    },
    {
      title: "Natural Nail Care",
      subtitle: "Clean, natural finishes for hands and feet.",
      items: [
        "Manicure with Gel Polish",
        "Gel Polish on Hands",
        "Gel Polish on Toes",
        "Full Pedicure with Gel Polish",
      ],
      note: "Treatments can be tailored to your preferred shape, length, and finish.",
    },
    {
      title: "Add-ons",
      subtitle: "Enhance your look with extra details.",
      items: ["Chrome", "Colour Tips", "Nail Art", "Crystals"],
      note: "Add-ons may vary depending on design and time required.",
    },
  ];

  const faqs = [
    {
      q: "Do I need to book an appointment?",
      a: "Appointments are recommended to guarantee your preferred time and technician, but walk-ins are welcome when availability allows.",
    },
    {
      q: "How long do nail services usually take?",
      a: "Service time depends on the treatment and design. Most appointments take between 45 minutes and 1.5 hours. More detailed nail art may take longer.",
    },
    {
      q: "How long do gel or BIAB nails last?",
      a: "With proper care, gel and BIAB nails typically last 2–3 weeks. Longevity can vary depending on lifestyle and nail growth.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept cash or bank transfer. Please contact us if you’d like to confirm before your visit.",
    },
    {
      q: "Can you create nail art based on my preference?",
      a: "Yes, we’ll do our best to recreate your preferred design. Please note that colours and details may vary slightly, but we’ll always aim to match your request as closely as possible.",
    },
  ];

  return (
    <main className="mx-auto max-w-7xl px-4 md:px-12 py-14 md:py-20">
      {/* Header */}
      <div className="max-w-2xl">
        <p className="text-xs tracking-[0.35em] text-(--primary)">SERVICES</p>
        <h1 className="mt-4 text-3xl md:text-5xl tracking-wide text-(--text-main)">
          Explore our services
        </h1>
        <p className="mt-5 text-sm md:text-base leading-relaxed text-(--text-main)/65">
          Choose the service you’d like, then book by email, phone, or WhatsApp.
          We’ll confirm availability and details with you.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/book"
            className="
              inline-flex items-center justify-center
              rounded-lg
              bg-(--primary)
              px-6 py-3
              text-xs tracking-widest
              text-white
              hover:bg-(--primary)/90
              transition
            "
          >
            BOOK YOUR APPOINTMENT
          </Link>

          <Link
            href="/contact"
            className="
              inline-flex items-center justify-center
              rounded-lg
              border border-(--primary)/35
              bg-white/50
              px-6 py-3
              text-xs tracking-widest
              text-(--primary)
               hover:bg-white/70
              transition
            "
          >
            CONTACT US
          </Link>
        </div>
      </div>

      {/* Sections */}
      <section className="mt-12 grid gap-8 md:grid-cols-3">
        {sections.map((s) => (
          <div
            key={s.title}
            className="
              rounded-3xl
              bg-white/60
              p-7
              shadow-[0_12px_32px_rgba(0,0,0,0.08)]
            "
          >
            <h2 className="text-sm tracking-widest text-(--primary)">
              {s.title.toUpperCase()}
            </h2>
            <p className="mt-3 text-sm text-(--text-main)/65">{s.subtitle}</p>

            <ul className="mt-6 space-y-3">
              {s.items.map((item) => (
                <li
                  key={item}
                  className="text-sm text-(--text-main)/75 flex gap-3"
                >
                  <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-(--accent)/80" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {s.note && (
              <p className="mt-6 text-xs leading-relaxed tracking-wide text-(--text-main)/45">
                {s.note}
              </p>
            )}
          </div>
        ))}
      </section>

      {/* Footer note (no prices) */}
      <section className="mt-12 rounded-[32px] bg-white/45 p-7 md:p-10">
        <h3 className="text-xs tracking-[0.35em] text-(--primary)">
          GOOD TO KNOW
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-(--text-main)/65">
          Prices can vary depending on colour, length, and design. If you’d like
          a quote before your appointment, just send us a reference photo and
          we’ll guide you.
        </p>
      </section>

      {/* FAQ */}
      <section className="mt-12 md:mt-16">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.35em] text-(--primary)">FAQ</p>
          <h2 className="mt-3 text-2xl md:text-3xl tracking-wide text-(--text-main)">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-(--text-main)/65">
            Quick answers to common questions before you book.
          </p>
        </div>

        <div className="mt-8 grid gap-4">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="
                group
                rounded-2xl
                bg-white/60
                p-5 md:p-6
                shadow-[0_10px_26px_rgba(0,0,0,0.06)]
                open:shadow-[0_16px_36px_rgba(0,0,0,0.10)]
                transition
              "
            >
              <summary className="cursor-pointer list-none">
                <div className="flex items-center justify-between gap-6">
                  <span className="text-sm md:text-base tracking-wide text-(--text-main)">
                    {f.q}
                  </span>
                  <span
                    className="
                      text-(--primary)
                      transition
                      group-open:rotate-45
                      text-xl
                      leading-none
                      select-none
                    "
                    aria-hidden="true"
                  >
                    +
                  </span>
                </div>
              </summary>

              <p className="mt-4 text-sm leading-relaxed text-(--text-main)/65">
                {f.a}
              </p>
            </details>
          ))}
        </div>
        {/* Link to policies */}
        <p className="mt-6 text-xs text-gray-600 text-center">
          For full details, please read our{" "}
          <Link
            href="/policy"
            className="underline underline-offset-4 hover:text-(--primary)"
          >
            Policies
          </Link>
          .
        </p>

        <div className="mt-10">
          <Link
            href="/book"
            className="text-xs tracking-widest text-(--primary) hover:opacity-80 transition"
          >
            READY TO BOOK? → GO TO BOOKING
          </Link>
        </div>
      </section>
    </main>
  );
}
