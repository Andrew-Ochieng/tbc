import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

const BlogList = ({posts}) => {

    return ( 
        <div className="list-container mx-0">
            {posts.map((post, index) => (
                <Fade bottom>
                    <div className="card-content" >
                        <div>
                            <img className="rounded-t-lg md:h-48 h-44 w-full" src={post.image} alt="" />
                        </div>
                        <h4 className="card-title">{post.title}</h4>
                        <div
                            dangerouslySetInnerHTML={{ __html: post.content.slice(0,100) }}
                            className="card-description"
                        ></div>
                        <Link to={`/articles/${post.slug}`} className="text-cyan-500 font-medium text-sm">
                            Read More
                        </Link>    
                    </div>
                </Fade>
            ))}
        </div>
            
     );
}
 
export default BlogList;