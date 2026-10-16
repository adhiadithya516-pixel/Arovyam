import type { Metadata, Viewport } from "next";
import { site } from "@/lib/site";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#081410",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.descriptor} — ${site.doctorName}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Doctor-guided, online-first supportive care combining clinical nutrition, yoga therapy, and naturopathy-based lifestyle guidance specializing in Naturopathy and Yogic Sciences.",
  applicationName: site.name,
  keywords: [
    "Arovyam",
    "Dr Darshan V R",
    "Naturopathy and Yogic Sciences",
    "Naturopathy",
    "Integrative Health",
    "Clinical Nutrition",
    "Yoga Therapy",
    "Diabetes Support",
    "Gut Wellness",
    "Online Consultation",
  ],
  authors: [{ name: site.doctorName }],
  creator: site.name,
  publisher: site.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | ${site.descriptor}`,
    description:
      "Look beyond symptoms. Understand the person. Doctor-guided supportive care through clinical nutrition, yoga therapy, and naturopathic guidance.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.descriptor}`,
    description:
      "Look beyond symptoms. Understand the person. Doctor-guided supportive care through clinical nutrition, yoga therapy, and naturopathic guidance.",
  },
  alternates: {
    canonical: site.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
