import { useTranslations } from 'next-intl';
import Navbar from '@/components/navbar';
import Carrousel from "@/components/components_homepage/carousel"
import TextBanner from "@/components/components_homepage/textbanner"
import ContainerSlider from "@/components/components_homepage/containerslider"
import ContainerGrid from "@/components/components_homepage/containergrid"
import ContainerSliderOne from "@/components/components_homepage/containersliderone"
import ContainerVideo from "@/components/components_homepage/containervideo"
import ContainerInstagram from "@/components/components_homepage/containerinstagram"
import ContainerCollaborate from '@/components/components_homepage/containercollaborate';
import ReachOut from '@/components/reachout';
import Footer from "@/components/footer"
export default function HomePage() {
  const t = useTranslations('HomePage');
  let text = {
    capslock: "ABOUT US",
    headline: "We Are The First Indonesian Brand Focused On Reusable Cloth Products For Healthier, Smarter, & Waste-less Living.",
    description: "Our mission is to make sustainable living easier, shifting from toxic and disposable culture, by providing high quality yet affordable cloth alternatives to disposable products. Our locally manufactured products are the solution to fill the gap in zero-waste living necessities.\n\nOur best selling menstrual pads and menstrual cup products has helped thousands of women shift to a healthier, more comfortable period."
  }
  return (
    <section>
      <Navbar />
      <Carrousel />
      <TextBanner capslock={text.capslock} headline={text.headline} description={text.description} />
      <ContainerSlider />
      <ContainerGrid />
      <ContainerSliderOne />
      <ContainerVideo />
      <ContainerInstagram />
      <ContainerCollaborate />
      <ReachOut />
      <Footer />
    </section>
  )
}