import { useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom"
import TextEditor from "./TextEditor";


const CreateBlogs = () => {
    const navigate = useNavigate()
    
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const [image_link, setImageLink] = useState('')
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
                navigate('/admin/blogs')
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
                        <div className="label">
                            <input 
                                    className="input border border-cyan-500" 
                                    type="text" 
                                    name="name" 
                                    value={author}
                                    onChange={(e) => setAuthor(e.target.value)}
                                    placeholder="Write author..." 
                                    required 
                                />
                        </div>
                        <div className="label">
                            <input 
                                    className="input border border-cyan-500" 
                                    type="text" 
                                    name="image-url" 
                                    value={image_link}
                                    onChange={(e) => setImageLink(e.target.value)}
                                    placeholder="Write image url..." 
                                    required 
                                />
                        </div>
                        <div className="label">
                            <TextEditor body={body} setBody={setBody} />
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
 
export default CreateBlogs;