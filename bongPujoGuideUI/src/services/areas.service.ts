import api from './api'
import type { AreaDetails, AreaListItem } from '../types/area.types'

export const fetchAreas = async (): Promise<AreaListItem[]> => {
  const { data } = await api.get('/api/areas')
  return data
}

export const fetchAreaBySlug = async (slug: string): Promise<AreaDetails> => {
  const { data } = await api.get(`/api/areas/${slug}`)
  return data
}
