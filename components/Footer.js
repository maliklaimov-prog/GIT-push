export default function Footer() {
  return (
    <footer id="contacts" className="mt-24 bg-dark pb-6.5 pt-14 text-[#c9d2ea]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-7 px-7 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h5 className="mb-3.5 font-jost text-[15px] font-medium text-white">ASBIS Team 5</h5>
          <p className="text-[13px] leading-[2] text-[#a9b4d0]">
            Официальный дистрибьютор потребительской электроники и мобильных устройств в Узбекистане.
          </p>
        </div>
        <div>
          <h5 className="mb-3.5 font-jost text-[15px] font-medium text-white">Контакты</h5>
          <ul className="space-y-0 text-[13px] leading-[2] text-[#a9b4d0]">
            <li>+998 71 200 00 00</li>
            <li>a.alimov@asbis.uz</li>
            <li>г. Ташкент</li>
          </ul>
        </div>
        <div>
          <h5 className="mb-3.5 font-jost text-[15px] font-medium text-white">Бренды</h5>
          <ul className="space-y-0 text-[13px] leading-[2] text-[#a9b4d0]">
            <li>Apple · Xiaomi · Honor</li>
            <li>Nokia · itel</li>
            <li>Blackview · Prestigio</li>
          </ul>
        </div>
        <div>
          <h5 className="mb-3.5 font-jost text-[15px] font-medium text-white">Часы работы</h5>
          <ul className="space-y-0 text-[13px] leading-[2] text-[#a9b4d0]">
            <li>Пн–Пт: 09:00–18:00</li>
            <li>Сб: 10:00–15:00</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-6xl flex-wrap justify-between gap-2.5 border-t border-white/10 px-7 pt-5 text-xs text-[#7b87a8]">
        <span>© 2026 ASBIS Team 5</span>
        <span>Демонстрационный макет каталога</span>
      </div>
    </footer>
  );
}
