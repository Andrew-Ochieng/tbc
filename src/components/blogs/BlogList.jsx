import React from 'react'
import { Bookmark, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import headerImage from '../../assets/scriptures.jpg';
import { recentArticles } from '../../data/articlesData';


export default function BlogList() {
  return (
    <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-aos="fade-down" data-aos-delay="000">
              From Our Blog
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-aos="fade-down" data-aos-delay="100">
              Recent articles on theology, church life, and Christian living
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recentArticles.map((article) => (
              <div 
                key={article.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300" 
                data-aos="fade-up" 
                data-aos-delay={article.id * 100}
              >
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={article.image?.blogImage || headerImage} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-sky-600">{article.category}</span>
                    <span className="text-xs text-gray-500 flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{article.date}</span>
                    <Link 
                      to={`/blog/${article.id}`}
                      className="text-sky-600 hover:text-sky-700 text-sm font-medium flex items-center"
                    >
                      Read more
                      <Bookmark className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-block bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>
  )
}
