import { Link } from "react-router-dom";
import data from "../../data/blogs";
import { Fade } from "react-reveal";
// import useFetch from "../useFetch";

const BlogList = () => {
    let list = data.blogs
    
    // const { data } = useFetch('https://jsonplaceholder.typicode.com/posts')

    // console.log(data)

    return ( 
        <>
            <div className="list-container">
                <Fade bottom>
                    {list.map((blog, index) => (
                        <Link to={blog.id} key={index} className="card">
                            <div className="card-content">
                                <h4 className="card-title">{blog.title}</h4>
                                <p className="card-description">{blog.content}</p>
                            </div>
                        </Link>
                    ))}
                </Fade>
            </div>
        </>
     );
}
 
export default BlogList;