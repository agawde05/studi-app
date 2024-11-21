// app/components/Header.tsx
import { Link, useLocation } from "@remix-run/react";
import { useState, useEffect } from "react";

interface NavLink {
  href: string;
  label: string;
}

const NAV_LINKS: NavLink[] = [
  { href: "", label: "Home" },
  { href: "about", label: "About" },
  { href: "profile", label: "Profile" },
];

export default function Header() {
  const location = useLocation();
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeader = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // If we’re scrolling down, hide the header
        setShowHeader(false);
      } else {
        // If we’re scrolling up, show the header
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeader);
      return () => {
        window.removeEventListener("scroll", controlHeader);
      };
    }
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-black text-white py-6 transition-transform duration-500 ${
        showHeader ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <div className="flex justify-center">
        <nav className="flex space-x-8">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = location.pathname === `/${href}`;
            return (
              <Link
                key={href}
                to={`/${href}`}
                className={`text-sm font-normal transition ${
                  isActive ? "text-gray-400" : "text-white hover:text-gray-400"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
