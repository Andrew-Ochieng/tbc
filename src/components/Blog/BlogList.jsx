import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

const BlogList = ({posts, isLoading, error}) => {

    return ( 
        <>
            {error && <p>{error}</p>}
            {isLoading ? (
                <div className="md:min-h-screen h-64 flex flex-col items-center justify-center">
                    <p className="text-cyan-600 font-light md:text-5xl text-lg">Loading blog post...</p>
                </div>
            ) : (
                <div className="list-container">
                    {posts.map((blog, index) => (
                        <Fade bottom>
                            <Link to={`/blogs/${blog.id}`} className="card">
                                <div className="card-content" key={index}>
                                    <h4 className="card-title">{blog.title}</h4>
                                    <p className="card-description">{blog.body.slice(0, 100)}</p>
                                </div>
                            </Link>
                        </Fade>
                    ))}
                </div>
            )}
            
        </>
     );
}
 
export default BlogList;