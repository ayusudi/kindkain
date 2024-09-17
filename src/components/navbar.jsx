"use client";
import Image from "next/image";
import Link from "next/link";
import { Navbar, Dropdown } from "flowbite-react";
import { useState } from "react";
import Modal from "@/components/modal"
import { useRouter, usePathname } from 'next/navigation';
import { useCookies } from "react-cookie";

const intl = {
  "arrowIcon": "ml-2 h-4 w-4",
  "content": "py-0 m-0 focus:outline-none",
  "floating": {
    "target": "w-full",
    "animation": "transition-opacity",
    "arrow": {
      "base": "absolute z-10 h-2 w-2 rotate-45",
      "style": {
        "light": "bg-cream",
        "auto": "bg-cream "
      },
      "placement": "-4px"
    },
    "base": "z-10 w-fit divide-y overflow-hidden  rounded shadow focus:outline-none",
    "content": "text-sm text-gray-700",
    "divider": "my-0 h-0",
    "header": "block px-4 py-2 text-sm text-gray-700 ",
    "hidden": "invisible opacity-0",
    "item": {
      "base": "hover:bg-darkpurple  hover:text-white flex w-full cursor-pointer items-center justify-start px-4 py-2 text-sm text-gray-700 focus:outline-none ",
      "icon": "mr-2 h-4 w-4"
    },
    "style": {
      "dark": "bg-cream text-white",
      "light": " bg-cream text-gray-900",
      "auto": "bg-cream text-gray-900"
    },
    "target": "w-full"
  },
  "inlineWrapper": "bg-white w-[85px] text-black rounded-full focus:outline-none focus:ring-0 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center justify-between"
}
const intl2 = {
  "arrowIcon": "ml-2 h-4 w-4",
  "content": "py-0 m-0 focus:outline-none m-auto",
  "floating": {
    "target": "w-full",
    "animation": "transition-opacity",
    "arrow": {
      "base": "absolute z-10 h-2 w-2 rotate-45",
      "style": {
        "light": "bg-cream",
        "auto": "bg-cream "
      },
      "placement": "-4px"
    },
    "base": "m-auto z-10 w-fit divide-y overflow-hidden  rounded shadow focus:outline-none",
    "content": "text-sm text-gray-700",
    "divider": "my-0 h-0",
    "header": "block px-4 py-2 text-sm text-gray-700 ",
    "hidden": "invisible opacity-0",
    "item": {
      "base": "hover:bg-darkpurple  hover:text-white flex w-full cursor-pointer items-center justify-start px-4 py-2 text-sm text-gray-700 focus:outline-none ",
      "icon": "mr-2 h-4 w-4"
    },
    "style": {
      "dark": "bg-cream text-white",
      "light": " bg-cream text-gray-900",
      "auto": "bg-cream text-gray-900"
    },
    "target": "w-full"
  },
  "inlineWrapper": "bg-white m-auto w-[100px] text-black rounded-full focus:outline-none focus:ring-0 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center justify-between"
}
const shop = {
  "arrowIcon": "ml-2 h-4 w-4",
  "content": "py-0 m-0 focus:outline-none",
  "floating": {
    "target": "w-full",
    "animation": "transition-opacity",
    "arrow": {
      "base": "absolute z-10 h-2 w-2 rotate-45",
      "style": {
        "light": "bg-cream",
        "auto": "bg-cream "
      },
      "placement": "-4px"
    },
    "base": "z-10 w-[237px] divide-y overflow-hidden  rounded shadow focus:outline-none",
    "content": "text-sm text-gray-700",
    "divider": "my-0 h-0",
    "header": "block px-4 py-2 text-sm text-gray-700 ",
    "hidden": "invisible opacity-0",
    "item": {
      "base": "hover:bg-darkpurple  hover:text-white flex w-full cursor-pointer items-center justify-start px-4 py-2 text-sm text-gray-700 focus:outline-none ",
      "icon": "mr-2 h-4 w-4 "
    },
    "style": {
      "dark": "bg-cream text-gray-900",
      "light": " bg-cream text-gray-900",
      "auto": "bg-cream text-gray-900"
    },
    "target": "w-full"
  },
  "inlineWrapper": "bg-darkpurple text-white hover:text-yellow rounded-full focus:outline-none focus:ring-0 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center "
}
const object = {
  "root": {
    "base": "bg-white px-2 py-2.5 px-4 md:px-14 md:py-6 2xl:px-0",
    "rounded": {
      "on": "rounded",
      "off": ""
    },
    "bordered": {
      "on": "",
      "off": ""
    },
    "inner": {
      "base": "mx-auto flex flex-wrap items-center justify-between",
      "fluid": {
        "on": "",
        "off": "container"
      }
    }
  },
  "brand": {
    "base": " relative items-center w-[100px] h-7 md:w-[154px] md:h-10"
  },
  "collapse": {
    "base": "w-full md:block md:w-auto",
    "list": "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
    "hidden": {
      "on": "hidden",
      "off": ""
    }
  },
  "link": {
    "base": "cursor-pointer block py-2 pl-3 pr-4 md:p-0 font-nunito text-base",
    "active": {
      "on": "",
      "off": "text-gray-700 hover:bg-gray-50 "
    },

  },
  "toggle": {
    "base": "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-none md:hidden",
    "icon": "h-6 w-6 shrink-0 !text-darkpurple dark:text-darkpurple"
  }
}

