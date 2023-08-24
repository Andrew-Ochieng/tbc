import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

const BlogList = ({posts}) => {

    return ( 
        <>
            
            <div className="list-container mx-0">
                {posts.map((blog, index) => (
                    <Fade bottom>
                        <Link 
                            to={`/articles/${blog.id}`} 
                            key={index} 
                            className="card"
                        >
                            <div className="card-content" >
                                <div>
                                    <img className="rounded-t-lg md:h-48 h-44 w-full" src={blog.image_link} alt="" />
                                </div>
                                <h4 className="card-title">{blog.title}</h4>
                                <p className="card-description">{blog.body.slice(0, 100)}...</p>
                            </div>
                        </Link>
                    </Fade>
                ))}
            </div>
            
        </>
     );
}
 
export default BlogList;