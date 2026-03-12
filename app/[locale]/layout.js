import { hasLocale, NextIntlClientProvider } from "next-intl";
import "./globals.css";
import { notFound } from "next/navigation";
import Header from "../components/Header";
import { routing } from "@/i18n/routing";

export default async function RootLayout({ children, params }) {
    const { locale } = await params;

  // Use notFound() instead of redirect for 404 pages
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Set direction based on locale
  const direction = locale === 'ar' ? 'rtl' : 'ltr';
  return (
    <html lang={locale} dir={direction}>
      <body className={direction === 'rtl' ? 'rtl' : 'ltr'}>
             <NextIntlClientProvider locale={locale}>
        <Header />
        {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
