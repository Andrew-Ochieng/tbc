import { useState } from "react"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"

const AddBlogs = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const postsCollectionRef = collection(db, "blogs")
    
    const handleAddBlog = async (e) => {
        e.preventDefault()

        await addDoc(postsCollectionRef, {
            title,
            body
        })

        console.log('Blog succesfully added!')
    }
    
    return ( 
        <>
            <div className="flex flex-col items-center md:m-20 my-10 mx-4">
                <h3 className="section-title">Add New Blogs...</h3>
                <div className="md:mb-8">
                    <form action="">
                        <div className="label">
                            <input 
                                className="input border border-cyan-500" 
                                type="text" 
                                name="name" 
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Write title..." 
                                // required 
                            />
                        </div>
                        <div className="label">
                            <textarea 
                                className="border border-cyan-500 py-2 px-3 rounded-lg w-full outline-none" 
                                name="message" 
                                value={body}
                                onChange={(e) => setBody(e.target.value)}
                                placeholder="Write Content..." 
                                cols="30" 
                                rows="4"
                            >
                            </textarea>
                        </div>
                        <button 
                            className="btn w-full mt-4"
                            onClick={handleAddBlog}
                            >
                            Add Blog
                        </button>
                    </form>
                </div>
            </div>
        </>
     );
}
 
export default AddBlogs;