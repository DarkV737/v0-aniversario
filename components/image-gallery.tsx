"use client"

import { useState } from "react"

export function ImageGallery() {
  const [images] = useState(["/gallery-1.jpg", "/gallery-2.jpg"])

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <img
                src={src || "/placeholder.svg"}
                alt={`Memoria ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
