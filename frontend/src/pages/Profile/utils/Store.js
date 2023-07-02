import { create } from 'zustand'

const profile = {
    password: null,
    password_confirmation: null,
    error_password: null,

    name: null,
    error_name: null,
    
    email:null,
    error_email: null,
    
    avatar: null,
    error_avatar:null,

    created_at: null,

}
const useProfileStore = create( () => (profile)) // create store
export default useProfileStore