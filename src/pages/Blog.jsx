import BlogList from "../components/Blog/BlogList";
import { MoonLoader } from "react-spinners";

export default function Blog({posts, isLoading, error}) {
  return (
    <div>
      {error && <p>{error}</p>}
      {isLoading ? (
        <div className="min-h-screen flex flex-col items-center justify-center">
          <MoonLoader
            color="#00ced1"
            loading={isLoading}
            size={50}
            aria-label="Loading Content..."
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="my-8 md:mx-24 mx-4 ">
          <BlogList posts={posts} />
        </div>
      )}
    </div>
  )
}
