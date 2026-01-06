import Image from "next/image";

const images = [
  "/gallery01.jpg",
  "/gallery02.jpg",
  "/gallery03.jpg",
  "/gallery04.jpg",
  "/gallery05.jpg",
  "/gallery06.jpg",
  "/gallery07.jpg",
  "/gallery08.jpg",
  "/gallery09.jpg",
  "/gallery10.jpg",
  "/gallery11.jpg",
  "/gallery12.jpg",
];

export default function GalleryPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 md:px-12 py-14 md:py-20">
      {/* Header */}
      <header className="max-w-3xl">
        <p className="text-xs tracking-[0.35em] text-(--primary)">GALLERY</p>
        <h1 className="mt-4 text-3xl md:text-5xl tracking-wide text-(--textMain)">
          Our work & our space
        </h1>
        <p className="mt-6 text-sm md:text-base leading-relaxed text-(--textMain)/65">
          A glimpse into our finishes, details, and the calm atmosphere inside
          Bamboo Nails & Spa.
        </p>
      </header>

      {/* Gallery Grid */}
      <section className="mt-14">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {images.map((src, idx) => (
            <div
              key={src}
              className="
                group relative overflow-hidden
                rounded-[28px]
                bg-white/40
                ring-1 ring-white/30
                shadow-[0_14px_32px_rgba(0,0,0,0.12)]
              "
            >
              {/* Image */}
              <Image
                src={src}
                alt={`Gallery image ${idx + 1}`}
                width={520}
                height={780}
                className="
                  h-[380px] w-full object-cover
                  transition duration-700 ease-out
                  group-hover:scale-105
                "
              />

              {/* Soft overlay */}
              <div
                className="
                  pointer-events-none absolute inset-0
                  bg-gradient-to-t
                  from-black/35 via-black/0 to-transparent
                  opacity-0 group-hover:opacity-100
                  transition duration-500
                "
              />

              {/* Inner glass ring */}
              <div
                className="
                  pointer-events-none absolute inset-0
                  rounded-[28px]
                  shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)]
                "
              />
            </div>
          ))}
        </div>
      </section>

      {/* Service button */}
      <div className="mt-16 flex justify-center">
        <a
          href="/services"
          className="
      inline-flex items-center justify-center
      rounded-lg
      border border-(--primary)/40
      bg-white/60
      px-10 py-4
      text-xs tracking-widest
      text-(--primary)
      backdrop-blur
      transition
      hover:bg-white/80
      hover:border-(--primary)
    "
        >
          VIEW SERVICES
        </a>
      </div>
    </main>
  );
}
