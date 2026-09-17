import Image from "next/image";

const links = [
  { href: "#product", label: "Shop" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms" },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-steel/20 bg-void px-6 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 sm:flex-row sm:items-center sm:justify-between">
        <Image
          src="/images/logo.png"
          alt="LUCID"
          width={88}
          height={48}
          className="h-6 w-auto object-contain opacity-80"
        />

        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-silver/60">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="transition-colors duration-300 hover:text-lavender"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-xs text-silver/55">
          © {new Date().getFullYear()} LUCID. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