export function Component({ locale }) {
  const [cookies, setCookie] = useCookies(['locale'])
  const router = useRouter()
  const pathname = usePathname()
  const [ads, setAds] = useState(true)
  const [openModal, setOpenModal] = useState(false);
  let data = [
    {
      name: "Shopee",
      img: "/ecommerce/shopee.jpg",
      link: "https://shopee.co.id/kindkain"
    },
    {
      name: "Tokopedia",
      img: "/ecommerce/tokopedia.jpg",
      link: "https://www.tokopedia.com/kindkain"
    },
    {
      name: "Tiktok Shop",
      img: "/ecommerce/tiktok.jpg",
      link: "https://www.tiktok.com/@kindkain.id"
    },
    {
      name: "Lazada",
      img: "/ecommerce/lazada.png",
      link: "https://www.lazada.co.id/shop/kindkain"
    }
  ]
  const openNow = () => {
    setOpenModal(true)
  }

  const changeLang = async (e) => {
    if (e.toUpperCase() !== cookies.locale.toUpperCase()) {
      if (pathname.startsWith("/products/") && pathname.length > 10) {
        setCookie("locale", e.toLowerCase())
        let slug = localStorage.getItem('alternative_slug')
        router.push(`/products/${slug}`)
        return router.refresh()
      }
      setCookie("locale", e.toLowerCase())
      return router.refresh()
    }
  }

  const toBrowseProduct = () => {
    setCookie("categories", '')
    router.push("/products")
  }

  return (
    <>
      {
        ads && (
          <div className="w-full bg-yellow p-2">
            <span className="font-quicksand text-darkpurple text-center flex flex-col md:flex-row gap-0 md:gap-1 items-center justify-center">
              <p>Located outside Indonesia?</p>
              <Link className="underline font-semibold" href="/international-shipping">We Offer Worldwide Shipping</Link>
              <button onClick={() => setAds(false)} className="absolute right-0 pr-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M12.892 0.302021C12.7995 0.209317 12.6896 0.135769 12.5686 0.085588C12.4477 0.0354065 12.318 0.00957632 12.187 0.00957632C12.0561 0.00957632 11.9264 0.0354065 11.8054 0.085588C11.6844 0.135769 11.5745 0.209317 11.482 0.302021L6.59202 5.18202L1.70202 0.29202C1.60944 0.199438 1.49953 0.125998 1.37856 0.0758934C1.2576 0.0257884 1.12795 9.75509e-10 0.997021 0C0.86609 -9.75509e-10 0.736441 0.0257884 0.615477 0.0758934C0.494513 0.125998 0.384602 0.199438 0.29202 0.29202C0.199438 0.384602 0.125998 0.494513 0.0758934 0.615477C0.0257884 0.736441 -9.75509e-10 0.86609 0 0.997021C9.75509e-10 1.12795 0.0257884 1.2576 0.0758934 1.37856C0.125998 1.49953 0.199438 1.60944 0.29202 1.70202L5.18202 6.59202L0.29202 11.482C0.199438 11.5746 0.125998 11.6845 0.0758934 11.8055C0.0257884 11.9264 0 12.0561 0 12.187C0 12.318 0.0257884 12.4476 0.0758934 12.5686C0.125998 12.6895 0.199438 12.7994 0.29202 12.892C0.384602 12.9846 0.494513 13.058 0.615477 13.1081C0.736441 13.1583 0.86609 13.184 0.997021 13.184C1.12795 13.184 1.2576 13.1583 1.37856 13.1081C1.49953 13.058 1.60944 12.9846 1.70202 12.892L6.59202 8.00202L11.482 12.892C11.5746 12.9846 11.6845 13.058 11.8055 13.1081C11.9264 13.1583 12.0561 13.184 12.187 13.184C12.318 13.184 12.4476 13.1583 12.5686 13.1081C12.6895 13.058 12.7994 12.9846 12.892 12.892C12.9846 12.7994 13.058 12.6895 13.1081 12.5686C13.1583 12.4476 13.184 12.318 13.184 12.187C13.184 12.0561 13.1583 11.9264 13.1081 11.8055C13.058 11.6845 12.9846 11.5746 12.892 11.482L8.00202 6.59202L12.892 1.70202C13.272 1.32202 13.272 0.682021 12.892 0.302021Z" fill="#301C51" fillOpacity="0.5" />
                </svg>
              </button>
            </span>
          </div>
        )
      }
      <div className="h-fit w-full bg-cream shadow-md z-10 sticky top-0 ">
        <Navbar theme={object} fluid className="max-w-[1440px] bg-cream  m-auto">
          <Navbar.Toggle />
          <Navbar.Brand as={Link} href="https://kindkain.vercel.app">
            <Image sizes="(max-width: 154px)" fill src="/logo.png" alt="Kindkain Logo" className="h-8 mr-6 ml-2 2xl:ml-0" />
          </Navbar.Brand>
          <div onClick={openNow} className="p-2 flex md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
              <path d="M20.6819 6.66667H17.6454L16.9983 2.78333C16.8679 2.19578 16.5815 1.65466 16.1696 1.21743C15.7577 0.780191 15.2356 0.463162 14.6587 0.3C14.0791 0.112709 13.4754 0.0116376 12.8667 0H9.14989C8.54118 0.0116376 7.93744 0.112709 7.35787 0.3C6.781 0.463162 6.25888 0.780191 5.84695 1.21743C5.43503 1.65466 5.14867 2.19578 5.01828 2.78333L4.37116 6.66667H1.33467C1.20399 6.66587 1.07496 6.6961 0.95811 6.75488C0.841258 6.81367 0.739885 6.89935 0.66225 7.00495C0.584615 7.11055 0.532915 7.23308 0.511361 7.36255C0.489807 7.49202 0.49901 7.62478 0.538219 7.75L3.65767 18.25C3.81648 18.7572 4.13217 19.2004 4.55887 19.5151C4.98558 19.8298 5.50106 19.9997 6.03044 20H15.9861C16.5127 19.9961 17.0244 19.8247 17.4478 19.5102C17.8712 19.1958 18.1844 18.7545 18.3423 18.25L21.4618 7.75C21.5006 7.62612 21.51 7.49484 21.4893 7.36664C21.4686 7.23844 21.4184 7.11687 21.3427 7.01163C21.2669 6.90639 21.1677 6.82039 21.053 6.7605C20.9383 6.70061 20.8112 6.66847 20.6819 6.66667ZM6.06363 6.66667L6.66097 3.05C6.72645 2.75471 6.87836 2.48583 7.09716 2.27793C7.31597 2.07003 7.59167 1.93261 7.88884 1.88333C8.29702 1.75333 8.7218 1.68167 9.14989 1.66667H12.8667C13.2998 1.68 13.7295 1.75333 14.1443 1.88333C14.4415 1.93261 14.7172 2.07003 14.936 2.27793C15.1548 2.48583 15.3067 2.75471 15.3722 3.05L15.9529 6.66667H5.99725H6.06363Z" fill="#301C51" />
            </svg>
          </div>
          <Navbar.Collapse>
            <Navbar.Link as={Link} href="/" active>
              <p className="text-center font-nunito">About Us</p>
            </Navbar.Link>
            <Navbar.Link as={Link} href="/why-menstrual-pads-or-cups">
              <p className="text-center font-nunito">Why Menstrual Pads or Cups?</p>
            </Navbar.Link>
            <Navbar.Link className="cursor-pointer" onClick={toBrowseProduct}>
              <p className="text-center font-nunito">Browse Products</p>
            </Navbar.Link>
            <Navbar.Link as={Link} href="/partnership">
              <p className="text-center font-nunito">Partnership</p>
            </Navbar.Link>
            <div className="md:hidden text-center font-nunito flex gap-1.5 m-auto justify-center py-1">
              <div >Language : </div>
              <div onClick={() => changeLang('EN')} className={locale == 'en' ? "underline" : ''}>EN</div>
              <p>/</p>
              <div onClick={() => changeLang('ID')} className={locale == 'id' ? "underline" : ''}>ID</div>
            </div>
          </Navbar.Collapse>
          <div className="hidden xl:flex items-center gap-3">
            <Dropdown placement="bottom" theme={intl} inline={true} label={locale}>
              <Dropdown.Item onClick={() => changeLang('EN')}>EN</Dropdown.Item>
              <Dropdown.Item onClick={() => changeLang('ID')}>ID</Dropdown.Item>
            </Dropdown>
            <Dropdown placement="bottom" theme={shop} inline={true} label={(
              <span className="flex items-center justify-center gap-2.5"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="currentColor">
                <path d="M19.2209 6.33333H16.329L15.7127 2.64417C15.5885 2.08599 15.3158 1.57193 14.9234 1.15655C14.5311 0.741181 14.0339 0.440004 13.4845 0.285C12.9325 0.107073 12.3575 0.0110557 11.7778 0H8.23799C7.65826 0.0110557 7.08327 0.107073 6.5313 0.285C5.9819 0.440004 5.48465 0.741181 5.09234 1.15655C4.70003 1.57193 4.4273 2.08599 4.30312 2.64417L3.68682 6.33333H0.794928C0.670464 6.33258 0.547583 6.36129 0.436295 6.41714C0.325008 6.47299 0.228462 6.55438 0.154524 6.6547C0.0805862 6.75502 0.0313475 6.87142 0.01082 6.99442C-0.00970747 7.11742 -0.000943005 7.24354 0.036399 7.3625L3.0073 17.3375C3.15855 17.8194 3.45921 18.2404 3.8656 18.5394C4.27198 18.8383 4.76292 18.9997 5.26709 19H14.7487C15.2502 18.9963 15.7375 18.8334 16.1408 18.5347C16.544 18.236 16.8422 17.8168 16.9927 17.3375L19.9636 7.3625C20.0005 7.24481 20.0095 7.1201 19.9898 6.99831C19.9701 6.87652 19.9223 6.76103 19.8502 6.66105C19.778 6.56107 19.6835 6.47937 19.5743 6.42247C19.465 6.36558 19.344 6.33505 19.2209 6.33333ZM5.29869 6.33333L5.86759 2.8975C5.92995 2.61697 6.07463 2.36154 6.28301 2.16404C6.4914 1.96653 6.75397 1.83598 7.03699 1.78917C7.42573 1.66567 7.83028 1.59758 8.23799 1.58333H11.7778C12.1902 1.596 12.5995 1.66567 12.9946 1.78917C13.2776 1.83598 13.5402 1.96653 13.7486 2.16404C13.957 2.36154 14.1016 2.61697 14.164 2.8975L14.7171 6.33333H5.23548H5.29869Z" fill="currentColor" />
              </svg>
                <p className="font-quicksand text-base font-[600]">Shop Our Products</p>
              </span>
            )}>
              {
                data.map(el => {
                  return (
                    <Dropdown.Item target="_blank" rel="noopener noreferrer" href={el.link} className="flex gap-4 w-full p-4 items-center" key={el.name}>
                      <Image src={el.img} width="41" height="41" alt="toko" className="rounded" />
                      <div className="flex-grow flex flex-col items-start">
                        <p className="font-quicksand text-sm">Shop At</p>
                        <p className="font-quicksand font-semibold text-base">{el.name}</p>
                      </div>
                    </Dropdown.Item >
                  )
                })
              }
            </Dropdown>
          </div>
        </Navbar>
      </div>
      <Modal openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
}

export default Component;