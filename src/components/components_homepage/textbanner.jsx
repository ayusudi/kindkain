"use client"
export default function Component({ capslock, headline, description }) {

  return (
    <div className="flex flex-col items-center md:gap-6 gap-4 md:py-24 py-12 bg-nude" style={{ lineHeight: "120%" }}>
      <p className="text-darkpurple font-quicksand font-bold md:text-xl text-sm text-center">{capslock}</p>
      <p className="text-darktext font-quicksand font-bold md:text-[40px] text-xl w-[88%] md:w-[55%] text-center" style={{ lineHeight: '120%' }}>{headline}</p>
      <p className="text-gray font-nunito md:text-xl text-sm text-center w-[88%] md:w-3/6" style={{ letterSpacing: 0.8, lineHeight: "150%", whiteSpace: 'pre-wrap' }}>{description}</p>
    </div>
  );
}
