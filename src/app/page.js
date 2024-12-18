"use client";
import Carrousel from "@/components/components_homepage/carousel";
import TextBanner from "@/components/components_homepage/textbanner";
import ContainerSlider from "@/components/components_homepage/containerslider";
import ContainerGrid from "@/components/components_homepage/containergrid";
import ContainerSliderOne from "@/components/components_homepage/containersliderone";
import ContainerTestimonial from "@/components/components_homepage/containertestimonial";
import ContainerInstagram from "@/components/components_homepage/containerinstagram";
import ContainerCollaborate from "@/components/components_homepage/containercollaborate";
import ReachOut from "@/components/reachout";
import { useTranslations } from "next-intl";
export default function HomePage(locale) {
  const t = useTranslations("Revisi");
  return (
    <section>
      <Carrousel />
      <TextBanner capslock={t("ABOUT US")} />
      <ContainerSlider />
      <ContainerGrid />
      <ContainerSliderOne />
      <ContainerTestimonial />
      <ContainerInstagram />
      <ContainerCollaborate />
      <ReachOut />
    </section>
  );
}
