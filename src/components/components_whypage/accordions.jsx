'use client'
import { Accordion, Flowbite } from "flowbite-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const accordion = {
  "root": {
    "base": "font-quicksand text-[20px]",
    "flush": {
      "off": "",
      "on": ""
    }
  },
  "content": {
    "base": "px-1 pt-0 pb-5 border-b-[1px] font-nunito font-normal "
  },
  "title": {
    "arrow": {
      "base": "h-6 w-6 shrink-0 whitespace-pre-wrap",
      "open": {
        "off": "",
        "on": "rotate-180"
      }
    },
    "base": "flex w-full items-center justify-between py-5 px-1 text-left font-medium text-gray-500",
    "flush": {
      "off": "hover:bg-gray-100  border-b-[1px]",
      "on": "bg-transparent "
    },
    "heading": "font-[600]",
    "open": {
      "off": "",
      "on": "bg-gray-100 text-gray-900 border-transparent"
    }
  }
}

export default function Component() {
  const t = useTranslations("FAQPage")
  return (
    <Accordion theme={accordion.root} >
      <Accordion.Panel theme={accordion}>
        <Accordion.Title theme={accordion.title}>{t('q1')}</Accordion.Title>
        <Accordion.Content theme={accordion.content}>
          <p className="whitespace-pre-wrap mb-2 text-gray">
            {t('a1')}
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel theme={accordion}>
        <Accordion.Title theme={accordion.title}>{t('q2')}</Accordion.Title>
        <Accordion.Content theme={accordion.content}>
          <p className="whitespace-pre-wrap mb-2 text-gray">
            {t('a2')}
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel theme={accordion}>
        <Accordion.Title theme={accordion.title}>{t('q3')}</Accordion.Title>
        <Accordion.Content theme={accordion.content}>
          <p className="whitespace-pre-wrap mb-2 text-gray">
            {t('a3')}
          </p>
          <br />
          <a className="text-semibold text-darkpurple underline capitalize" href="https://youtu.be/6ExPI-6d7H8?si=XHXvJhyyAhLTF34G" target="_blank" rel="noopener noreferrer">( Video Youtube )</a>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel theme={accordion}>
        <Accordion.Title theme={accordion.title}>{t('table.q')}</Accordion.Title>
        <Accordion.Content theme={accordion.content}>
          <div className="w-[300px] h-[300px] md:w-[700px] md:h-[700px] m-auto relative">
            <Image alt="size" fill src="/size.png" className="rounded-xl" />
          </div>
          <table className="mt-6 w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-nude">
                <th className="border border-gray-300 px-2 md:px-4 py-2 w-1/6 text-center">{t('table.theads.variant')}</th>
                <th className="border border-gray-300 px-2 md:px-4 py-2 w-1/6 text-center">{t('table.theads.length')}</th>
                <th className="border border-gray-300 px-2 md:px-4 py-2 w-4/6 text-center">{t('table.theads.description')}</th>
              </tr>
            </thead>
            <tbody className="text-gray text-base md:text-lg">
              <tr className="">
                <td className="border border-gray-300 px-2 md:px-4 py-3 text-center">Maxi</td>
                <td className="border border-gray-300 px-2 md:px-4 py-3 text-center">42 cm</td>
                <td className="border border-gray-300 px-4 py-3">{t('table.maxi')}</td>
              </tr>
              <tr className="">
                <td className="border border-gray-300 px-2 md:px-4 py-3 text-center">Night</td>
                <td className="border border-gray-300 px-2 md:px-4 py-3 text-center">35 cm</td>
                <td className="border border-gray-300 px-2 md:px-4 py-3">{t('table.night')}</td>
              </tr>
              <tr className="">
                <td className="border border-gray-300 px-2 md:px-4 py-3 text-center">Day</td>
                <td className="border border-gray-300 px-2 md:px-4 py-3 text-center">28 cm</td>
                <td className="border border-gray-300 px-2 md:px-4 py-3">{t('table.day')}</td>
              </tr>
              <tr className="">
                <td className="border border-gray-300 px-2 md:px-4 py-3 text-center">Mini</td>
                <td className="border border-gray-300 px-2 md:px-4 py-3 text-center">23 cm</td>
                <td className="border border-gray-300 px-2 md:px-4 py-3">{t('table.mini')}</td>
              </tr>
              <tr className="">
                <td className="border border-gray-300 px-2 md:px-4 py-3 text-center">Pantyliner</td>
                <td className="border border-gray-300 px-2 md:px-4 py-3 text-center">18 cm</td>
                <td className="border border-gray-300 px-2 md:px-4 py-3">{t('table.pantyliner')}</td>
              </tr>
            </tbody>
          </table>
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel theme={accordion}>
        <Accordion.Title theme={accordion.title}>{t('q4')}</Accordion.Title>
        <Accordion.Content theme={accordion.content}>
          <p className="whitespace-pre-wrap mb-2 text-gray">
            {t('a4')}
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel theme={accordion}>
        <Accordion.Title theme={accordion.title}>{t('q5')}</Accordion.Title>
        <Accordion.Content theme={accordion.content}>
          <p className="whitespace-pre-wrap mb-2 text-gray">
            {t('a5')}
          </p>
          <br />
          <a className="text-semibold text-darkpurple underline capitalize" href="https://youtu.be/6ExPI-6d7H8?si=XHXvJhyyAhLTF34G" target="_blank" rel="noopener noreferrer">( Video Youtube )</a>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel theme={accordion}>
        <Accordion.Title theme={accordion.title}>{t('q6')}</Accordion.Title>
        <Accordion.Content theme={accordion.content}>
          <p className="whitespace-pre-wrap mb-2 text-gray">
            {t('a6')}
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel theme={accordion}>
        <Accordion.Title theme={accordion.title}>{t('q7')}</Accordion.Title>
        <Accordion.Content theme={accordion.content}>
          <p className="whitespace-pre-wrap mb-2 text-gray">
            {t('a7')}
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel theme={accordion}>
        <Accordion.Title theme={accordion.title}>{t('q8')}</Accordion.Title>
        <Accordion.Content theme={accordion.content}>
          <p className="whitespace-pre-wrap mb-2 text-gray">
            {t('a8')}
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel theme={accordion}>
        <Accordion.Title theme={accordion.title}>{t('q9')}</Accordion.Title>
        <Accordion.Content theme={accordion.content}>
          <p className="whitespace-pre-wrap mb-2 text-gray">
            {t('a9')}
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel theme={accordion}>
        <Accordion.Title theme={accordion.title}>{t('q10')}</Accordion.Title>
        <Accordion.Content theme={accordion.content}>
          <p className="whitespace-pre-wrap mb-2 text-gray">
            {t('a10')}
          </p>
          <div className="w-[300px] h-[300px] md:w-[700px] md:h-[700px] mx-auto my-4 relative">
            <Image alt="photored" fill src="/photored.png" className="rounded-xl" />
          </div>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel theme={accordion}>
        <Accordion.Title theme={accordion.title}>{t('q11')}</Accordion.Title>
        <Accordion.Content theme={accordion.content}>
          <p className="whitespace-pre-wrap mb-2 text-gray">
            {t('a11')}
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel theme={accordion}>
        <Accordion.Title theme={accordion.title}>{t('q12')}</Accordion.Title>
        <Accordion.Content theme={accordion.content}>
          <p className="whitespace-pre-wrap mb-2 text-gray">
            {t('a12')}
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel theme={accordion}>
        <Accordion.Title theme={accordion.title}>{t('q13')}</Accordion.Title>
        <Accordion.Content theme={accordion.content}>
          <p className="whitespace-pre-wrap mb-2 text-gray">
            {t('a13')}
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel theme={accordion}>
        <Accordion.Title theme={accordion.title}>{t('q14')}</Accordion.Title>
        <Accordion.Content theme={accordion.content}>
          <p className="whitespace-pre-wrap mb-2 text-gray">
            {t('a14')}
          </p>
        </Accordion.Content>
      </Accordion.Panel>

    </Accordion>

  );
}