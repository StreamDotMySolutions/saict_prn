import { create } from 'zustand'

const profile = {
    message: null,

    newpassword: null,
    newpassword_confirmation: null,
    error_newpassword: null,

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