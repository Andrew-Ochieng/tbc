import BlogList from "../components/Blog/BlogList";

export default function Blog({posts}) {
  return (
    <div>
      <BlogList posts={posts} />
    </div>
  )
}
