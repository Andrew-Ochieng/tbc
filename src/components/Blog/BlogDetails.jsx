// import { useRef } from "react";

// const BlogDetails = () => {
//     const [posts, setPosts] = useState([])
//     const { id } = useRef()

//     async function getBlogs () {
//         try {
//         const res = await axios.get('https://jsonplaceholder.typicode.com/posts' + id)
//         const items = res.data
//         setPosts(items)
//         } catch (error) {
//         console.log(error)
//         }
//     }

//     useEffect(() => {
//         getBlogs()
//     }, [])

//     return ( 
//         <>
//             hello
//         </>
//      );
// }
 
// export default BlogDetails;