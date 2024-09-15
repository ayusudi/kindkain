'use client'
import Carrousel from "@/components/components_homepage/carousel"
import TextBanner from "@/components/components_homepage/textbanner"
import ContainerSlider from "@/components/components_homepage/containerslider"
import ContainerGrid from "@/components/components_homepage/containergrid"
import ContainerSliderOne from "@/components/components_homepage/containersliderone"
import ContainerVideo from "@/components/components_homepage/containervideo"
import ContainerInstagram from "@/components/components_homepage/containerinstagram"
import ContainerCollaborate from '@/components/components_homepage/containercollaborate';
import ReachOut from '@/components/reachout';
export default function HomePage(locale) {
  return (
    <section>
      <Carrousel />
      <TextBanner capslock={"ABOUT US"} />
      <ContainerSlider />
      <ContainerGrid />
      <ContainerSliderOne />
      <ContainerVideo />
      <ContainerInstagram />
      <ContainerCollaborate />
      <ReachOut />
    </section>
  )
}