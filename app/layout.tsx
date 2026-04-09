import type { Metadata } from "next";
import localFont from "next/font/local";
import GoogleAnalytics from "@/app/GoogleAnalytics";
import Script from "next/script";

import "./globals.css";
import StoreProvider from "@/redux/storeProvider";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { siteConfig, siteStructuredData } from "@/lib/seo";
gsap.registerPlugin(CustomEase);

const helvetica = localFont({
  src: "../font/helvetica/HelveticaNowDisplay-Medium.woff2",
  style: "normal",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.fullName,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.fullName,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.fullName,
      },
    ],
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.fullName,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={helvetica.className}>
        <StoreProvider>
          {children}
          <GoogleAnalytics />
          <Script src="https://cdn.jsdelivr.net/gh/vipulkumar-dev/gsap@2024/ScrambleTextPlugin.min.js" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: siteStructuredData }}
          />
        </StoreProvider>
      </body>
    </html>
  );
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0e0d0c",
};
