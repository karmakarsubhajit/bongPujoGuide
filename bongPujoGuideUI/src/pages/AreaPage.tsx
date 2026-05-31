import { useParams } from 'react-router-dom'
import { useArea } from '../hooks/useAreas'
import { usePageMeta } from '../hooks/usePageMeta'
import PujoCard from '../components/pujo/PujoCard'
import PageHeader from '../components/layout/PageHeader'
import LoadingSkeleton from '../components/common/LoadingSkeleton'
import ErrorState from '../components/common/ErrorState'

export default function AreaPage() {
  const { slug } = useParams<{ slug: string }>()
  const { data: area, isLoading, isError } = useArea(slug!)

  usePageMeta({
    title: area ? `${area.name} Pujos` : 'Area',
    description: area
      ? `Explore Durga Puja pandals in ${area.name}. Find ${area.pujos.length} pujos with details and Google Maps directions.`
      : undefined,
  })

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="h-24 animate-pulse bg-gray-200 rounded-xl mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <LoadingSkeleton count={8} className="h-56" />
        </div>
      </div>
    )
  }

  if (isError || !area) {
    return <ErrorState message="Could not load area details." />
  }

  return (
    <div>
      <PageHeader
        title={area.name}
        subtitle={`${area.pujos.length} pujo${area.pujos.length !== 1 ? 's' : ''} in this area`}
      />
      <div className="max-w-6xl mx-auto px-4 py-8">
        {area.pujos.length === 0 ? (
          <p className="text-gray-500 text-center py-12">No pujos found for this area yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {area.pujos.map((pujo) => (
              <PujoCard key={pujo.slug} pujo={pujo} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
