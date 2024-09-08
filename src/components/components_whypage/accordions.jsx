'use client'
import { Accordion, Flowbite } from "flowbite-react";

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
      "base": "h-6 w-6 shrink-0",
      "open": {
        "off": "",
        "on": "rotate-180"
      }
    },
    "base": "flex w-full items-center justify-between py-5 px-1 text-left font-medium text-gray-500",
    "flush": {
      "off": "hover:bg-gray-100 dark:hover:bg-gray-800 border-b-[1px]",
      "on": "bg-transparent dark:bg-transparent"
    },
    "heading": "font-[600]",
    "open": {
      "off": "",
      "on": "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white border-transparent"
    }
  }
}
export default function Component() {
  return (
    <Flowbite theme={{ theme: { accordion } }}>
      <Accordion >
        <Accordion.Panel>
          <Accordion.Title>Materials & Dimensions</Accordion.Title>
          <Accordion.Content>
            <p className="whitespace-pre-wrap mb-2 text-gray-500 dark:text-gray-400">
              aaaa
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>How To Use</Accordion.Title>
          <Accordion.Content>
            <p className="whitespace-pre-wrap mb-2 text-gray-500 dark:text-gray-400">
              aaa
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>How To Wash</Accordion.Title>
          <Accordion.Content>
            <p className="whitespace-pre-wrap mb-2 text-gray-500 dark:text-gray-400">
              aaa
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </Flowbite>

  );
}