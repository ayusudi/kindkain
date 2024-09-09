"use client"
import { Accordion } from "flowbite-react";
import { useEffect } from "react";

const accordion = {
  "root": {
    "base": "font-quicksand text-[20px]",
    "flush": {
      "off": "rounded-lg ",
      "on": ""
    }
  },
  "content": {
    "base": "border-b-[1px] px-1 pt-0 pb-5 font-nunito font-normal text-base md:text-[20px]"
  },
  "title": {
    "arrow": {
      "base": "h-6 w-6 shrink-0",
      "open": {
        "off": "",
        "on": "rotate-180"
      }
    },
    "base": "flex w-full items-center justify-between py-5 px-1 text-left font-medium text-gray-500 text-base md:text-[22px]",
    "flush": {
      "off": "hover:bg-gray-100 focus:ring-none border-0 border-b-[1px]",
      "on": "bg-transparent dark:bg-transparent "
    },
    "heading": "font-[600]",
    "open": {
      "off": "",
      "on": "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white border-0"
    }
  }
}


export default function Component({ product }) {
  useEffect(() => {
    let { alternative_slug } = product
    localStorage.setItem('alternative_slug', alternative_slug)
  }, [product])
  return (
    <Accordion theme={accordion.root} >
      <Accordion.Panel theme={accordion}>
        <Accordion.Title theme={accordion.title}>Materials & Dimensions</Accordion.Title>
        <Accordion.Content theme={accordion.content}>
          <p className="whitespace-pre-wrap mb-2 text-gray-500 dark:text-gray-400">
            {product.material_size}
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel theme={accordion}>
        <Accordion.Title theme={accordion.title}>How To Use</Accordion.Title>
        <Accordion.Content theme={accordion.content}>
          <p className="whitespace-pre-wrap mb-2 text-gray-500 dark:text-gray-400">
            {product.how_to_use}
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel theme={accordion}>
        <Accordion.Title theme={accordion.title}>How To Wash</Accordion.Title>
        <Accordion.Content theme={accordion.content}>
          <p className="whitespace-pre-wrap mb-2 text-gray-500 dark:text-gray-400">
            {product.how_to_wash}
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
