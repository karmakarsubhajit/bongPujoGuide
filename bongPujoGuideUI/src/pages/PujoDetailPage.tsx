import { useParams, Link } from 'react-router-dom'
import { usePujo } from '../hooks/usePujos'
import { usePageMeta } from '../hooks/usePageMeta'
import ErrorState from '../components/common/ErrorState'

export default function PujoDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const { data: pujo, isLoading, isError } = usePujo(slug!)

  usePageMeta({
    title: pujo ? pujo.name : 'Pujo Details',
    description: pujo
      ? `${pujo.name} by ${pujo.committeeName} in ${pujo.areaName}. ${pujo.description ?? ''}`
      : undefined,
  })

  if (isLoading) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-4">
        <div className="h-72 animate-pulse bg-gray-200 rounded-2xl" />
        <div className="h-8 animate-pulse bg-gray-200 rounded w-2/3" />
        <div className="h-4 animate-pulse bg-gray-200 rounded w-1/3" />
        <div className="h-24 animate-pulse bg-gray-200 rounded" />
      </div>
    )
  }

  if (isError || !pujo) {
    return <ErrorState message="Could not load pujo details." />
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <img
        src={pujo.imageUrl || 'https://placehold.co/800x400?text=Pujo'}
        alt={pujo.name}
        className="w-full h-64 md:h-80 object-cover rounded-2xl"
        onError={(e) => {
          (e.target as HTMLImageElement).src = 'https://placehold.co/800x400?text=Pujo'
        }}
      />

      <div className="mt-6 space-y-3">
        <Link
          to={`/areas/${pujo.areaSlug}`}
          className="text-red-600 text-sm font-medium hover:underline"
        >
          ← {pujo.areaName}
        </Link>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{pujo.name}</h1>
        <p className="text-gray-500 text-sm">{pujo.committeeName}</p>

        {pujo.featured && (
          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
            Featured Pujo
          </span>
        )}

        {pujo.description && (
          <p className="text-gray-700 leading-relaxed mt-4">{pujo.description}</p>
        )}

        {pujo.googleMapUrl && (
          <a
            href={pujo.googleMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Open in Google Maps
          </a>
        )}
      </div>
    </div>
  )
}
