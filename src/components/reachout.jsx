"use client";

import { useTranslations } from "next-intl";

export default function Component() {
  const t = useTranslations("Revisi");
  return (
    <div
      className="p-6 pt-0 md:p-16 h-[350px] md:h-[525px] flex justify-center items-center flex-col gap-5 md:gap-8"
      style={{
        backgroundImage: "url(/coverpresent.png)",
        backgroundSize: "cover",
      }}
    >
      <p
        style={{ lineHeight: "120%" }}
        className="w-[98%] text-darktext text-center text-2xl md:text-4xl font-semibold font-quicksand"
      >
        {t("reachout_text1")}
        <br />
        {t("reachout_text2")}
      </p>
      <a
        href="https://wa.me/628111329911"
        className="font-quicksand bg-darkpurple text-yellow text-md md:text-lg rounded-full px-4 py-2.5"
      >
        {t("Reach Out To Us")}
      </a>
    </div>
  );
}
