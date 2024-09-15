"use client"
import { useEffect, useState } from "react"

export default function Component({ variants, product, setProduct }) {
  const listnya = () => {
    let keys = Object.keys(variants)
    let array = []
    keys.forEach(el => {
      array.push({ ...variants[el], name: el, status: false, },)
    })
    array[0].status = true
    return array
  }
  const [list, setList] = useState(listnya())
  const change = (i) => {
    let temp = [...list]
    let { photo, shopee, tokopedia, lazada, tiktok, price } = product.variants[temp[i].name]
    price = 'IDR ' + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    let tempProduct = { ...product, photo, shopee, tokopedia, lazada, tiktok, price }
    temp.forEach(el => el.status = false)
    temp[i].status = true
    setProduct(tempProduct)
    setList(temp)
  }
  return (
    <div>
      <p className='text-base md:text-[20px] text-darktext font-nunito font-semibold mb-3'>Variants Available</p>
      <div className='flex flex-wrap gap-3'>
        {
          list.map((el, i) => {
            if (el.status) return <div key={i} className='flex p-2 md:py-2.5 md:px-3 border rounded-full border-darkpurple cursor-pointer'><p className='text-base md:text-[20px] font-nunito font-bold text-darkpurple'>{el.name}</p></div>
            else return <div key={i} onClick={() => change(i)} className='p-2 md:py-2.5 md:px-3 border rounded-full border-gray cursor-pointer'><p className='text-base md:text-[20px] font-nunito font-bold text-gray'>{el.name}</p></div>
          })
        }
      </div>
    </div>
  )
}