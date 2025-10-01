"use client"

export function InfiniteCarousel() {
  const images = [
    "/carousel-1.jpg",
    "/carousel-2.jpg",
    "/carousel-3.jpg",
    "/carousel-4.jpg",
    "/carousel-5.jpg",
    "/carousel-6.jpg",
    "/carousel-7.jpg",
    "/carousel-8.jpg",
    "/carousel-9.jpg",
    "/carousel-10.jpg",
  ]

  // Duplicamos el array para crear el efecto infinito
  const duplicatedImages = [...images, ...images]

  return (
    <section className="py-16 overflow-hidden">
      <div className="relative">
        <div className="flex gap-6 animate-scroll">
          {duplicatedImages.map((src, index) => (
            <div key={index} className="flex-shrink-0 w-64 h-64 relative rounded-xl overflow-hidden shadow-lg">
              <img
                src={src || "/placeholder.svg"}
                alt={`Momento ${(index % images.length) + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
