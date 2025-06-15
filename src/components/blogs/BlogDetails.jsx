import React from 'react';
import headerImage from '../../assets/scriptures.jpg';
import PageHeader from '../PageHeader';
import { recentArticles } from '../../data/homeData';
import { useParams } from 'react-router-dom';
import { Bookmark, Clock, User, CalendarDays, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BlogDetails() {
  const { id } = useParams();
  const article = recentArticles.find((article) => article.id === parseInt(id));

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Article not found</h1>
          <Link 
            to="/blog" 
            className="mt-4 inline-flex items-center text-sky-600 hover:text-sky-800"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <PageHeader
        title={article.title}
        subtitle={article.category}
        bgImage={article.image?.blogImage || headerImage}
        overlayColor="rgba(0, 0, 0, 0.6)"
        gradientFrom="from-sky-900"
        gradientTo="to-sky-800"
        height="lg"
        textColor="text-white"
        subtitleColor="text-sky-100"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="flex items-center text-gray-600">
              <User className="w-4 h-4 mr-2" />
              <span className="text-sm">{article.author}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <CalendarDays className="w-4 h-4 mr-2" />
              <span className="text-sm">{article.date}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="w-4 h-4 mr-2" />
              <span className="text-sm">{article.readTime}</span>
            </div>
          </div>
          <div className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm font-medium">
            {article.category}
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-8 font-medium">{article.excerpt}</p>
          
          <div className="mb-12">
            <img 
              src={article.image?.blogImage || headerImage} 
              alt={article.title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Article content would go here */}
          <div className="space-y-6 text-gray-700">
            <p>
              This is where the full article content would be displayed. In a real implementation,
              you would either store the full content in your data or fetch it from an API.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.
              Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus
              rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Section Heading</h2>
            <p>
              Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio,
              vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices
              nec congue eget, auctor vitae massa.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blog Articles
          </Link>
        </div>
      </div>
    </div>
  );
}