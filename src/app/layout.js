import "./globals.css";
import { Nunito, Quicksand } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer'
import AnimatedButton from "@/components/animatedbutton";

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-quicksand',
})

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-nunito',
})
export default async function RootLayout({ children }) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${quicksand.variable} ${nunito.variable} font-sans`} cz-shortcut-listen="false">
        <Navbar locale={locale.toUpperCase()} />
        <AnimatedButton />
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>

        <Footer />
      </body>
    </html>
  );
}