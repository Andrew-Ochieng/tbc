import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

const BlogList = ({posts}) => {

    return ( 
        <>
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
        </>
     );
}
 
export default BlogList;