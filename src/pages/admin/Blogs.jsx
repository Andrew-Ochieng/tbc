// import { deleteDoc, doc } from "firebase/firestore"
// import { useParams } from "react-router-dom";
// import { db } from "../../firebase/firebaseConfig"

const Blogs = ({posts}) => {
    // const { id } = useParams()

    const deletePost = () => {
        // const postDoc = doc(db, "posts", id);
        // await deleteDoc(postDoc);
        console.log('Blog deleted succesfully')
    };

    return ( 
        <>
            <table className="">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Author</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post) => (
                        <tr>
                            <td>{post.id}</td>
                            <td>{post.author}</td>
                            <td>{post.title}</td>
                            <td>{post.body.slice(0,50)}...</td>
                            <td>
                                <img className="w-12 h-12" src={post.image_link} alt="" />
                            </td>
                            <td>
                                <button className="btn btn-sm" onClick={deletePost(post.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
     );
}
 
export default Blogs;