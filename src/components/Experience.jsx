export default function BambooExperience() {
  const pillars = [
    {
      title: "Care",
      desc: "Every service is delivered with precision, hygiene, and genuine attention to detail.",
      icon: "🌿",
    },
    {
      title: "Quality",
      desc: "We use premium products and refined techniques for beautiful, long-lasting finishes.",
      icon: "✨",
    },
    {
      title: "Comfort",
      desc: "A calm, welcoming space where you can relax, unwind, and feel completely at ease.",
      icon: "💚",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 md:px-12 py-16 md:py-20">
      <div className="rounded-[40px] bg-white/50 px-6 py-12 md:px-12">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="text-xs tracking-[0.35em] text-(--primary)">
            OUR APPROACH
          </p>
          <h2 className="mt-4 text-2xl md:text-4xl tracking-wide text-(--text-main)">
            The Bamboo Experience
          </h2>
        </div>

        {/* Pillars */}
        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="
              group
              rounded-3xl
              bg-white/65
              p-8
              text-center
              shadow-[0_12px_32px_rgba(0,0,0,0.08)]
              transition
              hover:-translate-y-1
              hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)]
            "
            >
              {/* Icon */}
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-(--accent)/25 text-2xl">
                {p.icon}
              </div>

              {/* Title */}
              <h3 className="mb-3 text-sm tracking-widest text-(--primary)">
                {p.title.toUpperCase()}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-(--text-main)/70">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
