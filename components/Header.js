"use client";

import { useState } from "react";
import { useLenis } from "lenis/react";

const NAV = [
  { href: "#catalog", label: "Каталог" },
  { href: "#brands", label: "Бренды" },
  { href: "#about", label: "О компании" },
  { href: "#contacts", label: "Контакты" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lenis = useLenis();

  // useLenis fires on every scroll tick Lenis processes — this is how the
  // header picks up a solid/blurred background once you've scrolled past
  // the hero, same idea as the reference site's `header-light` class swap.
  useLenis((l) => {
    setScrolled(l.scroll > 40);
  });

  function goTo(href) {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (!el) return;
    if (lenis) {
      lenis.scrollTo(el, { offset: -20 });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,backdrop-filter] duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-[0_1px_0_rgba(18,32,58,0.06)]" : ""
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-7">
        <div className="flex items-center gap-2.5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-blue/25 bg-[radial-gradient(circle_at_35%_30%,#fff,var(--color-sky-light)_55%,var(--color-sky-mid)_100%)] font-jost text-sm font-semibold text-blue-deep">
            A5
          </div>
          <div className="flex flex-col leading-tight">
            <strong className="font-jost text-[16.5px] font-medium text-ink">ASBIS Team 5</strong>
            <span className="text-[10.5px] uppercase tracking-wide text-muted">Дистрибьютор смартфонов</span>
          </div>
        </div>

        <nav className="hidden gap-7 md:flex">
          {NAV.map((item) => (
            <button
              key={item.href}
              onClick={() => goTo(item.href)}
              className="text-[13px] font-semibold uppercase tracking-wide text-ink/75 transition-opacity hover:opacity-100"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3.5">
          <div className="hidden gap-1 rounded-full bg-ink/5 p-1 sm:flex">
            {["Ru", "Uz", "En"].map((lng, i) => (
              <button
                key={lng}
                className={`rounded-full px-2.5 py-1.5 text-[11.5px] font-bold ${
                  i === 0 ? "bg-white text-ink shadow-sm" : "text-muted"
                }`}
              >
                {lng}
              </button>
            ))}
          </div>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="rounded-full bg-dark px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white md:hidden"
          >
            {menuOpen ? "Закрыть" : "Меню"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mx-5 mb-4 flex flex-col gap-1 rounded-2xl border border-line bg-white p-3 shadow-lg md:hidden">
          {NAV.map((item) => (
            <button
              key={item.href}
              onClick={() => goTo(item.href)}
              className="rounded-xl px-4 py-3 text-left text-sm font-semibold text-ink hover:bg-sky-light"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
