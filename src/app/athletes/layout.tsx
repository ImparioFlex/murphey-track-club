import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grassroots Elite | The Team",
};

export default function AthletesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
