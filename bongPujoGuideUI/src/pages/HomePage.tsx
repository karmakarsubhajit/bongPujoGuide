import { useAreas } from '../hooks/useAreas'
import { useFeaturedPujos } from '../hooks/usePujos'
import { usePageMeta } from '../hooks/usePageMeta'
import HeroCarousel from '../components/home/HeroCarousel'
import ExploreByArea from '../components/home/ExploreByArea'
import LoadingSkeleton from '../components/common/LoadingSkeleton'
import ErrorState from '../components/common/ErrorState'

export default function HomePage() {
  usePageMeta({
    title: 'Discover Durga Puja Pandals',
    description: 'Explore Durga Puja pandals across Kolkata and nearby areas. Browse by area, find featured pujos, and get Google Maps directions.',
  })

  const { data: featuredPujos, isLoading: loadingFeatured, isError: errorFeatured } = useFeaturedPujos()
  const { data: areas, isLoading: loadingAreas, isError: errorAreas } = useAreas()

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
      <section>
        {loadingFeatured && (
          <div className="w-full h-72 md:h-[420px] animate-pulse bg-gray-200 rounded-2xl" />
        )}
        {errorFeatured && <ErrorState message="Could not load featured pujos." />}
        {featuredPujos && <HeroCarousel pujos={featuredPujos} />}
      </section>

      <section>
        {loadingAreas && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            <LoadingSkeleton count={5} className="h-16" />
          </div>
        )}
        {errorAreas && <ErrorState message="Could not load areas." />}
        {areas && <ExploreByArea areas={areas} />}
      </section>
    </div>
  )
}
