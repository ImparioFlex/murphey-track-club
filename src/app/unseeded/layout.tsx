import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unseeded | A Grassroots Elite Podcast",
  description:
    "Stories from athletes who made it to the national stage without a shoe deal, without a training group, and sometimes without a ride home. Hosted by Hayden Cox.",
};

export default function UnseededLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
