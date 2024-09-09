"use client"
import { useState } from "react"

export default function Component() {
  const [list, setList] = useState([
    { name: "Pantyliner 18cm", img: "", status: true },
    { name: "Mini 21~23cm", img: "", status: false },
    { name: "Day 27~28cm", img: "", status: false },
    { name: "Night 35cm", img: "", status: false },
    { name: "Maxi 42cm", img: "", status: false },
  ])

  const change = (i) => {
    let temp = [...list]
    temp.forEach(el => el.status = false)
    temp[i].status = true
    setList(temp)
  }
  return (
    <div>
      <p className='text-base md:text-[20px] text-darktext font-nunito font-semibold mb-3'>Variants Available</p>
      <div className='flex flex-wrap md:w-5/6 gap-3'>
        {
          list.map((el, i) => {
            if (el.status) return <div key={i} className='p-2 md:py-2.5 md:px-3 border rounded-full border-darkpurple cursor-pointer'><p className='text-base md:text-[20px] font-nunito font-bold text-darkpurple'>{el.name}</p></div>
            else return <div key={i} onClick={() => change(i)} className='p-2 md:py-2.5 md:px-3 border rounded-full border-gray cursor-pointer'><p className='text-base md:text-[20px] font-nunito font-bold text-gray'>{el.name}</p></div>
          })
        }
      </div>
    </div>
  )
}