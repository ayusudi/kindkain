"use client"
import { useState } from 'react';
import { useCookies } from 'react-cookie';

function ComponentOption({ name, status, clickMethod }) {
  return (
    <div className="flex items-center gap-2">
      <div onClick={() => clickMethod(name)} className={'cursor-pointer  rounded w-[22px] h-[22px] flex justify-center items-center' + (status ? ' bg-[#301C51]' : ' border border-[#BBBBBB] bg-[#EAEAEA]')}>
        {
          status ? (<svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path d="M3.19691 8L0 4.80309L1.45689 3.3462L3.19691 5.09138L8.28314 0L9.74002 1.45689L3.19691 8Z" fill="#FBE146" />
          </svg>) : (<></>)
        }
      </div>
      <p className={status ? 'font-nunito text-darktext font-bold' : 'font-nunito text-darktext'}>{name}</p>
    </div>
  )
}

function ComponentSort({ name, status, clickMethod }) {
  return (
    <div className="flex items-center gap-2">
      <div onClick={() => clickMethod(name)} className={'cursor-pointer rounded-full w-[22px] h-[22px] flex justify-center items-center' + (status ? ' bg-[#301C51]' : ' border border-[#BBBBBB] bg-[#EAEAEA]')}>
        {
          status ? (<svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path d="M3.19691 8L0 4.80309L1.45689 3.3462L3.19691 5.09138L8.28314 0L9.74002 1.45689L3.19691 8Z" fill="#FBE146" />
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
      selectedOption.status = !selectedOption.status
      temp.forEach(el => {
        if (el.name !== name) {
          el.status = false
        }
      })
      return temp
    }

    const applySort = (temp) => {
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

    let dataFilter = toggleStatus(name)
    let activeSorts = applySort(dataFilter)
    setData(tempData)
    setSortBy(temp)

    if (activeSorts.length) setAllSortBy(false)
    else setAllSortBy(true)
  }

  const [categoryBoleean, setCategoryBoleean] = useState(true)
  const [sortByBoleean, setSortByBoleean] = useState(true)

  return (
    <div className='w-[300px] md:flex md:flex-col'>
      <div className='flex flex-col md:gap-8 px-5 border-r-[1px] border-[#CCC2BA] my-3 min-h-[75vh]'>
        <div >
          <div className='flex justify-between items-center'>
            <p className='font-quicksand font-semibold text-[20px]'>Category</p>
            {
              categoryBoleean ? <svg onClick={() => setCategoryBoleean(false)} className='mt-1 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                <path d="M1 7L7 1L13 7" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
              </svg> : <svg onClick={() => setCategoryBoleean(true)} className='mt-1 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                <g transform="rotate(180, 7, 4)">
                  <path d="M1 7L7 1L13 7" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
            }
          </div>
          {
            categoryBoleean ? (<>
              <div>
                {
                  categories.filter(el => el.status).length ? (
                    <div className='flex flex-wrap gap-2 pt-2 pb-4'>
                      <p className='w-full font-quicksand font-semibold text-gray text-[16px]'>Selected Category</p>
                      {
                        categories.filter(el => el.status).map(el => {
                          return (
                            <div key={el.name} className='cursor-pointer bg-[#EAEAEA] py-1 px-2.5 border border-[#BBBBBB] rounded-2xl flex items-center gap-2 justify-center'>
                              <p className='font-nunito text-[16px] text-gray'>{el.name}</p>
                              <svg onClick={() => clickStatusCategory(el.name)} xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                <path d="M10.5 10.5L0.5 0.5M10.5 0.5L0.5 10.5" stroke="#707070" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                            </div>
                          )
                        })
                      }
                      <p onClick={() => clickStatusCategory("All")} className='cursor-pointer w-full font-quicksand text-[#ED4756] text-[14px] underline font-semibold'>Delete all filter</p>
                    </div>
                  ) : <div className='py-2'></div>
                }

              </div>
              <div className='flex flex-col gap-3'>
                <ComponentOption clickMethod={clickStatusCategory} name={"All"} status={!categories.find(({ status }) => status === true)} />
                {categories.map((el, i) => <ComponentOption clickMethod={clickStatusCategory} key={i} name={el.name} status={el.status} />)}
              </div>
            </>) : <></>
          }
        </div>
        <div>
          <div className='flex justify-between items-center mb-3'>
            <p className='font-quicksand font-semibold text-[20px]'>Sort By</p>
            {
              sortByBoleean ? <svg onClick={() => setSortByBoleean(false)} className='mt-1 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                <path d="M1 7L7 1L13 7" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
              </svg> : <svg onClick={() => setSortByBoleean(true)} className='mt-1 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                <g transform="rotate(180, 7, 4)">
                  <path d="M1 7L7 1L13 7" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
            }
          </div>
          {
            sortByBoleean ? <div className='flex flex-col gap-3 py-3'>
              <ComponentSort clickMethod={clickSortBy} name={"All"} status={allSortBy} />
              {sortBy.map((el, i) => <ComponentSort clickMethod={clickSortBy} key={i} name={el.name} status={el.status} />)}
            </div> : <></>
          }

        </div>
      </div>
    </div>
  )
}