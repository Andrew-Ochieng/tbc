import { useState } from "react"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { toast, ToastContainer } from "react-toastify"
import { useNavigate } from "react-router-dom"

const AddBlogs = () => {
    const navigate = useNavigate()
    
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const postsCollectionRef = collection(db, "blogs")
    
    const handleAddBlog = async (e) => {
        e.preventDefault()

        if (title !== "" && author !=="" && body !== "") {
            await addDoc(postsCollectionRef, {
                title,
                author,
                body
            })
    
            toast.success('New blog created succesfully')
            setTimeout(() => {
                navigate('/blogs')
            }, 3000);
        } else {
            toast.error('Fill in the form & try again')
        }
    }
    
    return ( 
        <>
            <div className="flex flex-col items-center md:m-20 my-10 mx-4">
                <h3 className="section-title">Create New Blog...</h3>
                <ToastContainer 
                    position = 'top-center'
                    autoClose = {2000}
                    hideProgressBar = {true}
                    closeOnClick = {true}
                    pauseOnHover = {true}
                    draggable = {true}
                    progress = {undefined}
                    theme= 'colored'
                />
                <div >
                    <form action="">
                        <div className="label">
                            <input 
                                className="input border border-cyan-500" 
                                type="text" 
                                name="name" 
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Write title..." 
                                required 
                            />
                        </div>
                        <input 
                                className="input border border-cyan-500" 
                                type="text" 
                                name="name" 
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                placeholder="Write autor..." 
                                required 
                            />
                        <div className="label">
                            <textarea 
                                className="border border-cyan-500 py-2 px-3 rounded-lg w-full outline-none" 
                                name="message" 
                                value={body}
                                onChange={(e) => setBody(e.target.value)}
                                placeholder="Write Content..." 
                                cols="30" 
                                rows="6"
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