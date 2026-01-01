import Link from "next/link";

export default function PolicyPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 md:px-12 py-14 md:py-20">
      {/* Header */}
      <header className="max-w-3xl">
        <p className="text-xs tracking-[0.35em] text-(--primary)">POLICIES</p>
        <h1 className="mt-4 text-3xl md:text-5xl tracking-wide text-(--textMain)">
          Salon Policies & Guidelines
        </h1>
        <p className="mt-6 text-sm md:text-base leading-relaxed text-(--textMain)/65">
          Our policies are designed to ensure a calm, professional, and
          enjoyable experience for all clients. Please take a moment to read
          through the information below before your appointment.
        </p>
      </header>

      {/* Policy content */}
      <div className="mt-12 space-y-10 max-w-3xl">
        {/* Bookings */}
        <section>
          <h2 className="text-sm tracking-widest text-(--primary)">BOOKINGS</h2>
          <div className="mt-2 h-[2px] w-10 bg-(--accent)" />
          <p className="mt-4 text-sm leading-relaxed text-(--textMain)/65">
            Appointments are recommended to guarantee availability, particularly
            during busy periods. Walk-ins are welcome when space allows, however
            priority will always be given to clients with confirmed bookings.
          </p>
        </section>

        {/* Cancellations */}
        <section>
          <h2 className="text-sm tracking-widest text-(--primary)">
            CANCELLATIONS & RESCHEDULING
          </h2>
          <div className="mt-2 h-[2px] w-10 bg-(--accent)" />
          <p className="mt-4 text-sm leading-relaxed text-(--textMain)/65">
            If you need to cancel or reschedule your appointment, we kindly ask
            that you notify us as early as possible. This allows us to offer the
            appointment slot to another client and helps us maintain a smooth
            schedule.
          </p>
        </section>

        {/* Late arrivals */}
        <section>
          <h2 className="text-sm tracking-widest text-(--primary)">
            LATE ARRIVALS
          </h2>
          <div className="mt-2 h-[2px] w-10 bg-(--accent)" />
          <p className="mt-4 text-sm leading-relaxed text-(--textMain)/65">
            Please arrive on time for your appointment. If you arrive late, your
            service time may be shortened to avoid impacting other clients, or
            your appointment may need to be rescheduled depending on
            availability.
          </p>
        </section>

        {/* Services & results */}
        <section>
          <h2 className="text-sm tracking-widest text-(--primary)">
            SERVICES & EXPECTATIONS
          </h2>
          <div className="mt-2 h-[2px] w-10 bg-(--accent)" />
          <p className="mt-4 text-sm leading-relaxed text-(--textMain)/65">
            We take care to deliver high-quality, refined finishes tailored to
            each client. Please note that results may vary depending on natural
            nail condition, lifestyle, and aftercare. We encourage open
            communication during your service to ensure the best possible
            result.
          </p>
        </section>

        {/* Nail art */}
        <section>
          <h2 className="text-sm tracking-widest text-(--primary)">
            NAIL ART & CUSTOM DESIGNS
          </h2>
          <div className="mt-2 h-[2px] w-10 bg-(--accent)" />
          <p className="mt-4 text-sm leading-relaxed text-(--textMain)/65">
            Inspiration photos and design ideas are welcome. While we always aim
            to closely match your requested design, slight variations in colour,
            shape, or detail may occur due to technique, materials, or
            individual nail conditions.
          </p>
        </section>

        {/* Repairs */}
        <section>
          <h2 className="text-sm tracking-widest text-(--primary)">
            REPAIRS & ADJUSTMENTS
          </h2>
          <div className="mt-2 h-[2px] w-10 bg-(--accent)" />
          <p className="mt-4 text-sm leading-relaxed text-(--textMain)/65">
            Repair or adjustment requests may be considered depending on the
            time since your original appointment and the condition of the nail.
            Please contact us as soon as possible so we can assess and advise on
            the most suitable solution.
          </p>
        </section>

        {/* Hygiene */}
        <section>
          <h2 className="text-sm tracking-widest text-(--primary)">
            HYGIENE & SAFETY
          </h2>
          <div className="mt-2 h-[2px] w-10 bg-(--accent)" />
          <p className="mt-4 text-sm leading-relaxed text-(--textMain)/65">
            We follow strict hygiene practices and clean tools and workstations
            carefully between clients. If you have allergies, sensitivities, or
            medical conditions that may affect your service, please inform us
            prior to your appointment.
          </p>
        </section>

        {/* Personal items */}
        <section>
          <h2 className="text-sm tracking-widest text-(--primary)">
            PERSONAL BELONGINGS
          </h2>
          <div className="mt-2 h-[2px] w-10 bg-(--accent)" />
          <p className="mt-4 text-sm leading-relaxed text-(--textMain)/65">
            While we do our best to provide a safe and comfortable environment,
            we cannot accept responsibility for lost or damaged personal items.
            Please keep valuables with you during your visit.
          </p>
        </section>

        {/* General */}
        <section>
          <h2 className="text-sm tracking-widest text-(--primary)">GENERAL</h2>
          <div className="mt-2 h-[2px] w-10 bg-(--accent)" />
          <p className="mt-4 text-sm leading-relaxed text-(--textMain)/65">
            These policies are in place to ensure fairness and a positive
            experience for all clients. Policies may be updated from time to
            time. If you have any questions, please feel free to contact us.
          </p>
        </section>

        {/* CTA */}
        <div className="pt-6">
          <Link
            href="/contact"
            className="inline-flex text-xs tracking-widest text-(--primary) underline underline-offset-4"
          >
            Have questions? Get in touch →
          </Link>
        </div>
      </div>
    </main>
  );
}
