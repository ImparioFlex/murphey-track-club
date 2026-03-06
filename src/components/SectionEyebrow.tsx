export default function SectionEyebrow({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <p
      className={`text-xs font-semibold tracking-[0.15em] md:tracking-[0.25em] uppercase font-body mb-4 ${
        dark ? "text-electric" : "text-forest-green"
      }`}
    >
      {children}
    </p>
  );
}
