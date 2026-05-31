import { useEffect } from 'react'

interface PageMeta {
  title: string
  description?: string
}

const SITE_NAME = 'Bong Pujo Guide'

export function usePageMeta({ title, description }: PageMeta) {
  useEffect(() => {
    document.title = `${title} | ${SITE_NAME}`

    let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.name = 'description'
      document.head.appendChild(metaDesc)
    }
    if (description) metaDesc.content = description

    let ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]')
    if (!ogTitle) {
      ogTitle = document.createElement('meta')
      ogTitle.setAttribute('property', 'og:title')
      document.head.appendChild(ogTitle)
    }
    ogTitle.content = `${title} | ${SITE_NAME}`

    let ogDesc = document.querySelector<HTMLMetaElement>('meta[property="og:description"]')
    if (!ogDesc) {
      ogDesc = document.createElement('meta')
      ogDesc.setAttribute('property', 'og:description')
      document.head.appendChild(ogDesc)
    }
    if (description) ogDesc.content = description
  }, [title, description])
}
