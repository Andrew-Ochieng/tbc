import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

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
                <div className="md:mx-24 mx-4 md:my-16 my-8">
                    {post && (
                        <div >
                            <div className="mb-4 md:max-w-3xl">
                                <img src={post.image_link} alt="" />
                            </div>
                            <h2 className="content-title">
                                {post.title} : 
                                <span className="ml-2 font-light italic md:text-base text-sm text-cyan-600">
                                    {post.author}
                                </span>
                            </h2>
                            
                            <p className="md:text-lg text-base text-gray-700 leading-loose tracking-wide">{post.body}</p>
                            <motion.div 
                                whileHover={{x: 8}}
                                transition={{type: 'spring', stiffness: 120}}
                                className="mt-4"
                                >
                                <Link to='/blogs' className="font-base underline text-cyan-600">
                                    {post ? "Back" : 'Nothing to display here..'}
                                </Link>
                            </motion.div>
                        </div>
                    )}
                </div>
            )}
            

        </>
     );
}
 
export default BlogDetails;