import { Play, Calendar, User } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import headerImage from '../assets/scriptures.jpg';

export default function Sermons() {
  const sermons = [
    {
      title: "The Grace of God in Salvation",
      speaker: "Pastor Simon Ochieng",
      date: "December 10, 2024",
      passage: "Romans 3:21-26",
      description: "In this powerful message, we explore the magnificent grace of God revealed in the Gospel of Jesus Christ and how it transforms our understanding of salvation."
    },
    {
      title: "Walking by Faith",
      speaker: "Pastor Simon Ochieng",
      date: "December 3, 2024",
      passage: "2 Corinthians 5:7",
      description: "What does it mean to walk by faith and not by sight? This sermon examines the nature of biblical faith and how it should shape our daily lives."
    },
    {
      title: "The Perseverance of the Saints",
      speaker: "Pastor Simon Ochieng",
      date: "November 26, 2024",
      passage: "Philippians 1:6",
      description: "A study on the biblical doctrine of the perseverance of the saints and the assurance it provides to believers."
    }
  ];

  return (
    <div>
      <PageHeader
        title="Sermons"
        subtitle="Listen to God's Word faithfully preached and taught"
        bgImage={headerImage}
        overlayColor="rgba(0, 0, 0, 0.6)"
        gradientFrom="from-sky-900"
        gradientTo="to-sky-800"
        height="lg"
        textColor="text-white"
        subtitleColor="text-sky-100"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Messages</h2>
            <p className="text-lg text-gray-600">
              Expository preaching through God's Word for spiritual growth and edification
            </p>
          </div>

          <div className="space-y-8">
            {sermons.map((sermon, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/4">
                    <div className="bg-gray-200 h-48 md:h-full flex items-center justify-center">
                      <Play className="w-12 h-12 text-gray-500" />
                    </div>
                  </div>
                  <div className="md:w-3/4 p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {sermon.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {sermon.speaker}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {sermon.date}
                      </div>
                      <div className="font-semibold text-sky-600">
                        {sermon.passage}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-6">
                      {sermon.description}
                    </p>
                    <div className="flex gap-4">
                      <button className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-lg transition-colors flex items-center">
                        <Play className="w-4 h-4 mr-2" />
                        Listen
                      </button>
                      <button className="border border-sky-600 text-sky-600 hover:bg-sky-50 px-6 py-2 rounded-lg transition-colors">
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
