import { Link } from 'react-router-dom'
import type { AreaListItem } from '../../types/area.types'

interface AreaCardProps {
  area: AreaListItem
}

export default function AreaCard({ area }: AreaCardProps) {
  return (
    <Link
      to={`/areas/${area.slug}`}
      className="flex items-center justify-center bg-red-50 hover:bg-red-100 border border-red-200 rounded-xl px-4 py-5 text-center text-red-800 font-semibold text-sm transition-colors"
    >
      {area.name}
    </Link>
  )
}
