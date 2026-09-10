import Reveal from "./Reveal";

export default function SectionHead({ eyebrow, title, text }) {
  return (
    <Reveal className="mx-auto mb-12 max-w-xl text-center">
      <span className="mb-3 block text-[12.5px] font-bold uppercase tracking-[0.08em] text-blue">{eyebrow}</span>
      <h2 className="mb-3.5 text-[26px] text-ink sm:text-4xl">{title}</h2>
      {text && <p className="text-[15px] leading-relaxed text-muted">{text}</p>}
    </Reveal>
  );
}
