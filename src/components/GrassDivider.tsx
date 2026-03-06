import Image from "next/image";

export default function GrassDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`relative z-10 flex justify-center ${className}`}>
      {/*
        The grass logo has ~60% whitespace above the blades.
        We clip that whitespace and position so the flat bottom
        of the grass sits exactly on the section boundary.
        The container is overflow-visible so the grass "sprouts"
        into the next section.
      */}
      <div className="relative w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 overflow-hidden translate-y-[30%]">
        <Image
          src="/logos/grassroots-square.png"
          alt=""
          width={200}
          height={200}
          className="absolute bottom-0 left-0 w-full h-auto"
        />
      </div>
    </div>
  );
}
