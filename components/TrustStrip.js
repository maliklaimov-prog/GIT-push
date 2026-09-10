import Reveal from "./Reveal";

const STATS = [
  { value: "7", label: "брендов" },
  { value: "26", label: "моделей" },
  { value: "1", label: "склад в Ташкенте" },
];

export default function TrustStrip() {
  return (
    <div className="bg-sky-light">
      <Reveal
        as="div"
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-7 px-7 py-8"
      >
        <div className="flex flex-wrap gap-9">
          {STATS.map((s) => (
            <div key={s.label} className="min-w-[90px] text-center">
              <b className="block font-jost text-3xl font-medium text-blue-deep">{s.value}</b>
              <span className="text-xs uppercase tracking-wide text-muted">{s.label}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2.5">
          {["Официальная гарантия", "Сертифицированные устройства"].map((t) => (
            <span key={t} className="rounded-full border border-line bg-white px-4 py-2 text-[12.5px] font-semibold text-ink">
              {t}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
