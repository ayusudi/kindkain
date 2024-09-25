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
      "id": 1,
      "From": "maquin_maquin",
      "English": "(direct translated from Bahasa Indonesia)\n\nI really like the menstrual pad from Kindkain. FYI I have previously used a menstrual pad from another brand and it felt different and not as comfortable as Kindkain.\nThis is my assessment after using it. I didn't immediately give an assessment even though I have bought it for a long time, maybe less than about a month.\nThe price is appropriate, next time I want to buy it, I'll buy it again because I'm still saving my money first.",
      "Bahasa": "Aku suka banget sama menstrual pad dari Kindkain. FYI aku sebelumnya pernah pakai menstrual pad dari merk lain dan rasanya beda ga senyaman dari Kindkain.\nIni penilaian ku setelah pemakaian. Aku ga langsung ngasih penilaian padahal udah beli lama mungkin kurang lebih sebulan.\nHarganya sesuai next mau beli lagi karena masih masih nabung dulu."
    },
    {
      "id": 2,
      "From": "rialuoo",
      "English": "(direct translated from Bahasa Indonesia)\n\nMaterial Quality: good and absorbent\nOrders already come all, already the second purchase here\nThe colors are cute, the fabric can be turned over, can clean both sides.\nside, really like products from kindkain. delivery also not long, very happy. let's start using reusable menstrual pad",
      "Bahasa": "Pesanan datang semua, sudah pembelian ke dua nih\nwarna nya lucu-lucu, kain nya bisa di balik, bisa bersihin kedua sisi, suka banget produk dari KindKain. Pengiriman juga gak lama, senang banget. Yukk mulai pakai pembalut kain."
    },
    {
      "id": 3,
      "From": "Sena",
      "English": "(direct translated from Bahasa Indonesia)\n\nGood material, quick clean and leak proof. This mens pad is a game changer! Finally managed to have a full monthly cycle this March using mens pads and Alhamdulillah, I don't think about anymore about what kind of menstrual pad waste will end up like after being thrown into the final disposal site. Hopefully more and more women who switch to menspad or menscup",
      "Bahasa": "Bahannya bagus, cepet bersih dan anti bocor. Mens pad ini game changer banget! Akhirnya berhasil siklus bulanan Maret ini full pakai mens pad dan Alhamdulillah sudah sudah gak kepikiran lagi sama sampah pembalut sendiri bakal berakhir kayak gimana setelah dibuang ke tps. Semoga semakin banyak perempuan yang beralih ke menspad atau menscup"
    },
    {
      "id": 4,
      "From": "prelovedwidya_",
      "English": "(direct translated from Bahasa Indonesia)\n\nRecommended for those of you who want to try menstrual pads from fabric. Menstrual pads are really comfortable, soft\nsmooth to wear and easy to clean",
      "Bahasa": "Rekomendasi buat kalian yang lagi mau coba pembalut kain. Pembalut dari kindkain benar\"\" nyaman, lembut halus dipakai dan mudah dibersihkan"
    },
    {
      "id": 5,
      "From": "nadianurilkariem",
      "English": "(direct translated from Bahasa Indonesia)\n\nAs expected, others are comfortable; and maxi size are a lot bigger than the night size\nThe order came very fast.",
      "Bahasa": "Sesuai ekspektasi, lainnya nyaman dan ukuran night sama maxi ternyata super besar\nPesanan cepat sekali datangnya."
    },
    {
      "id": 6,
      "From": "crazyrichcats",
      "English": "(direct translated from Bahasa Indonesia)\n\nI've bought here three times and this is my 9th & 10th item.\nI've been using kindkain for 2 periods.\nalthough there is no glue like ordinary sanitary napkins,\nwhen used, it doesn't slide.\nI've made sports too, still dry not moist.\nworth buying and repurchasing\n",
      "Bahasa": "uda 3x beli disini dan ini item ke9 & ke10 aku.\nuda 2period pake kindkain.\nmeski gada lem spt pembalut biasa,\nwaktu dipake ga geser2 kok.\nuda dibuat olahraga juga, tetep kering ga lembab.\nlayak dibeli dan dibeli ulang\n"
    },
    {
      "id": 7,
      "From": "Riana",
      "English": "(direct translated from Bahasa Indonesia)\n\nSecond purchase for extra. Already have 6 menstrual pads and very comfortable.\nThe second purchase was tailored to my needs so I bought the longer one",
      "Bahasa": "Beli kedua kali buat tambahan. Udah 6 ganti pembalut kain dan nyaman banget.\nPembelian kedua disesuaikan kebutuhan jd beli yg lebih panjang"
    },
    {
      "id": 8,
      "From": "ranyta",
      "English": "(direct translated from Bahasa Indonesia)\n\nthis is the second purchase... the menspad is comfortable to wear, does not\nmove & the stitches are neat. recommended !",
      "Bahasa": "ini sdh pembelian kedua.. menspadnya nyaman dipakai, ngga\ngeser2 & jahitannya rapi. rekomen lah pokoknya"
    },
    {
      "id": 9,
      "From": "Angkat",
      "English": "(direct translated from Bahasa Indonesia)\n\nThe size is just right, the first time I tried using this cloth pad,\nabsorbing and does not leak only when there are clumps so it is less\ncomfortable,\nthe product is ok all the stitches are neat, there is an opening so you can be clean\nto the inside",
      "Bahasa": "sizenya pas ya, pertma kali coba pake pembalut kain ini,\nmenyerap gak bocor cuma kalau pas ada gumpalan jd kurng\nnyaman,\nproduknya ok smua jahitan jg rapi, ada bukaan jdi bisa bersih\nsmpe dalam\n"
    },
    {
      "id": 10,
      "From": "emakkece",
      "English": "(direct translated from Bahasa Indonesia)\n\nI used to use menspad initially not because it was ecofriendly but\nbecause it often got irritated even though I changed it often\nIf that's the case, just listen to what it means that the body doesn't want to be exposed to the chemical\nchemicals in disposable sanitary napkins, and it's true.\nwhen you switch to cloth sanitary napkins, it's safe and comfortable, doesn't leak, doesn't\nirritating and environmentally friendly, cheap too..love",
      "Bahasa": "Dulu pake menspad awalnya bukan karena ecofriendly tapi\nkarena sering iritasi walau sering ganti\nKalo udh gtu, dengerin aja artinya tubuh ga mau tuh kena kimia\nsintetis yang ada pada pembalut sekali pakai, dan bener dong\npas beralih ke pembalut kain aman dan nyaman aja, ga bocor, ga\nbikin iritasi dan ramah lingkungan, murmer pulaa..love\n"
    },
    {
      "id": 11,
      "From": "Hestia",
      "English": "(direct translated from Bahasa Indonesia)\n\nI've bought menstrual pads twice at KindKain\nbecause the material suits me the best.\nSoft, non-irritating. Easy to wash and\ndry quickly!",
      "Bahasa": "Sudah dua kali beli menstrual pads di KindKain\nkarena bahannya yang paling cocok denganku.\nLembut, nggak bikin iritasi. Mudah dicuci serta\ncepat keringnya!"
    },
    {
      "id": 12,
      "From": "Salsabila",
      "English": "(direct translated from Bahasa Indonesia)\n\nGood & soft product, have used it before and it's easy to wash too.",
      "Bahasa": "Produk bagus & lembut, udh pernah pakai dan\ngampang dicuci juga"
    },
    {
      "id": 13,
      "From": "marikemari.id",
      "English": "(direct translated from Bahasa Indonesia)\n\nVery comfortable to use compared to commercial sanitary napkins\ncommercial, easy to wash, comparable price hear\nquality, worth it anyway",
      "Bahasa": "Nyaman banget dipake dibandingkan pembalut\nkomersial, mudah dicuci, harga sebanding dengar\nkualitas, worth it deh pokoknya"
    },
    {
      "id": 14,
      "From": "gabrilla10",
      "English": "(direct translated from Bahasa Indonesia)\n\nAlhamdulillah, the goods arrived quickly.\n3 days for the kalimatan area and its owner\nmasyaa allah is very friendly and always helps with anything we want to ask. Anyway, inshaa\nallah this is very useful. Let's take care of ourselves and\nour environment besides, being able to save is certainly safer\ntoo. Barakallah always ^^",
      "Bahasa": "Alhamdulillah udh sampai,brng nya dateng cepet bgt\n3 harian doang untuk daerah kalimatan dan owner nya\nmasyaa allah ramah bgt dan selalu ngebantu apa2\naja yang mau kita tanyain. Pokoknya insyaa\nallah bermanfaat bgt ini mah. Kuy jaga diri kita serta\nlingkungan kita selain, bisa hemat tentu lebih aman\njugaa. Barakallah selalu ^^"
    },
    {
      "id": 15,
      "From": "Deasy",
      "English": "(direct translated from Bahasa Indonesia)\n\nWow, before wearing it, I thought it would be\ntoo thick, but after wearing it, it actually\nfeels like I'm not wearing it. Soft, doesn't irritate the skin\nirritating, lightweight. Easy to wash, environmentally friendly,\nand more efficient for sure because it's more durable. Why don't you\nswitched to this product a long time ago? Buy because\nsafe material for the body. Seller response is okay,\nsafe packing until home.",
      "Bahasa": "Wow banget, sebelum dipakai, berpikir akan\nterlalu tebal, ternyata setelah dipakai malah\nberasa seperti tidak pakai. Lembut, gak bikin kulit\niritasi, ringan. Mudah dicuci, ramah lingkungan,\ndan lebih hemat pastinya krn lebih awet. Knp gak\ndari dulu beralih ke produk ini? Beli karena\nbahan aman untuk tubuh. Respon seller oke,\npacking aman sampai dirumah."
    },
    {
      "id": 16,
      "From": "egftjzxts8",
      "English": "(direct translated from Bahasa Indonesia)\n\nNo need to hesitate anymore, soft material does not irritate,\nneat and safe packing, not the type of menstrual pad that is\nthick, so it's good to use, helps our confidence , hurry up and buy it to protect\nour bodies, disposable pads are dangerous that contain\nbleach + reduce waste accumulation",
      "Bahasa": "Gak usah ragu lagi, bahan lembut gak bikin iritasi,\npacking rapi dan aman, bukan tipe menstrual ped yg\ntebel gitu, jdi enak dipakenya, jdi pd, buruan beli sayangi\ntubuh kita, pembalut sekali pakai bahaya lo mengandung\npemutih+kurangi penumpukan sampah"
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
                  <div style={{ position: 'relative', aspectRatio: "1/1" }} className='flex flex-col rounded-lg animated-background bg-white shadow shadow-md overflow-hidden p-8 justify-between'>
                    <div className='flex flex-col'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="24" viewBox="0 0 35 24" fill="none">
                        <path d="M7.68357 8.72727C9.19632 8.72727 10.6751 9.17514 11.9329 10.0142C13.1907 10.8533 14.171 12.046 14.75 13.4413C15.3289 14.8367 15.4803 16.3721 15.1852 17.8534C14.8901 19.3347 14.1616 20.6954 13.0919 21.7634C12.0223 22.8313 10.6594 23.5586 9.17573 23.8533C7.69205 24.1479 6.15417 23.9967 4.75657 23.4187C3.35897 22.8407 2.16443 21.862 1.32399 20.6062C0.483548 19.3504 0.034965 17.874 0.034965 16.3636L0 15.2727C0 11.2221 1.61166 7.33747 4.48045 4.47328C7.34923 1.60909 11.2401 0 15.2972 0V4.36364C13.8617 4.35978 12.4396 4.64009 11.1133 5.18836C9.78692 5.73662 8.5826 6.54197 7.56993 7.55782C7.17628 7.94997 6.81319 8.37156 6.48383 8.81891C6.87573 8.75636 7.27491 8.72509 7.68138 8.72509L7.68357 8.72727ZM27.3514 8.72727C28.8641 8.72727 30.3429 9.17514 31.6007 10.0142C32.8585 10.8533 33.8389 12.046 34.4178 13.4413C34.9967 14.8367 35.1482 16.3721 34.853 17.8534C34.5579 19.3347 33.8295 20.6954 32.7598 21.7634C31.6901 22.8313 30.3273 23.5586 28.8436 23.8533C27.3599 24.1479 25.822 23.9967 24.4244 23.4187C23.0268 22.8407 21.8323 21.862 20.9918 20.6062C20.1514 19.3504 19.7028 17.874 19.7028 16.3636L19.6678 15.2727C19.6678 11.2221 21.2795 7.33747 24.1483 4.47328C27.0171 1.60909 30.908 0 34.965 0V4.36364C33.5295 4.35978 32.1075 4.64009 30.7811 5.18836C29.4548 5.73662 28.2504 6.54197 27.2378 7.55782C26.8441 7.94997 26.481 8.37156 26.1517 8.81891C26.5436 8.75636 26.9435 8.72727 27.3514 8.72727Z" fill="#301C51" />
                      </svg>
                      <p style={{ lineHeight: "150%", letterSpacing: 0.5 }} className="whitespace-pre-wrap text-sm font-nunito text-darktext text-[16px] text-justify mt-5">{e.text}</p>
                    </div>

                    <p style={{ lineHeight: "150%", letterSpacing: 0.5 }} className="self-end flex-end justify-self-end whitespace-pre-wrap text-sm font-quicksand text-darktext font-semibold mt-2 text-[16px]">{e.From}</p>
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
