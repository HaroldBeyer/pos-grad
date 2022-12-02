import { GameGenre } from './genre'

export interface Game {
  id: string
  name: string
  rating: number
  genre: GameGenre
}
