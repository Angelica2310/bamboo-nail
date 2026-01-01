import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 md:px-12">
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* LEFT */}
        <div className="flex flex-col">
          <h1 className="mt-3 text-3xl md:text-5xl leading-tight tracking-wide uppercase">
            Experts in beauty and premium finishes
          </h1>

          <div className="mt-6 flex items-center gap-6">
            <Link
              href="/book"
              className="
    inline-flex items-center justify-center
    rounded-md
    border border-(--primary)
    bg-(--primary)
    px-6 py-3
    text-xs md:text-sm
    tracking-widest
    text-white
    hover:bg-transparent hover:text-(--primary)
    transition
  "
            >
              BOOK YOUR APPOINTMENT
            </Link>

            <Link
              href="/services"
              className="
    text-xs md:text-sm
    tracking-widest
    text-(--primary)
    font-medium
    relative
    after:absolute after:left-0 after:-bottom-1
    after:h-[1px] after:w-0 after:bg-(--primary)
    after:transition-all after:duration-300
    hover:after:w-full
  "
            >
              CHECK OUR SERVICES
            </Link>
          </div>

          {/* Thumbnails */}
          <div className="mt-10 flex items-center gap-4">
            {["/hero01.jpg", "/hero02.jpg", "/hero03.jpg"].map((src) => (
              <div
                key={src}
                className="relative h-20 w-20 md:h-50 md:w-50 overflow-hidden rounded-t-full shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
              >
                <Image
                  src={src}
                  alt="Nail design"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center md:justify-end">
          <div
            className="relative
    h-[320px] w-[320px]
    md:h-[360px] md:w-[360px]
    lg:h-[500px] lg:w-[500px]"
          >
            {/* GOLD FRAME */}
            <div className="absolute inset-0 heroFrameFrame" />
            {/* Image circle */}
            <div className="absolute inset-[10px] overflow-hidden heroFrame">
              {/* <Image
                src="/hero04.jpg"
                alt="hero image"
                fill
                className="object-cover"
                priority
              /> */}
              <video
                src="/hero-video.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
