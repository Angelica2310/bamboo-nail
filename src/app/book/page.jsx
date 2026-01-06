import Link from "next/link";

export default function BookPage() {
  const phoneDisplay = "07926 607979";
  const phoneE164 = "+447926607979"; // UK mobile -> +44
  const whatsAppLink = `https://wa.me/447926607979`;
  const FACEBOOK_PAGE = "BambooNailsSpaHull";
  const INSTAGRAM_USER = "bamboo_nails_spa_hull";

  const messengerLink = `https://m.me/${FACEBOOK_PAGE}`;
  const instagramDmLink = `https://ig.me/m/${INSTAGRAM_USER}`; // try this first
  const instagramProfileLink = `https://www.instagram.com/${INSTAGRAM_USER}/`; // fallback

  // const subject = encodeURIComponent("Booking Request - Bamboo Nails & Spa");
  // const body = encodeURIComponent(
  //   `Hi Bamboo Nails & Spa,\n\nI would like to book an appointment.\n\nName:\nService:\nPreferred date(s):\nPreferred time(s):\nAny notes (design, removal, allergies):\n\nThank you!`
  // );

  // const mailto = `mailto:${email}?subject=${subject}&body=${body}`;

  return (
    <main className="mx-auto max-w-7xl px-4 md:px-12 py-14 md:py-20">
      {/* Header */}
      <div className="max-w-2xl">
        <p className="text-xs tracking-[0.35em] text-(--primary)">
          APPOINTMENTS
        </p>
        <h1 className="mt-4 text-3xl md:text-5xl tracking-wide text-(--text-main)">
          Book your visit
        </h1>
        <p className="mt-5 text-sm md:text-base leading-relaxed text-(--text-main)/65">
          To book an appointment, contact us by sending us a message on our
          Facebook page, Instagram page, phone, or WhatsApp. We’ll confirm
          availability and reply as soon as possible.
        </p>
      </div>

      {/* Booking options */}
      <section className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Phone */}
        <div className="rounded-3xl bg-white/60 p-7 shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
          <h2 className="text-sm tracking-widest text-(--primary)">PHONE</h2>
          <p className="mt-3 text-sm text-(--text-main)/70">
            Prefer to speak to us? Call and we’ll help you book quickly.
          </p>

          <a
            href={`tel:${phoneE164}`}
            className="
        mt-6 inline-flex w-full items-center justify-center
        rounded-lg
        border border-(--accent)
        bg-white/40
        px-5 py-3
        text-xs tracking-widest
        text-(--textMain)
        hover:bg-(--accent)
        transition
      "
          >
            CALL {phoneDisplay}
          </a>
        </div>

        {/* WhatsApp */}
        <div className="rounded-3xl bg-white/60 p-7 shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
          <h2 className="text-sm tracking-widest text-(--primary)">WHATSAPP</h2>
          <p className="mt-3 text-sm text-(--text-main)/70">
            Fast and easy — send your preferred date/time and any reference
            photos.
          </p>

          <a
            href={whatsAppLink}
            target="_blank"
            rel="noopener"
            className="
        mt-6 inline-flex w-full items-center justify-center
        rounded-lg
        border border-(--primary)
        bg-(--primary)/10
        px-5 py-3
        text-xs tracking-widest
        text-(--primary)
        hover:bg-(--primary)
        hover:text-white
        transition
      "
          >
            MESSAGE ON WHATSAPP
          </a>
        </div>

        {/* Facebook Messenger */}
        <div className="rounded-3xl bg-white/60 p-7 shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
          <h2 className="text-sm tracking-widest text-(--primary)">FACEBOOK</h2>
          <p className="mt-3 text-sm text-(--text-main)/70">
            Message us on Facebook for availability, prices, or booking help.
          </p>

          <a
            href={messengerLink}
            target="_blank"
            rel="noopener"
            className="
        mt-6 inline-flex w-full items-center justify-center
        rounded-lg
        border border-(--accent)
        bg-white/40
        px-5 py-3
        text-xs tracking-widest
        text-(--textMain)
        hover:bg-(--accent)
        transition
      "
          >
            MESSAGE ON MESSENGER
          </a>
        </div>

        {/* Instagram */}
        <div className="rounded-3xl bg-white/60 p-7 shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
          <h2 className="text-sm tracking-widest text-(--primary)">
            INSTAGRAM
          </h2>
          <p className="mt-3 text-sm text-(--text-main)/70">
            Send us a DM on Instagram — feel free to include inspiration photos.
          </p>

          <a
            href={instagramDmLink} // if this is flaky, change to instagramProfileLink
            target="_blank"
            rel="noopener"
            className="
        mt-6 inline-flex w-full items-center justify-center
        rounded-lg
        border border-(--accent)
        bg-white/40
        px-5 py-3
        text-xs tracking-widest
        text-(--textMain)
        hover:bg-(--accent)
        transition
      "
          >
            MESSAGE ON INSTAGRAM
          </a>

          <p className="mt-4 text-[11px] text-(--text-main)/55">
            If DM doesn’t open, use our{" "}
            <a
              href={instagramProfileLink}
              target="_blank"
              rel="noopener"
              className="underline underline-offset-4 hover:text-(--primary)"
            >
              Instagram profile
            </a>
            .
          </p>
        </div>
      </section>

      {/* What to include */}
      <section className="mt-12 rounded-[32px] bg-white/50 p-8 md:p-10">
        <h3 className="text-sm tracking-widest text-(--primary)">
          WHAT TO INCLUDE
        </h3>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <ul className="space-y-3 text-sm text-(--text-main)/70">
            <li className="flex items-start gap-3">
              <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-(--accent)/80 flex-shrink-0" />
              <span>You name</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-(--accent)/80 flex-shrink-0" />
              <span>Service you want (e.g., Gel, Acrylic, BIAB)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-(--accent)/80 flex-shrink-0" />
              <span>Preferred date(s) and time(s)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-(--accent)/80 flex-shrink-0" />
              <span>Any removal needed (gel/acrylic)</span>
            </li>
          </ul>

          <ul className="space-y-3 text-sm text-(--text-main)/70">
            <li className="flex items-start gap-3">
              <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-(--accent)/80 flex-shrink-0" />
              <span>Nail length/shape preference</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-(--accent)/80 flex-shrink-0" />
              <span>Design reference photo (if any)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-(--accent)/80 flex-shrink-0" />
              <span>Allergies or sensitivities</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-(--accent)/80 flex-shrink-0" />
              <span>Best way to reach you</span>
            </li>
          </ul>
        </div>

        <p className="mt-7 text-xs tracking-widest text-(--text-main)/50">
          Tip: Sending 2–3 preferred time options helps us confirm faster.
        </p>
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
