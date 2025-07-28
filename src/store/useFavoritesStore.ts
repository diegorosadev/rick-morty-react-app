import { create } from 'zustand'

type Character = {
  id: number
  name: string
  image: string
}

type Store = {
  favorites: Character[]
  addFavorite: (char: Character) => void
  removeFavorite: (id: number) => void
}

export const useFavoritesStore = create<Store>((set) => ({
  favorites: [],
  addFavorite: (char) => set((state) => ({
    favorites: [...state.favorites, char]
  })),
  removeFavorite: (id) => set((state) => ({
    favorites: state.favorites.filter((char) => char.id !== id)
  }))
}))
