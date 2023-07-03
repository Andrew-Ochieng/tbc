import { useParams } from "react-router-dom";

const BlogDetails = ({posts}) => {
    const { id } = useParams()

    let post = {}
    if (post) {
            let arr = posts.filter(post => post.id == id)
            post = arr[0]
    } else {
            post = {}
    }


    return ( 
        <>
            <div className="md:mx-24 mx-4 md:my-32 my-16">
                {post && (
                    <div >
                        <h2 className="content-title">{post.title}</h2>
                        <p className="normal-case font-light md:text-base text-sm">{post.body}</p>
                    </div>
                )}
            </div>

        </>
     );
}
 
export default BlogDetails;