import { Calendar, User, ArrowRight } from 'lucide-react';
import headerImage from '../assets/scriptures.jpg';
import PageHeader from '../components/PageHeader';

export default function Blog() {
  const posts = [
    {
      title: "The Importance of Expository Preaching",
      author: "Pastor Simon Ochieng",
      date: "December 8, 2024",
      excerpt: "Why faithful, verse-by-verse exposition of Scripture is essential for the health and growth of the local church.",
      readTime: "5 min read"
    },
    {
      title: "Reformed Theology in African Context",
      author: "Pastor Simon Ochieng",
      date: "November 28, 2024",
      excerpt: "How the truths of Reformed theology speak powerfully to the African church and address cultural challenges.",
      readTime: "7 min read"
    },
    {
      title: "The Local Church and Community Mission",
      author: "Pastor Simon Ochieng",
      date: "November 15, 2024",
      excerpt: "Understanding our responsibility to serve and minister to our neighbors in Busia.",
      readTime: "6 min read"
    }
  ];

  return (
    <div>
      <PageHeader
        title="Blog"
        subtitle="Articles, reflections, and updates from our church family"
        bgImage={headerImage}
        overlayColor="rgba(0, 0, 0, 0.6)"
        gradientFrom="from-sky-900"
        gradientTo="to-sky-800"
        height="lg"
        textColor="text-white"
        subtitleColor="text-sky-100"
      />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {posts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 hover:text-teal-600 transition-colors">
                  <a href="#" className="block">
                    {post.title}
                  </a>
                </h2>

                <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                  <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                    {post.readTime}
                  </span>
                </div>

                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
