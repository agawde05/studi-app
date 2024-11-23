import { Link, useLocation } from "@remix-run/react";
import { useState, useEffect } from "react";

const NAV_LINKS = [
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
        setShowHeader(false);
      } else {
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
      className={`fixed top-0 left-0 w-full bg-white border-b border-black z-50 transition-transform duration-500 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between px-12 py-4 ">
        {/* Left Section */}
        <div className="text-black font-extrabold text-4xl">Studi</div>

        {/* Right Section */}
        <div className="flex items-center font-display">
          <div className="flex items-center mr-2">
            <div className="flex items-center mr-2">
              <div
                className="flex items-center justify-center bg-[#4121ee] rounded-full border border-black shadow-[2px_2px_2.6px_rgba(0,0,0,1)] text-white font-display text-[1.5rem] aspect-square"
                style={{ width: "2.5rem" }}
              >
                M
              </div>
              <span className="text-black font-bold text-[1.5rem] pl-2 pt-1">
                Hi, Mia
              </span>
            </div>
          </div>
          {/* <span className="text-black font-bold text-2xl">Hi, Mia</span> */}
        </div>
      </div>
    </header>
  );
}
