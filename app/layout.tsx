import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Makoto M",
  description:
    "Senior MIS student at the Shidler School of Business at the University of Hawaii Manoa, going into business analytics with an interest in AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
