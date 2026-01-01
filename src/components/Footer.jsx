import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-(--background)">
      {/* Top strip */}
      <div className="mx-auto max-w-7xl px-4 md:px-12 pt-14">
        <div
          className="
            rounded-3xl
            bg-white/55
            backdrop-blur
            px-6 py-7 md:px-10 md:py-8
            shadow-[0_16px_50px_rgba(0,0,0,0.10)]
            flex flex-col gap-6 md:flex-row md:items-center md:justify-between
          "
        >
          <div>
            <p className="text-xs tracking-[0.35em] text-(--primary)">
              READY WHEN YOU ARE
            </p>
            <h3 className="mt-2 text-xl md:text-2xl tracking-wide text-(--text-main)">
              Book your next appointment with confidence.
            </h3>
          </div>

          <div className="flex items-center gap-4">
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

            <div className="flex items-center gap-4 pl-2">
              <a
                href="https://www.facebook.com/profile.php?id=100079967333261"
                target="_blank"
                rel="noopener"
                className="opacity-80 hover:opacity-100 transition"
                aria-label="Facebook"
              >
                <Image src="/facebook.png" alt="" width={30} height={30} />
              </a>
              <a
                href="https://www.instagram.com/bamboo_nails_spa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener"
                className="opacity-80 hover:opacity-100 transition"
                aria-label="Instagram"
              >
                <Image src="/instagram.png" alt="" width={30} height={30} />
              </a>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="mt-12 grid gap-10 md:grid-cols-2 md:items-start pb-12">
          {/* Brand + contact */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Image src="/logo.png" width={90} height={90} alt="logo" />
              <div>
                <p className="text-sm tracking-widest text-(--primary)">
                  BAMBOO NAILS & SPA
                </p>
                <p className="mt-1 text-sm text-(--text-main)/65">
                  Fresh, natural finishes — beautifully refined.
                </p>
              </div>
            </div>

            <div className="text-sm text-(--text-main)/70 leading-relaxed">
              <p>611 Anlaby Road, Hull - HU3 6SU</p>
              <p className="mt-2">
                <span className="text-(--text-main)/55">Tel:</span>{" "}
                <a
                  href="tel:07926607979"
                  className="hover:text-(--primary) transition"
                >
                  07926 607979
                </a>
              </p>
              <p>
                <span className="text-(--text-main)/55">Email:</span>{" "}
                <a
                  href="mailto:bambooltd611@gmail.com"
                  className="hover:text-(--primary) transition"
                >
                  bambooltd611@gmail.com
                </a>
              </p>
            </div>

            {/* small policy row */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs tracking-widest text-(--text-main)/55">
              <Link
                href="/policy"
                className="hover:text-(--primary) transition"
              >
                POLICIES
              </Link>
              <Link
                href="/services"
                className="hover:text-(--primary) transition"
              >
                SERVICES
              </Link>
              <Link
                href="/contact"
                className="hover:text-(--primary) transition"
              >
                CONTACT
              </Link>
            </div>
          </div>

          {/* Hours */}
          <div className="md:justify-self-end">
            <p className="text-xs tracking-[0.35em] text-(--primary)">
              OPENING HOURS
            </p>

            <div className="mt-4 space-y-2 text-sm text-(--text-main)/70">
              <div className="flex items-center justify-between gap-10">
                <span>Mon – Sat</span>
                <span className="text-(--text-main)">9am – 6pm</span>
              </div>

              <div className="flex items-center justify-between gap-10">
                <span>Sunday</span>
                <span className="italic text-(--text-main)/70">Closed</span>
              </div>
            </div>

            <p className="mt-5 text-xs text-(--text-main)/50 leading-relaxed max-w-sm">
              Please arrive a few minutes early so we can give you the full
              experience.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-(--primary)/15">
        <div className="mx-auto max-w-7xl px-4 md:px-12 py-6 text-xs text-(--text-main)/55 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Bamboo Nails & Spa</span>

          <span>
            Design & development by{" "}
            <a
              href="https://www.angelicagiang.com/"
              target="_blank"
              rel="noopener"
              className="text-(--primary) hover:opacity-80 transition"
            >
              Angelica
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
