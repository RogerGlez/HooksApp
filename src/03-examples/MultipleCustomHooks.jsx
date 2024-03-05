import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {

    useFetch("https://jsonplaceholder.typicode.com/users/2");

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />
        </>
    )
}