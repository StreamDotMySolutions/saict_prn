import { create } from 'zustand'

const profile = {
    name: null,
    email:null,
    created_at: null
}
const useProfileStore = create( () => (profile)) // create store

// const useProfileStore = create((set) => ({
//     name: 'original',
//     setName: (name) => set({ name })
// }))



export default useProfileStore