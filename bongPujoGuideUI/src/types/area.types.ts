import type { PujoListItem } from './pujo.types'

export interface AreaListItem {
  id: number
  name: string
  slug: string
}

export interface AreaDetails {
  id: number
  name: string
  slug: string
  pujos: PujoListItem[]
}
