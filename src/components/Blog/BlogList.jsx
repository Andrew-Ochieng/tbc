import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
import { FaLongArrowAltRight } from "react-icons/fa";

const BlogList = ({posts}) => {

    return ( 
        <div className="list-container mx-0">
            {posts.map((post, index) => (
                <Fade bottom>
                    <div className="card-content" key={index} >
                        <div>
                            <img className="md:h-48 h-44 w-full" src={post.image} alt="" />
                        </div>
                        <h4 className="card-title">{post.title}</h4>
                        <div
                            dangerouslySetInnerHTML={{ __html: post.content.slice(0,100) }}
                            className="card-description"
                        ></div>
                        <Link to={`/articles/${post.slug}`} className="uppercase mt-2 font-bold text-cyan-500 text-sm flex items-center hover:translate-x-2 duration-300">
                            Read More  <FaLongArrowAltRight className="ml-2  text-lg"/>
                        </Link>    
                    </div>
                </Fade>
            ))}
        </div>
            
     );
}
 
export default BlogList;