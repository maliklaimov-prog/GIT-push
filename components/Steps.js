import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const STEPS = [
  { n: "01", title: "Выбор модели", text: "Изучите каталог, сравните характеристики и подберите нужные объёмы под свою точку продаж." },
  { n: "02", title: "Заявка менеджеру", text: "Персональный менеджер ASBIS Team 5 подтвердит наличие и рассчитает оптовые условия." },
  { n: "03", title: "Доставка по Узбекистану", text: "Отгрузка со склада в Ташкенте — собственная логистика ASBIS, полная гарантия бренда." },
];

export default function Steps() {
  return (
    <section className="pt-24">
      <div className="mx-auto max-w-6xl px-7">
        <SectionHead eyebrow="Как это работает" title="Заказ в три шага" />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 100} className="rounded-2xl border border-line bg-white p-7">
              <div className="mb-3.5 font-jost text-[44px] font-light leading-none text-sky-mid">{s.n}</div>
              <h4 className="mb-2 font-jost text-[17px] font-medium">{s.title}</h4>
              <p className="text-[13.5px] leading-relaxed text-muted">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
