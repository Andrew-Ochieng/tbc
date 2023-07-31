const AddBlogs = () => {

    const handleAddBlog = (e) => {
        e.preventDefault()
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
                                placeholder="Enter name..." 
                                // required 
                            />
                        </div>
                        <div className="label">
                            <textarea 
                                className="border border-cyan-500 py-2 px-3 rounded-lg w-full outline-none" 
                                name="message" 
                                placeholder="Enter Message..." 
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