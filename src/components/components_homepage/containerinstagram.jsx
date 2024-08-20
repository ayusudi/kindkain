"use client"
export default function Component() {
  return (
    <div className="hidden p-6 md:px-14 md:py-16 bg-nude md:flex flex-col gap-4">
      <div className="m-auto">
        <p style={{ lineHeight: "120%" }} className='md:text-4xl text-center text-2xl font-quicksand font-bold text-darktext mb-1.5'>Keep Updated With Us</p>
        <p className=' m-auto text-center text-gray md:font-2xl font-lg font-nunito md:mb-8'>Here our latest Instagram updates,<br />make sure you are stay informed and in the loop</p>
      </div>
      <div className="flex justify-between items-between ">
        <iframe className="rounded" width="418" height="640" src="https://www.instagram.com/p/C7n6JGgSODo/embed/"></iframe>
        <iframe className="rounded" width="418" height="640" src="https://www.instagram.com/p/C0F2G6Myn9B/embed/"></iframe>
        <iframe className="rounded" width="418" height="640" src="https://www.instagram.com/p/C7n6JGgSODo/embed/"></iframe>
      </div>
    </div>

  )
}