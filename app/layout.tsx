import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Providers from "@/app/providers";

export const metadata: Metadata = {
  title: "Build on Polkadot",
  description: "A collection of all resources for builders on Polkadot",
  metadataBase: new URL("https://www.polkadotbuilders.com"),
  openGraph: {
    title: "Build on Polkadot",
    description: "A collection of all resources for builders on Polkadot",
    url: "https://www.polkadotbuilders.com",
    siteName: "Build on Polkadot",
    images: [
      {
        url: "/og-banner.png",
        width: 1200,
        height: 630,
        alt: "Build on Polkadot - Builders Hub",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Build on Polkadot",
    description: "A collection of all resources for builders on Polkadot",
    creator: "@polkadotbuilders",
    images: ["/og-banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
