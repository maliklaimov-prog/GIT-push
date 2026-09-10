import Reveal from "./Reveal";

export default function BuyBlock() {
  return (
    <section id="about" className="pt-24">
      <div className="mx-auto max-w-6xl px-7">
        <Reveal
          as="div"
          className="rounded-[32px] bg-gradient-to-br from-blue-deep to-blue px-7 py-14 text-center text-white sm:rounded-[22px] sm:px-11"
        >
          <span className="mb-3 block text-[12.5px] font-bold uppercase tracking-wide text-[#cfe0f7]">Где купить</span>
          <h2 className="mb-3.5 text-2xl text-white sm:text-4xl">Оформите заявку у команды Team 5</h2>
          <p className="mx-auto mb-7 max-w-lg text-[14.5px] leading-relaxed text-[#dbe7fa]">
            Сайт — витрина каталога: здесь удобно сравнить бренды и модели. Оптовые
            цены, наличие и доставка по Узбекистану — через менеджера ASBIS Team 5.
          </p>
          <a
            href="#contacts"
            className="inline-block rounded-full bg-white px-7 py-3.5 text-[13.5px] font-bold uppercase tracking-wide text-blue-deep"
          >
            Написать менеджеру
          </a>
        </Reveal>
      </div>
    </section>
  );
}
