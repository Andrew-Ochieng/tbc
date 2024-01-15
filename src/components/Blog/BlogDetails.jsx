import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { MoonLoader } from "react-spinners";

const BlogDetails = ({posts, isLoading, error}) => {
    const { slug } = useParams()

    const post = posts.find((item) => item.slug == slug)
    console.log(post)

    if (!posts && isLoading) {
        return (
            <>
                <div className="md:min-h-screen h-64 flex flex-col items-center justify-center">
                    <MoonLoader
                        color="#00ced1"
                        loading={isLoading}
                        size={50}
                        aria-label="Loading Content..."
                        data-testid="loader"
                    />
                </div>
            </>
        )
    }
 

    return ( 
        <>
            {error && (<p>{error}</p>)}
            <div className="md:mx-24 mx-4 md:my-16 my-8">
                {post && (
                    <div >
                        <h2 className="content-title md:text-4xl text-center">
                            {post.title}                             
                        </h2>
                        <div className="mb-4 +">
                            <div class="flex items-center justify-center ">
                                <img src={post.image} alt="" />
                            </div>
                            <>
                                <p className="mt-3 font-semibold">
                                    Article Written by: 
                                    <span className="ml-2 font-normal italic md:text-base text-sm text-cyan-600">{post.author_username}</span>
                                </p>
                            </>
                            
                        </div>
                                               
                        <div
                            dangerouslySetInnerHTML={{ __html: post.content}}
                            className=""
                        ></div>
                        <motion.div 
                            whileHover={{x: 8}}
                            transition={{type: 'spring', stiffness: 120}}
                            className="mt-4"
                            >
                            <Link to='/articles' className="font-base underline text-cyan-600">
                                {post ? "Back" : 'Nothing to display here..'}
                            </Link>
                        </motion.div>
                    </div>
                )}
            </div>
        </>
     );
}
 
export default BlogDetails;