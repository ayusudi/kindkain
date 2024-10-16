"use client"
import { useTranslations } from 'next-intl';

export default function Component({ capslock, headline, description }) {
  const t = useTranslations("HomePage")
  return (
    <div className="bg-nude" style={{ lineHeight: "120%" }}>
      <div className="py-12 max-w-screen-2xl m-auto flex flex-col items-center md:gap-6 gap-4 md:py-24 ">
        <p className="text-darkpurple font-quicksand font-bold md:text-xl text-sm text-center">{capslock}</p>
        <p className="capitalize text-darktext font-quicksand font-bold md:text-[40px] text-xl w-[88%] md:w-[60%] text-center" style={{ lineHeight: '120%', whiteSpace: 'pre-wrap' }}>{t('aboutus-top')}</p>
        <p className="text-gray font-nunito md:text-xl text-sm text-center w-[88%] md:w-[65%]" style={{ letterSpacing: 0.8, lineHeight: "150%", whiteSpace: 'pre-wrap' }}>{t('aboutus-mid') + '\n\n' + t('aboutus-bottom')}</p>
      </div>

    </div>
  );
}
