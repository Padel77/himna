import type { Metadata } from "next";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react"
import { NextIntlClientProvider } from "next-intl";
import { Tajawal } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { getMessages } from "next-intl/server";
import "./globals.css";

const inter = Tajawal({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: "200",
});
export const metadata: Metadata & {
  title: { template: string; default: string };
  verification: { google: string };
} = {
  title: {
    template: "%s | هيمنة للخدمات التسويقية | أفضل حلول التسويق الرقمي في السعودية",
    default: "هيمنة للخدمات التسويقية | التسويق الرقمي المتقدم | تحسين محركات البحث SEO | خدمات تسويق عبر الإنترنت في السعودية",
  },
  description:
    "شركة هيمنة للخدمات التسويقية تقدم حلول تسويقية مبتكرة لتحسين العلامات التجارية عبر الإنترنت. نقدم خدمات SEO، إدارة الحملات الإعلانية، تسويق عبر السوشيال ميديا، وتحليل أداء الحملات بأعلى مستوى من الاحترافية في السعودية.",
  verification: {
    google: "JdxvM9oL4eIaWAlcqGmMhTvFcYO5_5jfOiUBTqZ",
  },
};
export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html dir={locale === "ar" ? "rtl" : "ltr"} lang={locale}>
      <Head>
        <title>{metadata.title.default ?? "Default Title"}</title>
        <meta name="description" content={metadata.description ?? ""} />
        <meta
          name="google-site-verification"
          content={metadata.verification?.google ?? ""}
        />
        {/* Removed invalid date meta tag */}
      </Head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
          <Analytics />
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
