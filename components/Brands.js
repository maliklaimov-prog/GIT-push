import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { BRANDS } from "@/data/phones";

export default function Brands() {
  return (
    <section id="brands" className="pt-24">
      <div className="mx-auto max-w-6xl px-7">
        <SectionHead
          eyebrow="Наши бренды"
          title="Семь марок под одной крышей"
          text="От флагманов до бюджетных моделей — каждый бренд закрывает свой сегмент рынка, от премиума до доступных устройств."
        />
        <div className="grid grid-cols-2 gap-4.5 md:grid-cols-4">
          {BRANDS.map((b, i) => (
            <Reveal
              key={b.name}
              delay={i * 60}
              className={`rounded-2xl border border-line bg-white p-6 text-center transition-transform hover:-translate-y-1 hover:shadow-[0_20px_34px_-20px_rgba(18,32,58,0.25)] ${
                b.soon ? "opacity-55" : ""
              }`}
            >
              <div className="mb-1.5 font-jost text-[19px] font-medium">{b.name}</div>
              <div className="text-[11.5px] font-bold uppercase tracking-wide text-blue">{b.count}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
