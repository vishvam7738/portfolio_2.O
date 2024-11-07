import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.scss";
import { silka } from "@/fonts";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Vishvam Agarwal - Portfolio",
  description: "A portfolio of Vishvam Agarwal, a Front-end Software Engineer based in Jaipur, Rajasthan.",
  authors: [
    { name: "Vishvam Agarwal", url: "" },
  ],
  openGraph: {
    title: "Vishvam Agarwal - Portfolio",
    description: "A portfolio of Vishvam Agarwal, a Front-end Software Engineer based in Jaipur, Rajasthan.",
    url: "",
    siteName: "Vishvam Agarwal - Portfolio",
    type: "website",
    images: [
      {
        url: "",
        width: 3410,
        height: 2072,
        alt: "Vishvam Agarwal - Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${silka.className}`}>
        <ThemeProvider attribute="class">
          <div style={{
            flex: "none",
            height: "100%",
            left: "calc(50.00000000000002% - 100% / 2)",
            pointerEvents: "none",
            position: "fixed",
            top: "0",
            width: "100%",
            zIndex: "4",
          }}>
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundSize: "64px",
                backgroundRepeat: "repeat",
                backgroundImage: "url(/Static.png)",
                opacity: "0.06",
                borderRadius: "0px",
              }}
            />
          </div>
          {children}
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
