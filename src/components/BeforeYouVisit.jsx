export default function BeforeYouVisit() {
  const items = [
    {
      title: "Easy booking",
      desc: "Book online at your convenience with clear pricing and no hidden steps.",
    },
    {
      title: "Clean & calm space",
      desc: "A relaxed, hygienic studio designed to help you feel comfortable from the moment you arrive.",
    },
    {
      title: "No rush, no pressure",
      desc: "We take time to listen and make sure every detail feels right for you.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 md:px-12 py-14 md:py-20">
      <div className="grid gap-10 md:grid-cols-2 md:items-start">
        {/* LEFT: heading + intro */}
        <div className="md:pr-10">
          <p className="text-xs tracking-[0.35em] text-(--primary)">
            BEFORE YOU VISIT
          </p>

          <h2 className="mt-4 text-2xl md:text-4xl tracking-wide text-(--text-main)">
            Know what to expect
          </h2>

          <p className="mt-5 text-sm md:text-base leading-relaxed text-(--text-main)/65">
            Whether it’s your first visit or your regular appointment, we keep
            everything calm, clear, and comfortable.
          </p>
        </div>

        {/* RIGHT: numbered list */}
        <div className="space-y-8">
          {items.map((item, idx) => (
            <div key={item.title} className="flex gap-5">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-(--accent)/25 text-sm tracking-widest text-(--primary)">
                {String(idx + 1).padStart(2, "0")}
              </div>

              <div>
                <h3 className="text-sm tracking-widest text-(--text-main)">
                  {item.title.toUpperCase()}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-(--text-main)/65">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

          {/* subtle spacing closure (no divider line) */}
          <p className="pt-2 text-[11px] tracking-widest text-(--text-main)/40">
            Calm service. Clear pricing. Beautiful finishes.
          </p>
        </div>
      </div>
    </section>
  );
}
