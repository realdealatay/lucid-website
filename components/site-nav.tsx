import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "#product", label: "Shop" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-8 sm:py-8"
      >
        <Link href="#top" className="flex items-center" aria-label="LUCID home">
          <Image
            src="/images/logo.png"
            alt="LUCID"
            width={132}
            height={72}
            priority
            className="h-8 w-auto object-contain sm:h-9"
          />
        </Link>
        <ul className="flex items-center gap-6 text-sm text-silver/80 sm:gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors duration-300 hover:text-lavender"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
