import type { Metadata } from "next";
import { DM_Mono, Gaegu, IBM_Plex_Mono, Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

const gaegu = Gaegu({
  variable: "--font-gaegu",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elysia Trocio — Data Analyst & Applied Math Student",
  description:
    "Applied Mathematics (Data Science) student at UC Irvine. Python, SQL, Tableau, and Power BI projects that turn data into decisions — sponsorship ROI modeling, income prediction analysis, and more.",
  keywords: [
    "Elysia Trocio",
    "data analyst",
    "data science",
    "applied mathematics",
    "UC Irvine",
    "Python",
    "SQL",
    "Tableau",
    "Power BI",
  ],
  openGraph: {
    title: "Elysia Trocio — Data Analyst & Applied Math Student",
    description:
      "Applied Mathematics (Data Science) student at UC Irvine turning data into decisions with Python, SQL, Tableau, and Power BI.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${dmMono.variable} ${gaegu.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
