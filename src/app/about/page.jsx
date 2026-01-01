import Link from "next/link";

export default function AboutPage() {
  const pillars = [
    {
      title: "Care",
      desc: "We focus on clean preparation, gentle techniques, and detail you can feel in the final finish.",
    },
    {
      title: "Quality",
      desc: "Premium products and refined methods for results that look beautiful and last.",
    },
    {
      title: "Comfort",
      desc: "A calm, welcoming space where you can relax — with friendly service from start to finish.",
    },
  ];

  const values = [
    "Thoughtful consultation and clear communication",
    "Clean tools and careful hygiene standards",
    "Finishes that look refined, not rushed",
    "Design support — bring a photo and we’ll guide you",
  ];

  return (
    <main className="mx-auto max-w-7xl px-4 md:px-12 py-14 md:py-20">
      {/* Header */}
      <section className="grid gap-10 md:grid-cols-2 md:items-center">
        {/* Text header */}
        <header className="max-w-3xl">
          <p className="text-xs tracking-[0.35em] text-(--primary)">ABOUT US</p>
          <h1 className="mt-4 text-3xl md:text-5xl tracking-wide text-(--textMain)">
            Natural calm. Premium finishes.
          </h1>
          <p className="mt-6 text-sm md:text-base leading-relaxed text-(--textMain)/65">
            At Bamboo Nails & Spa, we believe the best beauty experiences feel
            effortless — a calm space, thoughtful care, and details that elevate
            every finish. Whether you’re here for a simple refresh or something
            special, we focus on results that feel clean, refined, and you.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
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
              href="/services"
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
              VIEW SERVICES
            </Link>
          </div>
        </header>
        {/* Video panel */}
        <div className="relative">
          <div className="overflow-hidden rounded-[36px] bg-white/55 ring-1 ring-white/30 shadow-[0_16px_40px_rgba(0,0,0,0.12)]">
            <video
              src="/about-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="h-[350px] w-full object-cover md:h-[420px]"
            />

            <div
              className="
              pointer-events-none absolute inset-0 rounded-[36px]
              ring-1 ring-white/25
              shadow-[inset_0_0_0_14px_rgba(255,255,255,0.5)]
            "
            />
          </div>
        </div>
      </section>

      {/* Split section: Story + highlights */}
      <section className="mt-14 md:mt-18 grid gap-12 md:grid-cols-2 md:items-start">
        {/* Story */}
        <div>
          <h2 className="text-sm tracking-widest text-(--primary)">
            OUR STORY
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-(--textMain)/65">
            Bamboo represents what we love about beauty: fresh, natural, and
            quietly confident. Our goal is simple — create a studio experience
            that feels calm, professional, and beautifully consistent.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-(--textMain)/65">
            We take time to understand what you want, guide you if you’re
            unsure, and deliver finishes that look premium without feeling
            overdone.
          </p>

          <h3 className="mt-10 text-sm tracking-widest text-(--primary)">
            WHAT WE’RE KNOWN FOR
          </h3>
          <ul className="mt-5 space-y-3">
            {values.map((v) => (
              <li key={v} className="flex gap-3 text-sm text-(--textMain)/70">
                <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-(--accent)/80 flex-shrink-0" />
                <span>{v}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* One soft panel (not lots of cards) */}
        <div className="rounded-[32px] bg-white/55 p-7 md:p-10 shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
          <p className="text-xs tracking-[0.35em] text-(--primary)">
            THE BAMBOO EXPERIENCE
          </p>
          <h2 className="mt-3 text-2xl md:text-3xl tracking-wide text-(--textMain)">
            A calm approach to beauty
          </h2>

          <div className="mt-8 space-y-8">
            {pillars.map((p, idx) => (
              <div key={p.title} className="flex gap-5">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-(--accent)/25 text-xs tracking-widest text-(--primary)">
                  {String(idx + 1).padStart(2, "0")}
                </div>

                <div>
                  <h3 className="text-sm tracking-widest text-(--textMain)">
                    {p.title.toUpperCase()}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-(--textMain)/65">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-xs tracking-widest text-(--textMain)/50">
            Calm service. Clear communication. Beautiful finishes.
          </p>
        </div>
      </section>

      {/* Hygiene + reassurance */}
      <section className="mt-14 md:mt-18 rounded-[32px] bg-white/45 p-7 md:p-10">
        <div className="max-w-3xl">
          <p className="text-xs tracking-[0.35em] text-(--primary)">
            HYGIENE & CARE
          </p>
          <h2 className="mt-3 text-2xl md:text-3xl tracking-wide text-(--textMain)">
            Clean, careful, and professional
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-(--textMain)/65">
            We take hygiene seriously. Tools and work areas are cleaned
            carefully between appointments, and we always aim to create a
            comfortable experience — especially for first-time clients.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-(--textMain)/65">
            If you have any sensitivities or preferences, let us know when you
            book — we’ll do our best to accommodate.
          </p>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mt-14 md:mt-18">
        <div className="rounded-[36px] bg-white/55 p-8 md:p-10 shadow-[0_12px_32px_rgba(0,0,0,0.08)] flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs tracking-[0.35em] text-(--primary)">
              READY TO VISIT?
            </p>
            <h2 className="mt-3 text-2xl md:text-3xl tracking-wide text-(--textMain)">
              Let’s find your perfect finish.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-(--textMain)/65">
              Message us your preferred time and any reference photos — we’ll
              confirm the details with you.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
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
              BOOK NOW
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
              CONTACT
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
