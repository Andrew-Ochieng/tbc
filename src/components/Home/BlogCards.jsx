import { Slide } from "react-reveal";
import { Link } from "react-router-dom";

const BlogCards = ({posts}) => {
    return ( 
        <>
            <div className="grid md:grid-cols-3 md:gap-16 gap-8">
                {posts.slice(0,3).map((blog, index) => (
                    <Slide bottom>
                        <Link to={`/blogs/${blog.id}`} key={index} className="card">
                            <div className="card-content">
                                <h4 className="card-title">{blog.title}</h4>
                                <p className="card-description">{blog.body.slice(0, 100)}</p>
                            </div>
                        </Link>
                    </Slide>
                ))}
            </div>
        </>
     );
}
 
export default BlogCards;