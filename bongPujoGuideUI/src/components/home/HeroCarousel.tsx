import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import type { FeaturedPujo } from '../../types/pujo.types'

interface HeroCarouselProps {
  pujos: FeaturedPujo[]
}

const AUTO_ADVANCE_MS = 5000

export default function HeroCarousel({ pujos }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(
    () => setCurrent((c) => (c === pujos.length - 1 ? 0 : c + 1)),
    [pujos.length],
  )

  const prev = () => setCurrent((c) => (c === 0 ? pujos.length - 1 : c - 1))

  useEffect(() => {
    if (paused || pujos.length <= 1) return
    const timer = setInterval(next, AUTO_ADVANCE_MS)
    return () => clearInterval(timer)
  }, [paused, next, pujos.length])

  if (pujos.length === 0) return null

  const pujo = pujos[current]

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl bg-gray-900 shadow-lg"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <img
        src={pujo.imageUrl || 'https://placehold.co/1200x500?text=Bong+Pujo+Guide'}
        alt={pujo.name}
        className="w-full h-72 md:h-[420px] object-cover opacity-80 transition-opacity duration-300"
        onError={(e) => {
          (e.target as HTMLImageElement).src = 'https://placehold.co/1200x500?text=Bong+Pujo+Guide'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
        <span className="text-yellow-400 text-sm font-semibold uppercase tracking-widest">{pujo.areaName}</span>
        <h2 className="text-white text-2xl md:text-4xl font-bold mt-1">{pujo.name}</h2>
        <Link
          to={`/pujos/${pujo.slug}`}
          className="mt-3 inline-block bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-5 py-2 rounded-lg w-fit transition-colors"
        >
          View Details
        </Link>
      </div>

      {pujos.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors"
            aria-label="Previous"
          >
            &#8249;
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors"
            aria-label="Next"
          >
            &#8250;
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {pujos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-yellow-400' : 'bg-white/50'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
