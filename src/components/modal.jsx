"use client";
import { Modal, Flowbite } from "flowbite-react";
import Image from "next/image";

const object = {
  root: {
    base: "fixed inset-x-0 top-0 z-50 h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full",
    show: {
      on: "flex bg-gray bg-opacity-20",
      off: "hidden",
    },
    sizes: {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      "2xl": "max-w-2xl",
      "3xl": "max-w-3xl",
      "4xl": "max-w-4xl",
      "5xl": "max-w-5xl",
      "6xl": "max-w-6xl",
      "7xl": "max-w-7xl",
    },
    positions: {
      "top-left": "items-start justify-start",
      "top-center": "items-start justify-center",
      "top-right": "items-start justify-end",
      "center-left": "items-center justify-start",
      center: "items-center justify-center",
      "center-right": "items-center justify-end",
      "bottom-right": "items-end justify-end",
      "bottom-center": "items-end justify-center",
      "bottom-left": "items-end justify-start",
    },
  },
  content: {
    base: "relative h-full w-full p-5 md:h-auto flex items-center justify-center",
    inner: "relative flex max-h-[90dvh] flex-col rounded-lg bg-cream",
  },
  body: {
    base: "flex-1 overflow-auto px-6 rounded-2xl",
    popup: "pt-0",
  },
  header: {
    base: "flex items-start justify-between rounded-t",
    popup: "border-b-0 p-4",
    close: {
      base: "focus:outline-none focus:ring-none ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 ",
      icon: "h-4 w-4 mx-2 mt-2",
    },
  },
};

export default function Component({ openModal, setOpenModal }) {
  let data = [
    {
      name: "Shopee",
      img: "/ecommerce/shopee.jpg",
      link: "https://shopee.co.id/kindkain",
    },
    {
      name: "Tokopedia",
      img: "/ecommerce/tokopedia.jpg",
      link: "https://www.tokopedia.com/kindkain",
    },
    {
      name: "Tiktok Shop",
      img: "/ecommerce/tiktok.jpg",
      link: "https://www.tiktok.com/@kindkain.id",
    },
    {
      name: "Lazada",
      img: "/ecommerce/lazada.png",
      link: "https://www.lazada.co.id/shop/kindkain",
    },
  ];

  return (
    <div>
      <Flowbite theme={{ theme: { modal: object } }}>
        <Modal
          show={openModal}
          position="center"
          onClose={() => setOpenModal(false)}
        >
          <Modal.Header />
          <Modal.Body>
            <p className="font-quicksand font-bold text-xl text-darkpurple text-center mb-4">
              Shop Our Products At
            </p>
            <div className="space-y-3 pb-10">
              {data.map((el) => {
                return (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={el.link}
                    className="cursor-pointer flex gap-3 w-64 border border-1 border-gray rounded-lg p-3 items-center hover:bg-darkpurple hover:text-white"
                    key={el.name}
                  >
                    <Image
                      src={el.img}
                      width="41"
                      height="41"
                      alt={el.name + " KindKain Pembalut Kain"}
                      className="rounded"
                    />
                    <div className="flex-grow">
                      <p className="font-quicksand text-xs">Shop At</p>
                      <p className="font-quicksand font-bold text-sm">
                        {el.name}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </Modal.Body>
        </Modal>
      </Flowbite>
    </div>
  );
}
