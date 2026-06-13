import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFAB } from "@/components/layout/WhatsAppFAB";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { site } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const oswald = Oswald({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: `${site.name}, ${site.location} — ${site.tagline}`,
    template: `%s | ${site.name}, ${site.location}`,
  },
  description: `${site.name} ${site.location} — ${site.tagline}. Modern equipment, certified head coach, ladies-only batch, and the most affordable membership in Nagpur & Umred.`,
  keywords: [
    "gym in Umred",
    "gym in Nagpur",
    "best gym Umred",
    "affordable gym Nagpur",
    "ladies gym Umred",
    "Universal Gym",
    "fitness center Umred",
  ],
  openGraph: {
    title: `${site.name}, ${site.location}`,
    description: site.tagline,
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="font-sans" suppressHydrationWarning>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <SmoothScroll />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppFAB />
        <MobileCtaBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HealthClub",
              name: `${site.name}, ${site.location}`,
              address: { "@type": "PostalAddress", streetAddress: site.address },
              telephone: site.phone,
              email: site.email,
              priceRange: "₹₹",
              openingHours: "Mo-Sa 05:00-22:00",
            }),
          }}
        />
      </body>
    </html>
  );
}
