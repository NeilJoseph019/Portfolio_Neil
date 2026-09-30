import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/providers/themeProvider"
import { ArticlesProvider } from "./providers/articlesProvider";
import { getSortedArticles } from "./_utils/getArticle";
import ThemeToggle from "./_LayoutComponents/themeToggle";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neil Portfolio",
  description: "This is a painting of who Neil is.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

   const sortedData = getSortedArticles(3)

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
             <ArticlesProvider initialSortedData={sortedData}>
              {children}
             </ArticlesProvider>
             <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
