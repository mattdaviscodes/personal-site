"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";

const ROUTES = {
  "/": "Hello",
  "/about": "About",
  "/blog": "Blog",
};

const Navbar = () => {

  const pathname = usePathname();

  return (
    <Container>
      <nav className="border-b-2 pb-4 pt-6 sm:border-none">
        <ul className="flex justify-between text-2xl sm:justify-end sm:space-x-8">
          {Object.entries(ROUTES).map(([href, text]) => (
            <li key={href}>
              <Link
                href={href}
                className={`${pathname === href ? "text-amber-500" : ""}`}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
};

export default Navbar;
