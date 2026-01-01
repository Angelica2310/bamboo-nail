import Link from "next/link";

const googleReviews = {
  placeName: "Bamboo Nails & Spa Hull",
  highlights: [
    {
      name: "Rachel P.",
      text: "Recently visited Bamboo for the first time as I was unable to get to my usual nail artist and I was very impressed from start to finish. Communication to book was brilliant and the salon has been decorated beautifully. Zoe and David were very friendly and chatty, which made me feel very comfortable. The fact my nails are also lovely is a bonus as the overall experience was just great 😍 only been open a month, but seemed like old time pros 😁 thank you again xx",
    },
    {
      name: "Kristen L.",
      text: "Would recommend this place to anyone! Zoey and David were extremely professional and was so friendly. The hygiene standards of this shop was exceptional! I’m so happy with the turn out of my nails.. they did them exactly how i wanted them! I will definitely be going back <3",
    },
    {
      name: "Jade S.",
      text: "Couldn’t recommend this salon enough!😍 First time visiting today and I have had such a pleasant experience! My nails are honestly the best nails I’ve had! So smooth and they match perfectly! And they both took the time to make sure I was happy every step of the way! Such a beautiful space and a very welcoming atmosphere! Thank you so much! I will be back! 💅🏼✨💖",
    },
  ],
};

function StarRow({ value = 5 }) {
  const full = Math.max(0, Math.min(5, Math.round(value)));
  return (
    <div className="flex gap-1" aria-label={`${full} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < full ? "text-(--accent)" : "text-black/15"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function Review() {
  const { highlights } = googleReviews;

  return (
    <section className="mx-auto max-w-7xl px-4 md:px-12 py-12 md:py-16">
      <div className="grid gap-10 md:grid-cols-[360px_1fr] md:items-start">
        {/* LEFT: Summary panel */}
        <aside
          className="
            rounded-3xl
            border border-(--primary)/15
            bg-white/55
            backdrop-blur
            p-7
            shadow-[0_18px_50px_rgba(0,0,0,0.10)]
          "
        >
          <p className="text-xs tracking-[0.35em] text-(--primary) font-medium">
            GOOGLE REVIEWS
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl tracking-wide text-(--text-main)">
            Loved by
            <br />
            our clients
          </h2>

          <div className="mt-5 flex items-end gap-3">
            <div className="text-5xl leading-none text-(--text-main)">5.0</div>
            <div className="pb-1">
              <StarRow value={5} />
              <p className="mt-1 text-xs tracking-widest text-(--text-main)/60">
                Based on Google highlights
              </p>
            </div>
          </div>

          <div className="mt-7 h-px w-full bg-gradient-to-r from-transparent via-(--primary)/35 to-transparent" />

          <p className="mt-6 text-sm leading-relaxed text-(--text-main)/70">
            Real feedback from customers who value clean finishes, careful
            detail, and a calm studio experience.
          </p>

          <div className="mt-7 flex gap-3">
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
              BOOK NOW
            </Link>

            <Link
              href="/services"
              className="
                inline-flex items-center justify-center
                rounded-lg
                border border-(--primary)/35
                bg-white/50
                px-5 py-2.5
                text-xs tracking-widest
                text-(--primary)
                hover:bg-white/70
                transition
              "
            >
              SEE PRICES
            </Link>
          </div>
        </aside>

        {/* RIGHT: Review tiles */}
        <div className="space-y-5">
          {highlights.map((r, idx) => (
            <figure
              key={r.name}
              className="
                group relative
                rounded-3xl
                p-[1px]
                bg-gradient-to-br from-(--accent)/70 via-white/40 to-(--primary)/35
                shadow-[0_14px_40px_rgba(0,0,0,0.10)]
                transition
                hover:-translate-y-1
              "
            >
              <div className="relative rounded-3xl bg-white/70 backdrop-blur px-6 py-6 md:px-7 md:py-7">
                {/* bamboo pillar */}
                <div className="absolute left-0 top-6 bottom-6 w-[6px] rounded-full bg-(--primary)/45" />

                {/* big quote mark */}
                <div className="absolute right-6 top-5 text-5xl leading-none text-(--primary)/15 select-none">
                  “
                </div>

                <div className="flex items-start justify-between gap-6">
                  <div>
                    <StarRow value={5} />
                    <blockquote className="mt-3 text-sm md:text-base leading-relaxed text-(--text-main)/75">
                      {r.text}
                    </blockquote>
                  </div>

                  {/* small index badge */}
                  <div
                    className="
                      hidden md:flex
                      h-9 w-9 items-center justify-center
                      rounded-full
                      border border-(--primary)/25
                      bg-white/60
                      text-xs tracking-widest text-(--primary)
                    "
                    aria-hidden="true"
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                </div>

                <figcaption className="mt-5 flex items-center justify-between">
                  <span className="text-xs tracking-widest text-(--primary) font-medium">
                    {r.name}
                  </span>
                  <span className="text-[11px] tracking-widest text-(--text-main)/45">
                    Verified review
                  </span>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
