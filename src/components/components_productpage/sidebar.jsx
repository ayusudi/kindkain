"use client"
import { useState } from 'react';
import { useCookies } from 'react-cookie';

function ComponentOption({ name, status, clickMethod }) {
  return (
    <div className="flex items-center gap-2">
      <div onClick={() => clickMethod(name)} className='cursor-pointer border border-[#BBBBBB] bg-[#EAEAEA] rounded-full w-5 h-5 flex justify-center items-center'>
        {
          status ? (<svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path d="M3.19691 8L0 4.80309L1.45689 3.3462L3.19691 5.09138L8.28314 0L9.74002 1.45689L3.19691 8Z" fill="#707070" />
          </svg>) : (<></>)
        }
      </div>
      <p className={status ? 'font-nunito text-darktext font-bold' : 'font-nunito text-darktext'}>{name}</p>
    </div>
  )
}

export default function Component({ categoriesFilter, data, setData }) {
  const [_, setCookie] = useCookies()
  let [categories, setCategories] = useState(categoriesFilter)
  const [allSortBy, setAllSortBy] = useState(true)
  const [sortBy, setSortBy] = useState([
    { name: "Best Selling", status: false },
    { name: "Alphabetically, A-Z", status: false },
    { name: "Alphabetically, Z-A", status: false },
    { name: "Price, low to high", status: false },
    { name: "Price, high to low", status: false }
  ])
  const clickStatusCategory = async (name) => {
    if (name === "All") {
      setCategories([
        {
          name: "Feminine Care",
          status: false
        },
        {
          name: "Bath & Personal Care",
          status: false
        },
        {
          name: "Home & Living",
          status: false
        },
        {
          name: "Hobbies & Accessories",
          status: false
        },
        {
          name: "Kitchen & Dining",
          status: false
        },
        {
          name: "Travel & Grocery",
          status: false
        }
      ])
      setCookie('categories', "")
    } else {
      let temp = [...categories]
      let choosen = temp.find(el => el.name === name)
      choosen.status = !choosen.status
      let categoriesTemp = temp.filter(({ status }) => status).map(el => el.name)
      setCookie('categories', categoriesTemp.join(','))
      setCategories(temp)
    }
  }

  const clickSortBy = async (name) => {
    let temp = [...sortBy]
    let tempData = [...data]
    if (name === "All") {
      const resetSortBy = temp.map(option => ({ ...option, status: false }));
      tempData.sort((a, b) => +a.id - +b.id)
      console.log(tempData);

      setAllSortBy(true)
      setSortBy(resetSortBy)
      setData(tempData)
      return
    }

    // Toggle the selected option's status
    const toggleStatus = (name) => {
      let selectedOption = temp.find(el => el.name === name)
      if (!selectedOption.status) {
        if (name === "Alphabetically, A-Z") {
          temp[2].status = false
        } else if (name === "Alphabetically, Z-A") {
          temp[1].status = false
        } else if (name === "Price, low to high") {
          temp[4].status = false
        } else if (name === "Price, high to low") {
          temp[3].status = false
        }
      }
      selectedOption.status = !selectedOption.status
    }

    const applySort = () => {
      const activeSorts = temp.filter(option => option.status)

      if (temp[0].status) {
        tempData = tempData.filter(a => a.bestselling)
      }


      // Apply sorting based on active options
      activeSorts.forEach(option => {
        switch (option.name) {
          case "Alphabetically, A-Z":
            tempData.sort((a, b) => a.title.localeCompare(b.title, "fr", { ignorePunctuation: true }))
            break
          case "Alphabetically, Z-A":
            tempData.sort((a, b) => b.title.localeCompare(a.title, "fr", { ignorePunctuation: true }))
            break
          case "Price, low to high":
            tempData.sort((a, b) => a.startPrice - b.startPrice)
            break
          case "Price, high to low":
            tempData.sort((a, b) => b.startPrice - a.startPrice)
            break
          default:
            break
        }
      })
      return activeSorts
    }

    toggleStatus(name)
    let activeSorts = applySort()
    setData(tempData)
    setSortBy(temp)

    if (activeSorts.length) setAllSortBy(false)
    else setAllSortBy(true)
  }

  return (
    <div className='w-[300px] hidden md:flex md:flex-col'>
      <div className='flex flex-col md:gap-8 px-5 border-r-[1px] border-[#CCC2BA] my-3'>
        <div >
          <div className='flex justify-between items-center mb-3'>
            <p className='font-quicksand font-semibold'>Category</p>
            <svg className='mt-1' xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
              <path d="M1 7L7 1L13 7" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className='flex flex-col gap-3'>
            <ComponentOption clickMethod={clickStatusCategory} name={"All"} status={!categories.find(({ status }) => status === true)} />
            {categories.map((el, i) => <ComponentOption clickMethod={clickStatusCategory} key={i} name={el.name} status={el.status} />)}
          </div>
        </div>
        <div>
          <div className='flex justify-between items-center mb-3'>
            <p className='font-quicksand font-semibold'>Sort By</p>
            <svg className='mt-1' xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
              <path d="M1 7L7 1L13 7" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className='flex flex-col gap-3 py-3'>
            <ComponentOption clickMethod={clickSortBy} name={"All"} status={allSortBy} />
            {sortBy.map((el, i) => <ComponentOption clickMethod={clickSortBy} key={i} name={el.name} status={el.status} />)}
          </div>

        </div>
      </div>
    </div>
  )
}