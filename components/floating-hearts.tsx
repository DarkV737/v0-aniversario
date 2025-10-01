"use client"

import { useEffect, useState } from "react"

interface Heart {
  id: number
  left: number
  delay: number
  duration: number
  size: number
}

export function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([])

  useEffect(() => {
    const generatedHearts = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 15 + Math.random() * 10,
      size: 30 + Math.random() * 25, // Tamaño aumentado (30-55px)
    }))
    setHearts(generatedHearts)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[5]">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float-up"
          style={{
            left: `${heart.left}%`,
            bottom: "-50px",
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            width: `${heart.size}px`,
            height: `${heart.size}px`,
            opacity: 0.85, // Opacidad aumentada
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FFE66D"
            strokeWidth="3"
            className="w-full h-full"
            style={{
              filter: "drop-shadow(0 0 8px rgba(255, 230, 109, 0.6))", // Glow amarillo más fuerte
            }}
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </div>
      ))}
    </div>
  )
}
