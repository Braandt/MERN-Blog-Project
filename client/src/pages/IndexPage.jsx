import { useEffect, useState } from "react"
import Post from "../components/Lost"

const IndexPage = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/post').then(response => {
            response.json().then(posts => {
                setPosts(posts)
            })
        })
    }, [])

    return (
        <>
            {posts.length > 0 && posts.map((post, key) => (
                <Post {...post} key={key} />
            ))}
        </>
    )
}

export default IndexPage