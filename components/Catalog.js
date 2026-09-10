"use client";

import { useMemo, useState } from "react";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { PHONES } from "@/data/phones";

const BRAND_FILTERS = ["all", "Apple", "Xiaomi", "Honor", "Nokia", "itel", "Blackview", "Prestigio"];

function PhoneCard({ p, delay }) {
  return (
    <Reveal delay={delay} className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all hover:-translate-y-1 hover:shadow-[0_20px_36px_-22px_rgba(18,32,58,0.3)]">
      <div className="relative flex h-[168px] items-center justify-center bg-gradient-to-br from-sky-light to-[#f5faff]">
        {p.tag && (
          <span
            className={`absolute left-2.5 top-2.5 rounded-md px-2.5 py-1 text-[10.5px] font-bold tracking-wide text-white ${
              p.old ? "bg-[#e8623d]" : "bg-blue-deep"
            }`}
          >
            {p.tag}
          </span>
        )}
        <div className="h-24 w-13 rounded-xl border-[3px] border-white bg-gradient-to-br from-white to-[#cfe0f5] shadow-[0_10px_20px_-10px_rgba(15,63,117,0.4)]" />
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-4.5">
        <span className="text-[11px] font-extrabold uppercase tracking-wide text-blue">{p.brand}</span>
        <h3 className="font-jost text-[17px] font-medium">{p.name}</h3>
        <p className="text-[12.5px] leading-relaxed text-muted">{p.specs}</p>
        <div className="mt-auto flex items-baseline justify-between border-t border-dashed border-line pt-2.5">
          <div>
            {p.old && <span className="mr-1.5 text-[11.5px] font-semibold text-[#a3aabb] line-through">{p.old}</span>}
            <span className="text-[16.5px] font-extrabold">{p.price} сум</span>
          </div>
          <button className="rounded-lg bg-sky-light px-3 py-2 text-xs font-bold text-blue-deep hover:bg-[#d8e9fa]">
            Заказать
          </button>
        </div>
      </div>
    </Reveal>
  );
}

export default function Catalog() {
  const [active, setActive] = useState("all");

  const list = useMemo(
    () => (active === "all" ? PHONES : PHONES.filter((p) => p.brand === active)),
    [active]
  );

  return (
    <section id="catalog" className="pt-24">
      <div className="mx-auto max-w-6xl px-7">
        <SectionHead eyebrow="Подборщик" title="Подберите смартфон по сегменту" />

        <div className="mb-9 flex flex-wrap justify-center gap-2.5">
          {BRAND_FILTERS.map((brand) => (
            <button
              key={brand}
              onClick={() => setActive(brand)}
              className={`rounded-full border-[1.5px] px-5 py-2.5 text-[13px] font-bold transition-colors ${
                active === brand
                  ? "border-blue-deep bg-blue-deep text-white"
                  : "border-line bg-white text-ink hover:border-blue"
              }`}
            >
              {brand === "all" ? "Все бренды" : brand}
            </button>
          ))}
        </div>

        {/* key={active} restarts the Reveal animation for each card whenever
            the filter changes, so the grid re-plays its cascade-in effect. */}
        <div key={active} className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((p, i) => (
            <PhoneCard key={`${p.brand}-${p.name}`} p={p} delay={i * 50} />
          ))}
        </div>
      </div>
    </section>
  );
}
