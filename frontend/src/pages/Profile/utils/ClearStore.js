import useProfileStore from './Store'

const clearStore = () => {
    useProfileStore.setState({ error_name: null }) 
    useProfileStore.setState({ error_email: null }) 
    useProfileStore.setState({ error_newpassword: null }) 
}
export default clearStore