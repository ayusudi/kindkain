"use client"
import React from 'react';
import { useTranslations } from 'next-intl';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from 'next/navigation';
import { useCookies } from 'react-cookie';
import { useEffect, useState } from 'react';

const Component = () => {
  const [cookie] = useCookies()
  const [data, setData] = useState([
    {
      "id": "1",
      "From": "maquin_maquin",
      "English": "Helpful\nTexture: soft and comfortable\nMaterial Quality: in line with the price\nComfort: very comfortable\nI really like the menstrual pad from Kindkain. FYI\nI have previously used a menstrual pad from another brand\nand it felt different and not as comfortable as Kindkain.\nThis is my assessment after using it. I didn't immediately\ngive an assessment even though I have bought it for a long time, maybe less than\nabout a month. The price is appropriate, next time I want to buy it, I'll buy it again because I'm still saving my money.\nfirst.\nBuying this saving package gets another bonus. Really like it\nThis product answers my desire for zero waste\nEven the packing uses biodegradable packaging.\nSuccess yak\n13-08-2024 10:23",
      "Bahasa": "Membantu\nTekstur: lembut dan nyaman\nKualitas Bahan: sesuai dengan harga\nKenyamanan: sangat nyaman\nAku suka banget sama menstrual pad dari Kindkain. FYI\naku sebelumnya pernah pakai mentrual pad dari merk\nlain dan rasanya beda ga senyaman dari Kindkain.\nIni penilaian ku setelah pemakaian. Aku ga langsung\nngasih penilaian padahal udah beli lama mungkin kurang\nlebih sebulan. Harganya sesuai next mau , beli lagi karena masih masih nabung\ndulu.\nBeli paket hemat ini dapat bonus lagi. Suka banget\nProduk ini menjawab keinginan ku buat zero waste\nBahkan packingnya pakai kemasan yang mudah terurai.\nSukses yak\n13-08-2024 10:23"
    },
    {
      "id": "2",
      "From": "rialuoo",
      "English": "Helpful\nVariations: DAY - 3pcs contents, Model 2023, NIGHT - 3pcs contents, Model 2023\nTexture: very soft\nComfort: comfortable to wear\nMaterial Quality: good and absorbent\nOrders already come all, already the second purchase here\nThe colors are cute, the fabric can be turned over, can clean both sides.\nside, really like products from kindkain. delivery\nalso not long, very happy. let's start using\nreusable menstrual pad",
      "Bahasa": "Membantu\nVariasi: DAY - Isi 3pcs,Model 2023, NIGHT - Isi 3pcs,Model 2023\nTekstur: lembut banget\nKenyamanan: nyaman di pakai\nKualitas Bahan: bagus dan menyerap\nPesanan dtg semua, sudah pembelian ke dua nih\nwarna nya lucu2, kain ny bs di balik, bisa bersihin kedua\nsisi, suka banget produk dari kindkain. pengiriman\njg gak lama, senang banget. yukk mulai pakai\npembalut kain"
    },
    {
      "id": "3",
      "From": "Sena",
      "English": "Variant: DAY 27-28cm - New Model 2023\nGood material, quick clean and leak proof. This mens pad is a game\nchanger! Finally managed to have a full monthly cycle this March\nusing mens pads and Alhamdulillah, I don't think about\nanymore about what kind of menstrual pad waste will end up like\nafter being thrown into the final disposal site. Hopefully more and more women\nwho switch to menspad or menscup",
      "Bahasa": "Varian: DAY 27-28cm - Model Baru 2023\nBahannya bagus, cepet bersih dan anti bocor. Mens pad ini game\nchanger banget! Akhirnya berhasil siklus bulanan Maret ini full\npakai mens pad dan Alhamdulillah sudah sudah gak kepikiran\nlagi sama sampah pembalut sendiri bakal berakhir kayak gimana\nsetelah dibuang ke tps. Semoga semakin banyak perempuan\nyang beralih ke menspad atau menscup"
    },
    {
      "id": "4",
      "From": "prelovedwidya_",
      "English": "Helpful\nVariations: NIGHT 35cm, Model 2023, MAXI 42cm, Model 2023\nRecommended for those of you who want to try menstrual pads from fabric. Menstrual pads are really comfortable, soft\nsmooth to wear and easy to clean",
      "Bahasa": "Membantu\nVariasi: NIGHT 35cm,Model 2023, MAXI 42cm,Model 2023\nRekomendasi buat kalian yang lagi mau coba pembalut\nkain. Pembalut dari kindkain benar\"\" nyaman, lembut\nhalus dipakai dan mudah dibersihkan"
    },
    {
      "id": "5",
      "From": "nadianurilkariem",
      "English": "Help\nVariations: MAXI 42cm, Model 2023, NIGHT 35cm, Model 2023, DAY...\nTexture: very soft\nMaterial Quality: premium\nComfort: not tried yet\nAs expected, others are comfortable; and maxi size are a lot bigger than the night size\nThe order came very fast. hihi when the bonus\nbowl cover too\nNote: as a reusable sanitary napkin, it would be nice\nif the wrapping cardboard is made into one (not per pcs)\nso as not to increase waste on this earth, thank you\nThank You!\n13-08-2024 06:37",
      "Bahasa": "Membantu\nVariasi: MAXI 42cm,Model 2023, NIGHT 35cm,Model 2023, DAY..\nTekstur: lembut sekali\nKualitas Bahan: premium\nKenyamanan: belum dicoba\nSesuai ekspektasi, lainnya nyaman dan ukuran night\nsama maxi ternyata super gede\nPesanan cepat sekali datangnya. hihi saat bonus\npenutup mangkok jugaa\nNote: sebagai pembalut yg reusable alangkah baiknya\njika kardus pembungkus dijadikan satu (tdk per pcs)\nsupaya tidak menambah sampah di bumi ini, terimakasih\nkake\nThank\nYou!\n13-08-2024 06:37\nKindKain Pembalut Kain Wanita Cuci Pakai"
    },
    {
      "id": "6",
      "From": "crazyrichcats",
      "English": "Help\nVariations: NIGHT 35cm, Model 2023, PANTYLINER 18cm, Model 20...\nTexture: smooth soft\nMaterial Quality: like baby skin\nComfort: cool\nI've bought here three times and this is my 9th & 10th item.\nI've been using kindkain for 2 periods.\nalthough there is no glue like ordinary sanitary napkins,\nwhen used, it doesn't slide.\nI've made sports too, still dry not moist.\nworth buying and repurchasing\n13-08-2024 00:55",
      "Bahasa": "Membantu\nVariasi: NIGHT 35cm,Model 2023, PANTYLINER 18cm,Model 20..\nTekstur: alus lembut\nKualitas Bahan: seperti kulit bayi\nKenyamanan: adem\nuda 3x beli disini dan ini item ke9 & ke10 aku.\nuda 2period pake kindkain.\nmeski gada lem spt pembalut biasa,\nwaktu dipake ga geser2 kok.\nuda dibuat olahraga juga, tetep kering ga lembab.\nlayak dibeli dan dibeli ulang\n13-08-2024 00:55"
    },
    {
      "id": "7",
      "From": "puti_arya",
      "English": "Helpful\nthe product is already good, and actually what makes\nleaking in my opinion is on the wings. because the\nabsorbent material reaches the wings and when we make it, we fold the wings down.\nMaybe we can revise it so that the liquid doesn't go to the wings and make it leak.\nthe liquid doesn't come to the wing and make it leak. so far\nokay for the menspad, must be washed extra clean and\nuse a fragrant one if you can use a lot of soap.\n29-08-2024 09:19",
      "Bahasa": "Membantu\nproduknya udah bagus, dan sebenarnya yang bikin\nbocor menurutku itu di bagian sayap nya. karna bahan\npenyerap nya sampe ke sayap dan pas make, sayapnya\nkita lipat ke bawah. mungkin bisa di revisi lagi supaya\ncairannya ga ikut ke sayap dan bikin bocor. sejauh ini\noke untuk menspad nya, harus dicuci extra bersih dan\npake yang harum kalo bisa pake sabunnya banyakin\n29-08-2024 09:19"
    },
    {
      "id": "8",
      "From": "houseji",
      "English": "Help\nVariety: NIGHT 35cm, Model 2023\nTexture: same as the cotton\nComfort: comfortable\nMaterial Quality: okay\nI'm using the 35cm one and I think it's enough\nto wear when it's heavy\nI'm a typical person who changes pads for a long time, and when using kindkain pads, it's not much.\nand when using kindkain pads, there is not much penetration!\n(previously if you use ordinary sanitary napkins,\noften penetrate when it's heavy?) there is indeed\nbut only a drop and in my opinion it's because of\nmy own fault for not changing pads sooner\nin my opinion, the minus is on the inside, for the\nthe inside (which is rough textured) it's really hard to wash.\nreally wash it huhuhu, I used the coconut soap\nkindkain but it's still hard and that's the minus.\nhuhu. hopefully there is a solution so that the stains can be\nremoved\noiya disclaimer, the dressing is quite easy\nshifted so pay attention to the pads again. mandatory\nrepurchase anyway!!!\n04-07-2024 10:50",
      "Bahasa": "Membantu\nVariasi: NIGHT 35cm,Model 2023\nTekstur: sama kayak kapas nya\nKenyamanan: nyaman\nKualitas Bahan: oke\nsaya pakai yg 35cm dan menurut saya itu sudah cukup\nutk dipakai pas deras'nya\nsaya termasuk tipikal org yg ganti pembalut cukup\nlama, dan pas pakai pembalut kain kindkain ga banyak\ntembusnya!! (sebelumnya kalo pakai pembalut biasa,\nsering bgt tembus pas lg deres?nya) memang ada\ntembusnya tp cuma setetes dan menurut saya itu karna\nkesalahan saya sendiri kenapa ga cepat ganti pembalut\nmenurut saya minusnya di bagian dalamnya, utk bagian\ndalamnya (yg bertekstur kasar) itu susaaaaahhhh\nbanget cucinya huhuhu, udh pakai coconut sabunnya\nkindkain tp tetep aja susah sih dan itu yg jadi minusnya\nhuhu. semoga ada solusi gimana supaya nodanya bisa\ndihilangkan\noiya disclaimer, pembalutnya ini lumayan gampang\nkegeser jadi diperhatikan lagi pembalutnya ya. wajib\nrepurchase sih!!!\n04-07-2024 10:50"
    },
    {
      "id": "9",
      "From": "hydrangea0109",
      "English": "Help\nVariety: DAY 27~28cm, Model 2023\nAlready have a night size, soft too so decided\nto buy one more. Only one drawback, the\nthe inside is hard to clean, so it's a bit uncomfortable,\neven though it doesn't really affect the\nits use because it's just the inside\nbut it's still good.\n21-06-2024 21:50",
      "Bahasa": "Membantu\nVariasi: DAY 27~28cm,Model 2023\nSudah punya yang ukuran night, lembut juga jadi mutusin\nuntuk beli 1 lagi. Kekurangan nya cuman 1, bagian\ndalamnya susah untuk di bersihkan, jadi agak ngestain,\nmeskipun gak ngaruh yang gimana banget banget ke\npenggunaannya karena ini cuman bagian dalamnya\ndoang tapi tetap baik kok.\n21-06-2024 21:50"
    },
    {
      "id": "10",
      "From": "nur_khalizah",
      "English": "Helpful \nVariation: PANTYLINER - 3pc, Model 2020\nSuitable For: menstruation\nTexture: soft fabric\nThis is good to use if there are spots only, and\nfor at home so it's not difficult to wash, if outside the home\nI prefer disposable ones. But this is easy to shift\nespecially if you're doing sports. For the material, it's comfortable\ndoes not cause blisters.\n13-03-2024 21:53",
      "Bahasa": "Membantu\nVariasi: PANTYLINER-Isi 3pc,Model 2020\nCocok Untuk: haid\nTekstur: kain lembut\nManfaat: pembalut\nIni bagusnya dipakai kl memang lg ada flek2 aja, dan\nuntuk di rumah sih ya jd gak susah nyuci, kl diluar rumah\nprefer ttp yg sekali pakai. Tapi ini tuh gampang bergeser\napalagi kl dibawa olahraga. Untuk bahannya sih nyaman\ngak bikin lecet.\n13-03-2024 21:53"
    },
    {
      "id": "11",
      "From": "friskalasmi",
      "English": "Variations: DAY - 3pcs content\nTexture: fabric\nPerformance: good\nSuitable for: women\nAbsorbent fabric, soft and comfortable to wear. Easy\neasy to wash too, stains don't stay on the fabric (as long as you wash it immediately).\nwashed). First time experience using kindkain is quite\nsatisfactory, unfortunately the stains like to get to the\nbutton if it's a lot, so it's also smudged around the crotch.\ncrotch. Maybe around the button can be made sense\nthere are stitches or something like that.\n",
      "Bahasa": "Variasi: DAY - Isi 3pcs\nTekstur: kain\nPerforma: bagus\nCocok Untuk: perempuan\nKain menyerap, lembut nyaman dipakai. Gampang\ndicuci juga, noda gak ngestain di kain (asal segera\ndicuci). Pengalaman pertama kali pakai kindkain cukup\nmemuaskan, sayang noda suka sampai ke bagian\nkancing kalau lagi banyak, jdny belepotan juga d sekitar\nselangkangan. Mungkin disekitar kancing bisa diakalin\nada jahitan atau gimana gitu.\n"
    },
    {
      "id": "12",
      "From": "Riana",
      "English": "Variant: 42cm MAXI\nSecond purchase for extra. Already have 6 menstrual pads and\nvery comfortable. The second purchase was tailored to my needs so I bought\nthe longer one",
      "Bahasa": "Varian: MAXI 42cm\nBeli kedua kali buat tambahan. Udah 6 ganti pembalut kain dan\nnyaman banget. Pembelian kedua disesuaikan kebutuhan jd beli\nyg lebih panjang"
    },
    {
      "id": "13",
      "From": "rantya",
      "English": "this is the second purchase... the menspad is comfortable to wear, does not\nmove & the stitches are neat. recommended !",
      "Bahasa": "ini sdh pembelian kedua.. menspadnya nyaman dipakai, ngga\ngeser2 & jahitannya rapi. rekomen lah pokoknya"
    },
    {
      "id": "14",
      "From": "Angkat",
      "English": "Variant: DAY 27-28cm - New Model 2023\nThe size is just right, the first time I tried using this cloth pad,\nabsorbing and does not leak only when there are clumps so it is less\ncomfortable,\nthe product is ok all the stitches are neat, there is an opening so you can be clean\nto the inside",
      "Bahasa": "Varian: DAY 27-28cm - Model Baru 2023\nsizenya pas ya, pertma kali coba pake pembalut kain ini,\nmenyerap gak bocor cuma kalau pas ada gumpalan jd kurng\nnyaman,\nproduknya ok smua jahitan jg rapi, ada bukaan jdi bisa bersih\nsmpe dalam\n"
    }
  ]
  )
  const router = useRouter()
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3, // default setting for mobile
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 900, // Adjust this breakpoint to match your desired screen size
        settings: {
          slidesToShow: 1, // show 4 items on larger screens
          slidesToScroll: 1,
        }
      }
    ]
  };
  const t = useTranslations("HomePage")
  useEffect(() => {
    let temp = [...data].map(el => {
      let obj = { ...el, text: '' }
      if (cookie.locale === 'en') {
        obj.text = obj.English
      } else {
        obj.text = obj.Bahasa
      }
      return obj
    })
    setData(temp)
  }, [cookie])
  return (
    <div className="bg-nude">
      <div className='max-w-screen-2xl m-auto px-6 py-10 gap-10 md:px-14 md:pt-20 md:pb-16 flex flex-col md:min-h-[556px] '>
        <div className='w-full flex flex-col gap-2'>
          <p className="m-auto text-darkpurple font-quicksand font-bold md:text-xl text-sm text-center">TESTIMONIALS</p>
          <p className="m-auto text-darktext font-quicksand font-bold md:text-[40px] text-xl w-[88%] md:w-[55%] text-center" style={{ lineHeight: '120%' }}>{t('testimonial')}</p>
          <p className="m-auto text-gray font-nunito md:text-xl text-sm text-center w-[88%] md:w-4/6" style={{ letterSpacing: 0.8, lineHeight: "150%", whiteSpace: 'pre-wrap' }}>{t('testimonial-subtitle')}</p>
        </div>
        <div className='w-full darkgray'>
          <Slider {...settings}>
            {data.map((e, i) => {
              return (
                <div key={i} className="cursor-pointer trending-slider__item  mx-auto md:px-2">
                  <div style={{ position: 'relative', aspectRatio: "4/5" }} className='flex flex-col rounded-lg animated-background bg-white shadow shadow-md overflow-hidden py-2 px-6'>
                    <p style={{ lineHeight: "145%", letterSpacing: 0.33 }} className="whitespace-pre-wrap text-sm font-nunito text-darktext text-sm mt-3">{e.text}</p>
                    <p style={{ lineHeight: "145%", letterSpacing: 0.33 }} className="self-end flex-end justify-self-end whitespace-pre-wrap text-sm font-nunito text-darktext font-semibold my-2">From : {e.From}</p>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}



export default Component;
