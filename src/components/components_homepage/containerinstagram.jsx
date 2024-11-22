"use client";

import { Carousel } from "flowbite-react";
import { useTranslations } from "next-intl";
import React, { useEffect } from "react";
import { InstagramEmbed } from "react-social-media-embed";

export default function Component() {
  const t = useTranslations("HomePage");
  return (
    <div className="bg-nude">
      <div className="max-w-screen-2xl m-auto hidden p-6 md:px-14 md:py-16  md:flex flex-col gap-4">
        <div className="m-auto">
          <p
            style={{ lineHeight: "120%" }}
            className="md:text-4xl text-center text-2xl font-quicksand font-bold text-darktext mb-1.5"
          >
            {t("socialmedia")}
          </p>
          <p
            className="m-auto text-gray font-nunito md:text-xl text-sm text-center py-3"
            style={{
              letterSpacing: 0.8,
              lineHeight: "150%",
              whiteSpace: "pre-wrap",
            }}
          >
            {t("socialmedia-subtitle")}
          </p>
        </div>
        <div className="hidden md:flex justify-between items-between mt-2">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <InstagramEmbed
              url="https://www.instagram.com/p/C06OgjWy1xy/"
              width={418}
              height={726}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <InstagramEmbed
              url="https://www.instagram.com/p/C0F2G6Myn9B/"
              width={418}
              height={726}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <InstagramEmbed
              url="https://www.instagram.com/p/CzvPz_4SuFP/"
              width={418}
              height={726}
            />
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl m-auto flex px-6 py-10 md:hidden flex-col gap-3">
        <div className="m-auto">
          <p
            style={{ lineHeight: "120%" }}
            className="md:text-4xl text-center text-2xl font-quicksand font-bold text-darktext mb-4"
          >
            Keep Updated With Us
          </p>
          <p
            style={{ lineHeight: "125%" }}
            className="w-9/12 m-auto text-center text-gray md:font-2xl font-lg font-nunito mb-4"
          >
            Here our latest Instagram updates,
            <br />
            make sure you are stay informed and in the loop
          </p>
        </div>
        <div className="w-full h-[620px] ">
          <Carousel className=" m-auto" indicators={false}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <InstagramEmbed url="https://www.instagram.com/p/C06OgjWy1xy/" />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <InstagramEmbed url="https://www.instagram.com/p/C0F2G6Myn9B/" />
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <InstagramEmbed url="https://www.instagram.com/p/CzvPz_4SuFP/" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
