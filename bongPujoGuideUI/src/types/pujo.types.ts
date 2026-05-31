export interface PujoListItem {
  id: number
  name: string
  slug: string
  committeeName: string
  imageUrl: string
  featured: boolean
}

export interface PujoDetails {
  id: number
  name: string
  slug: string
  committeeName: string
  areaName: string
  areaSlug: string
  description: string
  imageUrl: string
  googleMapUrl: string
  featured: boolean
}

export interface FeaturedPujo {
  id: number
  name: string
  slug: string
  imageUrl: string
  areaName: string
}
