import Reveal from "./Reveal";

const PHONES = [
  { cls: "left-[6%] top-[20%] h-40 w-20 md:h-52 md:w-26", rot: -14, anim: "animate-[float-a_7s_ease-in-out_infinite]" },
  { cls: "left-[17%] top-[58%] h-36 w-18 md:h-44 md:w-22", rot: 9, anim: "animate-[float-b_8s_ease-in-out_infinite]" },
  { cls: "right-[18%] top-[14%] h-48 w-24 md:h-64 md:w-32", rot: 11, anim: "animate-[float-a_9s_ease-in-out_infinite]" },
  { cls: "right-[8%] top-[52%] h-32 w-16 md:h-40 md:w-20", rot: -8, anim: "animate-[float-b_6.5s_ease-in-out_infinite]" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-gradient-to-b from-sky-deep via-sky-mid to-sky-light">
      {/* decorative floating phone silhouettes — pure CSS, no images needed */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        {PHONES.map((p, i) => (
          <div
            key={i}
            className={`absolute rounded-[24px] border-[5px] border-white bg-gradient-to-br from-white to-[#dbe8f7] shadow-[0_30px_50px_-20px_rgba(15,63,117,0.45)] ${p.cls} ${p.anim}`}
            style={{ "--rot": `${p.rot}deg` }}
          >
            <div className="absolute inset-2.5 rounded-2xl bg-gradient-to-br from-sky-light to-sky-mid" />
            <div className="absolute left-1/2 top-4 h-1 w-6 -translate-x-1/2 rounded bg-blue-deep/25" />
          </div>
        ))}
        <div className="absolute -left-10 bottom-[6%] h-14 w-56 rounded-full bg-white/55 blur-[1px]" />
        <div className="absolute -right-5 bottom-[14%] h-11 w-40 rounded-full bg-white/55 blur-[1px]" />
      </div>

      <div className="relative z-[2] mx-auto w-full max-w-6xl px-7 pb-16 pt-32 text-center">
        <Reveal as="span" className="mb-5 inline-block rounded-full bg-white/35 px-4 py-1.5 text-[12.5px] font-bold uppercase tracking-wide text-blue-deep">
          🇺🇿 Официальный дистрибьютор в Узбекистане
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mx-auto max-w-3xl text-[34px] leading-[1.08] text-blue-deep sm:text-5xl md:text-[74px]">
            Соберите свежий
            <br />
            <span className="text-white">каталог смартфонов</span>
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mt-5 mb-8 max-w-lg text-[15.5px] leading-relaxed text-[#153a63]/85">
            Семь мировых брендов, официальная гарантия и склад в Ташкенте — всё,
            что нужно партнёрам ASBIS Team 5 для быстрых поставок.
          </p>
        </Reveal>
        <Reveal delay={240} className="flex flex-wrap justify-center gap-3.5">
          <a
            href="#catalog"
            className="rounded-full bg-dark px-7 py-3.5 text-[13.5px] font-bold uppercase tracking-wide text-white shadow-[0_14px_28px_-12px_rgba(15,31,61,0.55)] transition-transform hover:-translate-y-0.5"
          >
            Смотреть каталог
          </a>
          <a
            href="#brands"
            className="rounded-full border-[1.5px] border-blue/35 bg-white/50 px-7 py-3.5 text-[13.5px] font-bold uppercase tracking-wide text-blue-deep transition-transform hover:-translate-y-0.5"
          >
            Наши бренды
          </a>
        </Reveal>
      </div>
    </section>
  );
}
