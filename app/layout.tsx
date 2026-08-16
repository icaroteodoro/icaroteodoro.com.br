import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleTagManager } from "@next/third-parties/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const siteUrl = "https://icaroteodoro.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Ícaro Teodoro — Engenheiro de Software Java",
    template: "%s | Ícaro Teodoro",
  },

  description:
    "Portfólio de Ícaro Teodoro, Engenheiro de Software Java especializado em Spring Boot, APIs REST, autenticação JWT/RBAC, microsserviços, Docker, CI/CD e desenvolvimento mobile com React Native.",

  keywords: [
    "Engenheiro de Software Java",
    "Desenvolvedor Java",
    "Spring Boot",
    "APIs REST",
    "JWT",
    "RBAC",
    "Microsserviços",
    "React Native",
    "Next.js",
    "Docker",
    "CI/CD",
    "Desenvolvedor Backend",
    "Portfólio",
    "Maceió",
    "Alagoas",
    "Brasil",
    "Ícaro Teodoro",
  ],

  authors: [{ name: "Ícaro Teodoro", url: siteUrl }],
  creator: "Ícaro Teodoro",
  publisher: "Ícaro Teodoro",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Ícaro Teodoro",
    title: "Ícaro Teodoro — Engenheiro de Software Java",
    description:
      "Portfólio de Ícaro Teodoro, Engenheiro de Software Java especializado em Spring Boot, APIs REST, autenticação JWT/RBAC, microsserviços, Docker, CI/CD e React Native.",
    images: [
      {
        url: "/sobre.jpeg",
        width: 1200,
        height: 630,
        alt: "Ícaro Teodoro — Engenheiro de Software Java",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ícaro Teodoro — Engenheiro de Software Java",
    description:
      "Portfólio de Ícaro Teodoro, Engenheiro de Software Java especializado em Spring Boot, APIs REST, microsserviços e React Native.",
    images: ["/sobre.jpeg"],
    creator: "@icaroteodoro",
  },

  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} h-full antialiased font-sans scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <GoogleTagManager gtmId="GTM-N8MD4KCH" />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
