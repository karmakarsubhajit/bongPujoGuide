import { useQuery } from '@tanstack/react-query'
import { fetchAreas, fetchAreaBySlug } from '../services/areas.service'

export const useAreas = () =>
  useQuery({ queryKey: ['areas'], queryFn: fetchAreas })

export const useArea = (slug: string) =>
  useQuery({ queryKey: ['area', slug], queryFn: () => fetchAreaBySlug(slug), enabled: !!slug })
