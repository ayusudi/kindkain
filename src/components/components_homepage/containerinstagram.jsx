"use client"

import { useTranslations } from "next-intl"

export default function Component() {
  const t = useTranslations("HomePage")
  return (
    <div className="bg-nude">
      <div className="max-w-screen-2xl m-auto hidden p-6 md:px-14 md:py-16  md:flex flex-col gap-4">
        <div className="m-auto">
          <p style={{ lineHeight: "120%" }} className='md:text-4xl text-center text-2xl font-quicksand font-bold text-darktext mb-1.5'>{t('socialmedia')}</p>
          <p className="m-auto text-gray font-nunito md:text-xl text-sm text-center py-3" style={{ letterSpacing: 0.8, lineHeight: "150%", whiteSpace: 'pre-wrap' }}>{t('socialmedia-subtitle')}</p>
        </div>
        <div className="flex justify-between items-between mt-2">
          <iframe className="rounded" width="418" height="640" src="https://www.instagram.com/p/C7n6JGgSODo/embed/"></iframe>
          <iframe className="rounded" width="418" height="640" src="https://www.instagram.com/p/C0F2G6Myn9B/embed/"></iframe>
          <iframe className="rounded" width="418" height="640" src="https://www.instagram.com/p/C7n6JGgSODo/embed/"></iframe>
        </div>
      </div>
      <div className="max-w-screen-2xl m-auto flex px-6 py-10 md:hidden flex-col gap-3">
        <div className="m-auto">
          <p style={{ lineHeight: "120%" }} className='md:text-4xl text-center text-2xl font-quicksand font-bold text-darktext mb-4'>Keep Updated With Us</p>
          <p style={{ lineHeight: "125%" }} className='w-9/12 m-auto text-center text-gray md:font-2xl font-lg font-nunito mb-4'>Here our latest Instagram updates,<br />make sure you are stay informed and in the loop</p>
        </div>
        <iframe className="rounded m-auto w-full min-h-[560px]" width="310" height="460" src="https://www.instagram.com/p/C7n6JGgSODo/embed/"></iframe>
      </div>
    </div>

  )
}