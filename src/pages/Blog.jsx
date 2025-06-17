import { Calendar, User, ArrowRight } from 'lucide-react';
import headerImage from '../assets/scriptures.jpg';
import PageHeader from '../components/PageHeader';
import { recentArticles } from '../data/articlesData';
import { Link } from 'react-router-dom';

export default function Blog() {


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
            {recentArticles.map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-lg md:p-8 p-4 hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay="200">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 hover:text-sky-600 transition-colors">
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

                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-sky-600 hover:text-sky-700 font-semibold transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
