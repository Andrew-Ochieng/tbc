import BlogList from "../components/Blog/BlogList";

export default function Blog({posts, isLoading}) {
  return (
    <div>
      {isLoading ? (
        <div className="min-h-screen flex flex-col items-center justify-center">
          <p className="text-cyan-600 font-light md:text-5xl text-lg">Loading blog posts...</p>
        </div>
      ) : (
        <div className="my-8">
          <BlogList posts={posts} />
        </div>
      )}
    </div>
  )
}
