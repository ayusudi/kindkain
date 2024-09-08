'use client'
import { useTranslations } from 'next-intl';
import Carrousel from "@/components/components_homepage/carousel"
import TextBanner from "@/components/components_homepage/textbanner"
import ContainerSlider from "@/components/components_homepage/containerslider"
import ContainerGrid from "@/components/components_homepage/containergrid"
import ContainerSliderOne from "@/components/components_homepage/containersliderone"
import ContainerVideo from "@/components/components_homepage/containervideo"
import ContainerInstagram from "@/components/components_homepage/containerinstagram"
import ContainerCollaborate from '@/components/components_homepage/containercollaborate';
import ReachOut from '@/components/reachout';
import dataRaw from "@/data/top.json"
import { useEffect, useState } from 'react';

export default function HomePage() {
  const t = useTranslations('HomePage');
  const [locale, setLocale] = useState('id');
  const [data, setData] = useState([])
  useEffect(() => {
    const cookieLocale = document.cookie
      .split('; ')
      .find((row) => row.startsWith('locale='))
      ?.split('=')[1];

    if (cookieLocale) {
      setLocale(cookieLocale);
    }
    let temp = dataRaw.map(el => {
      if (cookieLocale === 'id') {
        return { ...el, title: el.nama_product, price: "200.000" }
      }
      return { ...el, title: el.product_name, price: "200.000" }
    })
    setData(temp)
  }, []);

  return (
    <section>
      <Carrousel />
      <TextBanner capslock={"ABOUT US"} />
      <ContainerSlider data={data} />
      <ContainerGrid />
      <ContainerSliderOne />
      <ContainerVideo />
      <ContainerInstagram />
      <ContainerCollaborate />
      <ReachOut />
    </section>
  )
}