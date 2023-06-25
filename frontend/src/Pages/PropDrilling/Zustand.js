import { create } from 'zustand'
const Zustand = () => {

    const contents = {
        title: 'default title',
        description: 'description'
    }
    const useContentsStore = create( () => (contents)) // create store
    
    const title = useContentsStore.getState().title // getter

    // get title
    console.log(title)

    useContentsStore.setState({ title: 'title baru' }) // setter

    const newTitle = useContentsStore.getState().title
    const description = useContentsStore.getState().description

    // get title
    console.log(newTitle)
    console.log(description)


}
export default Zustand