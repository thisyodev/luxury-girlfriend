
import React from 'react'

const phrases = new Array(100).fill("I love you so much 💖")

export default function FloatingText() {
  return (
    <div className="absolute inset-0 flex flex-wrap justify-center items-center animate-pulse text-white font-bold text-xl gap-4">
      {phrases.map((text, index) => (
        <div key={index} className="opacity-50 hover:opacity-100 transition">
          {text}
        </div>
      ))}
    </div>
  )
}
