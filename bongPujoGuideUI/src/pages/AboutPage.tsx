import { usePageMeta } from '../hooks/usePageMeta'
import PageHeader from '../components/layout/PageHeader'

export default function AboutPage() {
  usePageMeta({
    title: 'About',
    description: 'Learn about Bong Pujo Guide — a platform for discovering Durga Puja pandals across Kolkata.',
  })

  return (
    <div>
      <PageHeader title="About" subtitle="What is Bong Pujo Guide?" />
      <div className="max-w-3xl mx-auto px-4 py-8 text-gray-700 space-y-4 leading-relaxed">
        <p>
          Bong Pujo Guide is a platform to help you discover Durga Puja pandals across Kolkata and
          nearby areas. Whether you're a local or visiting the city during Puja season, we make it
          easy to find and explore the best pandals near you.
        </p>
        <p>
          Browse by area, explore featured pujos, read about each celebration, and get directions
          directly via Google Maps — all in one place.
        </p>
        <p>
          Our goal is to keep Puja discovery simple, fast, and mobile-friendly.
        </p>
      </div>
    </div>
  )
}
