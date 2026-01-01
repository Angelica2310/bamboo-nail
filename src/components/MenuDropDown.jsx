import * as DropDownMenu from "@radix-ui/react-dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function MenuPage() {
  return (
    <div className="z-50">
      <DropDownMenu.Root>
        {/* Trigger */}
        <DropDownMenu.Trigger asChild>
          <button
            aria-label="Open navigation menu"
            className="
              rounded-md
              p-2
              text-(--textMain)
              hover:bg-(--primary)/10
              transition
            "
          >
            <Menu width={26} height={26} />
          </button>
        </DropDownMenu.Trigger>

        {/* Menu */}
        <DropDownMenu.Portal>
          <DropDownMenu.Content
            sideOffset={16}
            align="end"
            className="
              w-[260px]
              rounded-2xl
              bg-white/80
              backdrop-blur-md
              shadow-[0_20px_50px_rgba(0,0,0,0.18)]
              border border-(--primary)/15
              p-4
            z-[60]
            "
          >
            {/* NAV ITEMS */}
            <div className="flex flex-col gap-1">
              {[
                { href: "/", label: "HOME" },
                { href: "/services", label: "SERVICES" },
                { href: "/about", label: "ABOUT US" },
                { href: "/contact", label: "CONTACT" },
                { href: "/policy", label: "POLICIES" },
              ].map((item) => (
                <DropDownMenu.Item key={item.href} asChild>
                  <Link
                    href={item.href}
                    className="
                      rounded-lg
                      px-3 py-2.5
                      text-xs
                      tracking-widest
                      text-(--textMain)
                      transition
                      hover:bg-(--primary)/10
                      hover:text-(--primary)
                      focus:outline-none
                    "
                  >
                    {item.label}
                  </Link>
                </DropDownMenu.Item>
              ))}
            </div>

            {/* Divider */}
            <div className="my-3 h-px bg-(--primary)/15" />

            {/* CTA */}
            <DropDownMenu.Item asChild>
              <Link
                href="/services"
                className="
                  block
                  w-full
                  rounded-lg
                  border border-(--primary)
                  px-4 py-2.5
                  text-center
                  text-[11px]
                  tracking-widest
                  text-(--primary)
                  hover:bg-(--primary)
                  hover:text-white
                  transition
                "
              >
                VIEW SERVICES
              </Link>
            </DropDownMenu.Item>
          </DropDownMenu.Content>
        </DropDownMenu.Portal>
      </DropDownMenu.Root>
    </div>
  );
}
