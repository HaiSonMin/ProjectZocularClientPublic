"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ShoppingCart, Search, Menu, X, LogOut } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useState } from "react";
import { Button } from "../ui/buttons/button";

interface NavLink {
  href: string;
  label: string;
  isPublic: boolean;
}

const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home", isPublic: true },
  { href: "/product", label: "Product", isPublic: false },
  { href: "/skincare", label: "Skincare", isPublic: false },
  { href: "/zocular-360", label: "Zocular 360", isPublic: false },
  { href: "/professional", label: "Professional", isPublic: true },
  {
    href: "/professional-locator",
    label: "Professional Locator",
    isPublic: true,
  },
];

const THEME = {
  primaryColor: "bg-orange-500",
  scrollThreshold: 200,
};

export const Header = () => {
  const pathname = usePathname();
  const user = null;
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    setHidden(latest > previous && latest > THEME.scrollThreshold);
  });

  const navLinkClass = (href: string) =>
    `transition ${
      pathname === href ? "text-white font-bold" : "hover:text-gray-200"
    }`;

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 ${THEME.primaryColor} transition-all duration-300`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: hidden ? -100 : 0, opacity: 1, scale: hidden ? 0.95 : 1 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <div
        className={`container mx-auto flex items-center justify-between px-6 py-4 transition-all ${
          hidden ? "py-2 shadow-md backdrop-blur-md bg-opacity-90" : "py-4"
        }`}
      >
        <Link href="/" className="mr-2 text-3xl font-bold tracking-wide">
          Zocular
        </Link>

        <nav className="justify-center flex-1 hidden font-medium md:space-x-2 lg:space-x-8 md:flex">
          {NAV_LINKS.map(({ href, label, isPublic }) => (
            <button key={href} className={navLinkClass(href)}>
              {label}
            </button>
          ))}
        </nav>

        {!user ? (
          <div className="flex items-center gap-2">
            <button className="relative mr-3">
              <ShoppingCart
                size={24}
                aria-label="Cart"
                className="transition hover:text-gray-200 "
              />
              <span className="absolute top-[-6px] right-[-6px] bg-red-500 text-white text-xs rounded-full size-5 flex items-center justify-center">
                4
              </span>
            </button>

            <Button
              variant="outline"
              className="bg-white text-black hover:bg-gray-100 border-white min-w-[106px] hover:text-orange-500"
            >
              LOG IN
            </Button>
            <Button
              variant="outline"
              className="!bg-transparent text-white border-none min-w-[106px] hover:text-black"
            >
              SIGN UP
            </Button>
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            <Link href="/search">
              <Search
                size={24}
                aria-label="Search"
                className="transition hover:text-gray-200"
              />
            </Link>

            <button>
              <ShoppingCart
                size={24}
                aria-label="Cart"
                className="transition hover:text-gray-200"
              />
            </button>

            <button>
              <LogOut
                size={24}
                aria-label="Logout"
                className="transition hover:text-gray-200"
              />
            </button>
            <button className="md:hidden" aria-label="Toggle menu">
              {menuOpen ? (
                <X size={24} className="transition hover:text-gray-200" />
              ) : (
                <Menu size={24} className="transition hover:text-gray-200" />
              )}
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden absolute top-full left-0 w-full ${THEME.primaryColor} py-4 px-6 flex flex-col space-y-4 z-40`}
          >
            {NAV_LINKS.map(({ href, label }) => (
              <Link key={href} href={href} className={navLinkClass(href)}>
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
