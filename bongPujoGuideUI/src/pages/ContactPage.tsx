import { usePageMeta } from '../hooks/usePageMeta'
import PageHeader from '../components/layout/PageHeader'

export default function ContactPage() {
  usePageMeta({
    title: 'Contact',
    description: 'Get in touch with Bong Pujo Guide for feedback, suggestions, or to list your pujo.',
  })

  return (
    <div>
      <PageHeader title="Contact" subtitle="Get in touch with us" />
      <div className="max-w-3xl mx-auto px-4 py-8 text-gray-700 space-y-4 leading-relaxed">
        <p>
          Have feedback, suggestions, or want to list your pujo on Bong Pujo Guide? We'd love to
          hear from you.
        </p>
        <p>
          Reach out to us at{' '}
          <a href="mailto:hello@bongpujoguide.com" className="text-red-600 hover:underline">
            hello@bongpujoguide.com
          </a>
        </p>
      </div>
    </div>
  )
}
