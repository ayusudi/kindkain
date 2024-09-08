import "./globals.css";
import { Nunito, Quicksand } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer'

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
        <div className="cursor-pointer hidden md:flex fixed top-[77.5%] right-[2%] z-[1000] w-[150px] h-[60px] px-4 py-3 bg-[#301C51] shadow-md rounded-[30px] flex justify-center items-center gap-2.5">
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
            <path d="M14.9203 17.9998C14.136 17.9998 13.0343 17.7162 11.3846 16.7945C9.37844 15.6695 7.82672 14.6308 5.83143 12.6408C3.90766 10.7182 2.97149 9.47345 1.66125 7.08922C0.181051 4.39722 0.433375 2.98614 0.715432 2.38305C1.05133 1.66224 1.54714 1.23112 2.18799 0.803208C2.552 0.56472 2.9372 0.360281 3.33872 0.192487C3.3789 0.17521 3.41627 0.158736 3.44962 0.14387C3.6485 0.0542707 3.94985 -0.0811327 4.33155 0.0635119C4.58628 0.159138 4.8137 0.35481 5.16968 0.706377C5.89974 1.42639 6.89738 3.02993 7.26542 3.81744C7.51252 4.34821 7.67605 4.69857 7.67645 5.09152C7.67645 5.55157 7.44502 5.90635 7.16417 6.28926C7.11154 6.36118 7.0593 6.42988 7.00868 6.49658C6.70292 6.89837 6.63582 7.01449 6.68001 7.22181C6.76961 7.63847 7.43779 8.8788 8.53588 9.97448C9.63398 11.0702 10.8385 11.6962 11.2568 11.7853C11.473 11.8316 11.5915 11.7616 12.0061 11.445C12.0656 11.3996 12.1267 11.3526 12.1906 11.3056C12.6189 10.987 12.9572 10.7616 13.4064 10.7616H13.4088C13.7997 10.7616 14.1344 10.9311 14.6889 11.2108C15.4121 11.5756 17.0639 12.5604 17.7883 13.2913C18.1407 13.6464 18.3372 13.8731 18.4332 14.1274C18.5778 14.5103 18.4416 14.8104 18.3528 15.0113C18.338 15.0447 18.3215 15.0812 18.3042 15.1218C18.1351 15.5226 17.9294 15.907 17.6899 16.2701C17.2628 16.909 16.83 17.4036 16.1076 17.7399C15.7367 17.9154 15.3307 18.0042 14.9203 17.9998Z" fill="#FBE146" />
          </svg>
          <div className="text-white text-[15px] font-bold capitalize break-words font-quicksand">Contact Us</div>
        </div>

        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>

        <Footer />
      </body>
    </html>
  );
}