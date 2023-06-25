import { create } from 'zustand'

const useStore = create((set) => ({
    title: 'Title',
    description: 'Description',
    setTitle: (title) => set({ title }),
    setDescription: (description) => set({ description }),
  }))

export default useStore
