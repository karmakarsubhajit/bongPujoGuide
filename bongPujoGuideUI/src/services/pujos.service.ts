import api from './api'
import type { FeaturedPujo, PujoDetails } from '../types/pujo.types'

export const fetchFeaturedPujos = async (): Promise<FeaturedPujo[]> => {
  const { data } = await api.get('/api/featured-pujos')
  return data
}

export const fetchPujoBySlug = async (slug: string): Promise<PujoDetails> => {
  const { data } = await api.get(`/api/pujos/${slug}`)
  return data
}
