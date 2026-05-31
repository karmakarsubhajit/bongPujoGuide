import { Link } from 'react-router-dom'
import type { AreaListItem } from '../../types/area.types'

interface ExploreByAreaProps {
  areas: AreaListItem[]
}

export default function ExploreByArea({ areas }: ExploreByAreaProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Explore by Area</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {areas.map((area) => (
          <Link
            key={area.slug}
            to={`/areas/${area.slug}`}
            className="flex items-center justify-center bg-red-50 hover:bg-red-100 border border-red-200 rounded-xl px-4 py-5 text-center text-red-800 font-semibold text-sm transition-colors"
          >
            {area.name}
          </Link>
        ))}
      </div>
    </section>
  )
}
