import { Link } from "react-router-dom";
import data from "../../data/blogs";

const BlogList = () => {
    let list = data.blogs
    // console.log(list)
    return ( 
        <>
            <div className="list-container">
                {list.map((blog, index) => (
                    <Link to={blog.id} key={index} className="card">
                        <div className="card-content">
                            <h4 className="card-title">{blog.title}</h4>
                            <p className="card-description">{blog.content}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </>
     );
}
 
export default BlogList;