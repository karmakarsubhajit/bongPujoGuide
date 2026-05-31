import { useQuery } from '@tanstack/react-query'
import { fetchFeaturedPujos, fetchPujoBySlug } from '../services/pujos.service'

export const useFeaturedPujos = () =>
  useQuery({ queryKey: ['featuredPujos'], queryFn: fetchFeaturedPujos })

export const usePujo = (slug: string) =>
  useQuery({ queryKey: ['pujo', slug], queryFn: () => fetchPujoBySlug(slug), enabled: !!slug })
