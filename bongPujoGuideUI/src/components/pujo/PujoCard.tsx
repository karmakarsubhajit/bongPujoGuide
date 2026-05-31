import { Link } from 'react-router-dom'
import type { PujoListItem } from '../../types/pujo.types'

interface PujoCardProps {
  pujo: PujoListItem
}

export default function PujoCard({ pujo }: PujoCardProps) {
  return (
    <Link
      to={`/pujos/${pujo.slug}`}
      className="block rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-shadow bg-white"
    >
      <div className="relative">
        <img
          src={pujo.imageUrl || 'https://placehold.co/400x220?text=Pujo'}
          alt={pujo.name}
          className="w-full h-44 object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://placehold.co/400x220?text=Pujo'
          }}
        />
        {pujo.featured && (
          <span className="absolute top-2 left-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-0.5 rounded-full">
            Featured
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-gray-800 text-base">{pujo.name}</h3>
        <p className="text-gray-500 text-sm mt-1">{pujo.committeeName}</p>
      </div>
    </Link>
  )
}
