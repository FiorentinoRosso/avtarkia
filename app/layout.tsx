import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const image = `${protocol}://${host}/og.png`;

  return {
    title: "Avtarkia — индивидуальная аналитика для бизнеса",
    description: "Tailor-made аналитика, управленческие отчёты и автоматизация под логику вашего бизнеса.",
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: {
      type: "website",
      locale: "ru_RU",
      siteName: "Avtarkia",
      title: "Avtarkia — индивидуальная аналитика для бизнеса",
      description: "Один управленческий контур под ваши данные, правила расчёта и решения.",
      images: [{ url: image, width: 1200, height: 630, alt: "Avtarkia — индивидуальная аналитика для бизнеса" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Avtarkia — индивидуальная аналитика для бизнеса",
      description: "Один управленческий контур под ваши данные, правила расчёта и решения.",
      images: [image],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
