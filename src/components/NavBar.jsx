"use client";

import React, { useEffect, useState } from "react";
// import ActiveLink from "./ActiveLink";
import Image from "next/image";
import Link from "next/link";
import MenuDropDown from "./MenuDropDown";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        sticky top-0 z-50
        transition-all duration-300
        ${
          scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
        }
      `}
    >
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-4 md:px-12 py-6">
        {/* LEFT: logo (mobile) + logo + links (desktop) */}
        <div className="flex items-center gap-6">
          {/* Logo (always on the left) */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="logo"
              width={180}
              height={180}
              className="w-20 md:w-25 h-auto"
              priority
            />
          </Link>

          {/* Desktop links only */}
          <div className="hidden md:flex gap-6 text-xs tracking-widest text-gray-700">
            <Link href="/" variant="homeNav">
              HOME
            </Link>
            <Link href="/about" variant="homeNav">
              ABOUT US
            </Link>
            <Link href="/contact" variant="homeNav">
              CONTACT
            </Link>
            <Link href="/services" variant="homeNav">
              SERVICES
            </Link>
            <Link href="/policy" variant="homeNav">
              POLICIES
            </Link>
          </div>
        </div>

        {/* RIGHT: dropdown (mobile) / book button (desktop) */}
        <div className="flex items-center">
          {/* Mobile dropdown only */}
          <div className="md:hidden">
            <MenuDropDown />
          </div>

          {/* Desktop book button only */}
          <Link href="/book" className="hidden md:inline-flex">
            <button
              className="
                rounded-md
                border border-(--primary)
                bg-(--primary)
                px-4 py-2
                text-[10px] md:text-[11px]
                tracking-widest
                text-white
                hover:bg-transparent hover:text-(--primary)
                transition
                cursor-pointer
              "
            >
              BOOK NOW
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
