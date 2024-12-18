"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

let object = {
  root: {
    base: "relative h-full w-full",
    leftControl:
      "absolute left-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",
    rightControl:
      "absolute right-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",
  },
  indicators: {
    active: {
      off: "bg-white/50 hover:bg-white ",
      on: "bg-white ",
    },
    base: "h-3 w-3 rounded-full",
    wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
  },
  item: {
    base: "absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2 ",
    wrapper: {
      off: "w-full flex-shrink-0 transform cursor-default snap-center",
      on: "w-full flex-shrink-0 transform cursor-grab snap-center",
    },
  },
  control: {
    base: "inline-flex md:h-14 md:w-14 items-center justify-center rounded-full bg-white/50 group-hover:bg-white/50  sm:h-10 sm:w-10",
    icon: "!h-5 !w-5 text-darktext/30 sm:h-2 sm:w-2",
  },
  scrollContainer: {
    base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth ",
    snap: "snap-x",
  },
};

export default function Component() {
  const router = useRouter();
  let urls = [
    { id: 1, url: "/banners/banner-1.jpg" },
    { id: 2, url: "/banners/banner-2.jpg" },
    { id: 3, url: "/banners/banner-3.jpg" },
    { id: 4, url: "/banners/banner-4.jpg" },
    { id: 5, url: "/banners/banner-5.jpg" },
  ];
  return (
    <div className="h-[calc(100vw/2)] rounded-0">
      <Carousel theme={object} slideInterval={5000}>
        {urls.map(({ id, url }) => (
          <div
            onClick={() => router.push("/products")}
            key={id}
            className="w-full"
            style={{ aspectRatio: "1440/720" }}
          >
            <Image
              sizes="(max-width: 100vw) 100vw"
              fill
              src={url}
              alt={
                "KindKain Pembalut Kain & Menstrual Cup Untuk Kesehatan Wanita " +
                id
              }
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
