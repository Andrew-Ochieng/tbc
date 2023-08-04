import { Link, useParams } from "react-router-dom";

const BlogDetails = ({posts, isLoading, error}) => {
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
            {error && (<p>{error}</p>)}
            {isLoading ? (
                <div className="md:min-h-screen h-64 flex flex-col items-center justify-center">
                    <p className="text-cyan-600 font-light md:text-5xl text-lg">Loading blog post...</p>
                </div>
            ) : (
                <div className="md:mx-24 mx-4 md:my-32 my-16">
                    {post && (
                        <div >
                            <h2 className="content-title">{post.title}</h2>
                            <p className="normal-case font-light md:text-base text-sm">{post.body}</p>
                            <p className="pt-4">
                            <Link to='/blogs' className="font-base underline text-cyan-600">
                                {post ? "Back" : 'Nothing to display here..'}
                            </Link>
                            </p>
                        </div>
                    )}
                </div>
            )}
            

        </>
     );
}
 
export default BlogDetails;