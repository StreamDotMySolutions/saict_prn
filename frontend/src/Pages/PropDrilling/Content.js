import useStore from './store'
const Content = () => {
    const title = useStore((state) => state.title);
    const description = useStore((state) => state.description);

    return(
        <>
            <h3>{ title }</h3>
            <p>{ description }</p>
        </>
    )
}

export default Content