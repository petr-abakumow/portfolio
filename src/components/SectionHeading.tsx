export default function SectionHeading({
  num,
  title,
  desc,
}: {
  num: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <span className="font-heading text-[13px] tracking-[2px] text-accent-coral">/ {num}</span>
      <h2 className="h-section">{title}</h2>
      <div className="w-[60px] h-[3px] bg-accent-coral" />
      {desc && (
        <p className="font-body text-base text-text-muted max-w-2xl mt-2 leading-[1.6]">{desc}</p>
      )}
    </div>
  );
}
