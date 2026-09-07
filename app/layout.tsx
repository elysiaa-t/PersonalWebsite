import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
