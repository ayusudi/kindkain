"use client";
import Accordion from "@/components/components_whypage/accordions";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const t = useTranslations("WhyPage");

  return (
    <section className="bg-cream">
      <article className="font-nunito flex justify-center flex-col pb-20 gap-6 pt-6 md:pt-0">
        <Image
          alt="Pembalut Kain dan Cawan Menstruasi"
          src="/banner-why.png"
          width="900"
          height="100"
          className="w-11/12 md:w-full max-w-screen-2xl m-auto h-auto animated-background bg-gradient-to-r from-zinc-200 via-zinc-200 to-zinc-400"
        />
        <div className="max-w-screen-2xl m-auto">
          <div className="m-auto flex flex-col gap-10 md:py-12 ">
            <div className="flex flex-col md:flex-row md:w-10/12 justify-between items-center gap-6 mx-auto">
              <div
                style={{ aspectRatio: "1/1" }}
                className="relative md:w-[555px] w-full h-auto"
              >
                <Image
                  sizes="(max-width: 555px) 100vw"
                  fill
                  src="/infographic/1.jpg"
                  alt="Sanitary Pads KindKain"
                  className="rounded-lg shadow-md animated-background bg-gradient-to-r from-zinc-200 via-zinc-200 to-zinc-400"
                />
              </div>
              <div className="w-[300px] md:w-[580px] flex items-center md:items-start flex-col gap-6">
                <Image
                  alt="Pembalut Kain Lebih Sehat"
                  src="/lebih-sehat.png"
                  width="60"
                  height="60"
                  className="animated-background bg-gradient-to-r from-zinc-200 via-zinc-200 to-zinc-400"
                />
                <div className="font-quicksand text-darkpurple text-2xl md:text-5xl font-bold">
                  {t("healthier")}
                </div>
                <p className="text-base md:text-[20px] text-gray text-justify mb-2 whitespace-pre-wrap">
                  {t("healthier-text")}
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:w-10/12 justify-between items-center gap-6 mt-4 md:mt-0 mx-auto">
              <div
                style={{ aspectRatio: "1/1" }}
                className="relative  w-full md:w-[555px] h-auto"
              >
                <Image
                  sizes="(max-width: 555px) 100vw"
                  fill
                  src="/infographic/2.jpg"
                  alt="Pembalut Kain Lebih Sehat"
                  className="rounded-lg shadow-md animated-background bg-gradient-to-r from-zinc-200 via-zinc-200 to-zinc-400"
                />
              </div>
              <div className="w-[300px] md:w-[580px] flex items-center md:items-start flex-col gap-6">
                <Image
                  alt="Pembalut Kain KindKain Aman dan Ramah Lingkungan"
                  src="/lebih-ramah.png"
                  width="60"
                  height="60"
                  className="animated-background bg-gradient-to-r from-zinc-200 via-zinc-200 to-zinc-400"
                />
                <div className="font-quicksand text-darkpurple text-center md:text-left text-2xl md:text-5xl font-bold">
                  {t("environmentally")}
                </div>
                <p className="text-base md:text-[20px] text-gray text-justify mb-2">
                  {t("environmentally-text1")}
                  <span className="text-darkpurple font-bold">
                    {t("environmentally-textbold")}
                  </span>{" "}
                  {t("environmentally-text2")}
                </p>
              </div>
            </div>

            <div className="w-10/12 m-auto text-center flex flex-col gap-8 md:py-10 md:py-12">
              <Image
                alt="Pembalut Kain KindKain Aman, Ramah Lingkungan dan Hemat"
                className="m-auto animated-background bg-gradient-to-r from-zinc-200 via-zinc-200 to-zinc-400"
                src="/lebih-hemat.png"
                width="60"
                height="60"
              />
              <div className="flex items-center justify-center space-x-2">
                <div className="text-darkpurple text-2xl md:text-5xl font-bold">
                  {t("economical")}
                </div>
              </div>
              <p className="text-base md:text-[20px] text-gray md:w-5/6 m-auto text-xl whitespace-prewrap">
                {t("economical-text1")}
                <span className="text-darkpurple font-bold">
                  {t("economical-textbold1")}
                </span>
                {t("economical-text2")}
                {"\n"}
                {t("economical-text3")}
                <span className="text-darkpurple font-bold">
                  {t("economical-textbold2")}
                </span>{" "}
                {t("economical-text4")}
              </p>

              <div className="text-left flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex flex-col gap-1.5 bg-white border border-[#8F8C8A] rounded-lg p-8 shadow-md w-full md:w-1/3">
                  <h3 className="font-semibold text-darktext text-2xl">
                    {t("disposable-bold")}
                  </h3>
                  <p className="text-sm text-gray">{t("disposable")}</p>
                  <p className="text-lg text-darkpurple font-bold">IDR</p>
                  <p className="text-2xl text-darkpurple font-bold">
                    1.500-12.000
                  </p>
                  <p className="text-sm text-gray">{t("peruse")}</p>
                </div>
                <div className="flex items-start flex-col gap-1.5 bg-darkpurple text-white rounded-lg p-8 shadow-md w-full md:w-1/3">
                  <h3 className="font-semibold text-2xl w-3/6">
                    {t("clothpad")}
                  </h3>
                  <p className="text-lg font-bold text-yellow">IDR</p>
                  <p className="text-2xl font-bold text-yellow">317 - 583</p>
                  <p className="text-sm text-[#978DA8]">{t("peruse")}</p>
                  <button
                    onClick={() => router.push(t("link-clothpad"))}
                    className="bg-yellow text-darkpurple px-8 py-2 mt-2 rounded-full cursor-pointer"
                  >
                    Shop Now
                  </button>
                </div>
                <div className="items-start flex flex-col gap-1.5 bg-darkpurple text-white rounded-lg p-8 shadow-md w-full md:w-1/3">
                  <h3 className="font-semibold text-2xl w-5/6">
                    {t("menstrualcup")}
                  </h3>
                  <p className="text-lg font-bold text-yellow">IDR</p>
                  <p className="text-2xl font-bold text-yellow">83</p>
                  <p className="text-sm text-[#978DA8]">{t("peruse")}</p>
                  <button
                    onClick={() => router.push(t("link-menstrualcup"))}
                    className="bg-yellow text-darkpurple px-8 py-2 mt-2 rounded-full cursor-pointer"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="bg-nude" id="faq">
        <div className="max-w-screen-2xl m-auto flex flex-col py-20 ">
          <div className="w-10/12 mx-auto">
            <p className="w-full text-[40px] font-bold text-darkpurple font-quicksand pb-4">
              Frequently Asked Question
            </p>
            <Accordion />
          </div>
        </div>
      </article>
    </section>
  );
}
