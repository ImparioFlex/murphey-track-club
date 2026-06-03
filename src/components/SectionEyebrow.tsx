export default function SectionEyebrow({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <p
      className={`text-sm md:text-base font-semibold tracking-[0.15em] md:tracking-[0.25em] uppercase font-body mb-5 md:mb-6 ${
        dark ? "text-orange-light" : "text-orange"
      }`}
    >
      {children}
    </p>
  );
}
