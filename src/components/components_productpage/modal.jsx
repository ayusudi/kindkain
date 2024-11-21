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
    inner:
      "relative flex max-h-[90dvh] w-[300px] md:w-[600px] flex-col rounded-lg bg-white",
  },
  body: {
    base: "flex-1 overflow-auto px-6 md:px-8 rounded-2xl",
    popup: "pt-0",
  },
  header: {
    base: "flex items-start justify-between rounded-t",
    popup: "border-b-0 p-4",
    close: {
      base: "focus:outline-none focus:ring-none ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 ",
      icon: "h-4 md:h-8 w-4 md:w-8 mx-2 mt-2 md:mt-4 md:mx-4",
    },
  },
};

export default function Component({ openModal, setOpenModal, product }) {
  return (
    <div>
      <Flowbite theme={{ theme: { modal: object } }}>
        <Modal
          theme={object}
          size={"xl"}
          show={openModal}
          position="center"
          onClose={() => setOpenModal(false)}
        >
          <Modal.Header theme={object.header} />
          <Modal.Body theme={object.body}>
            <p className="font-quicksand font-bold text-lg md:text-3xl text-darkpurple text-center mb-4 md:mb-8">
              Shop This Products At
            </p>
            <div className="space-y-3 md:space-y-4 pb-10 md:pb-12 md:px-6">
              {/* Shopee */}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={product.shopee}
                className="cursor-pointer flex gap-3 md:gap-4 border border-1 border-gray rounded-lg p-3 items-center justify-center hover:bg-darkpurple hover:text-white"
              >
                <Image
                  src="/ecommerce/shopee.jpg"
                  width="44"
                  height="44"
                  alt="kindkain-shopee"
                  className="rounded"
                />
                <div className="flex-grow">
                  <p className="font-quicksand text-xs ">Shop At</p>
                  <p className="font-quicksand font-bold text-sm  md:text-base">
                    Shopee
                  </p>
                </div>
              </a>
              {/* Tokopedia */}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={product.tokopedia}
                className="cursor-pointer flex gap-3 md:gap-4 border border-1 border-gray rounded-lg p-3 items-center justify-center hover:bg-darkpurple hover:text-white"
              >
                <Image
                  src="/ecommerce/tokopedia.jpg"
                  width="44"
                  height="44"
                  alt="kindkain-tokopedia"
                  className="rounded"
                />
                <div className="flex-grow">
                  <p className="font-quicksand text-xs ">Shop At</p>
                  <p className="font-quicksand font-bold text-sm  md:text-base">
                    Tokopedia
                  </p>
                </div>
              </a>
              {/* TikTok */}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={product.tiktok}
                className="cursor-pointer flex gap-3 md:gap-4 border border-1 border-gray rounded-lg p-3 items-center justify-center hover:bg-darkpurple hover:text-white"
              >
                <Image
                  src="/ecommerce/tiktok.jpg"
                  width="44"
                  height="44"
                  alt="kindkain-tiktok"
                  className="rounded"
                />
                <div className="flex-grow">
                  <p className="font-quicksand text-xs ">Shop At</p>
                  <p className="font-quicksand font-bold text-sm  md:text-base">
                    TikTok
                  </p>
                </div>
              </a>
              {/* Lazada */}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={product.lazada}
                className="cursor-pointer flex gap-3 md:gap-4 border border-1 border-gray rounded-lg p-3 items-center justify-center hover:bg-darkpurple hover:text-white"
              >
                <Image
                  src="/ecommerce/lazada.png"
                  width="44"
                  height="44"
                  alt="kindain-lazada"
                  className="rounded"
                />
                <div className="flex-grow">
                  <p className="font-quicksand text-xs ">Shop At</p>
                  <p className="font-quicksand font-bold text-sm  md:text-base">
                    Lazada
                  </p>
                </div>
              </a>
            </div>
          </Modal.Body>
        </Modal>
      </Flowbite>
    </div>
  );
}
