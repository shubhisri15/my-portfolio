'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import javascript from '../../public/javascript.svg'
import figma from '../../public/figma.svg'
import nextjs from '../../public/nextjs.svg'
import html from '../../public/html5.png'
import typescript from '../../public/TS.png'
import css from '../../public/css3.png'
import react from '../../public/react.png'

const logos = [html, css, react, nextjs, figma, javascript, typescript]

export default function ScrollingTicker() {
  const [scrollWidth, setScrollWidth] = useState(0)
  const tickerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const measure = () => {
      if (tickerRef.current) {
        setScrollWidth(tickerRef.current.offsetWidth)
      }
    }

    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  return (
    <div className="w-full overflow-hidden border-y border-gray-300 py-4 relative">
      <div
        className="flex ticker-scroll"
        style={{
          width: (scrollWidth * 2) - 66,
          animation: scrollWidth
            ? `scrollLoop ${scrollWidth / 80}s linear infinite`
            : 'none',
        }}
      >
        <div ref={tickerRef} className="flex gap-16">
          {[...logos, ...logos].map((logo, i) => (
            <Image
              key={i}
              src={logo}
              alt={`logo-${i}`}
              width={50}
              className="opacity-80 hover:opacity-100 h-auto"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
