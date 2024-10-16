"use client"
export default function Component() {
  return (
    <div className="p-6 pt-0 md:p-16 h-[350px] md:h-[525px] flex justify-center items-center flex-col gap-5 md:gap-8" style={{ backgroundImage: "url(/coverpresent.png)", backgroundSize: "cover" }}>
      <p style={{ lineHeight: "120%" }} className="w-[98%] text-darktext text-center text-2xl md:text-4xl font-semibold font-quicksand">In Need Of Sustainable Giftings
        <br />Or Products For An Event / Campaign?</p>
      <button className="font-quicksand bg-darkpurple text-yellow text-md md:text-lg rounded-full px-4 py-2.5">
        Reach Out To Us
      </button>
    </div>
  )
}