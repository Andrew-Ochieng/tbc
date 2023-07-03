import { Link } from "react-router-dom";
// import data from "../../data/blogs";
import { Fade } from "react-reveal";

const BlogList = ({posts}) => {

    return ( 
        <>
            <div className="list-container">
                <Fade bottom>
                    {posts.map((blog, index) => (
                        <Link to={blog.id} key={index} className="card">
                            <div className="card-content">
                                <h4 className="card-title">{blog.title}</h4>
                                <p className="card-description">{blog.body.slice(0, 100)}</p>
                            </div>
                        </Link>
                    ))}
                </Fade>
            </div>
        </>
     );
}
 
export default BlogList;