import React from 'react'

interface MarqueeProps {
  text: string;
}

const Marquee = ({ text = "You will never walk alone" }: MarqueeProps) => {
  return (
    <div className="bg-black py-2 overflow-hidden whitespace-nowrap h-[80px] flex items-center justify-center gap-6">
      <div className="flex animate-marquee text-[28px] font-clash">
        <div className="flex shrink-0 items-center gap-10">
          <span className="text-white">{text}</span>
          <span className="text-white">•</span>
          <span className="text-white">{text}</span>
          <span className="text-white">•</span>
          <span className="text-white">{text}</span>
          <span className="text-white">•</span>
          <span className="text-white">{text}</span>
          <span className="text-white">•</span>
        </div>
        <div className="flex shrink-0 items-center gap-10">
          <span className="text-white">{text}</span>
          <span className="text-white">•</span>
          <span className="text-white">{text}</span>
          <span className="text-white">•</span>
          <span className="text-white">{text}</span>
          <span className="text-white">•</span>
          <span className="text-white">{text}</span>
          <span className="text-white">•</span>
        </div>
      </div>
    </div>
  )
}

export default Marquee