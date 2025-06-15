import { Heart, Star, Shield, Crown } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import headerImage from '../assets/scriptures.jpg';

export default function OurBeliefs() {
  const beliefs = [
    {
      icon: Shield,
      title: "Scripture Alone (Sola Scriptura)",
      description: "The Bible is our ultimate authority for faith and practice. It is inspired, inerrant, and sufficient for all matters of Christian doctrine and living.",
      color: "blue"
    },
    {
      icon: Heart,
      title: "Grace Alone (Sola Gratia)",
      description: "Salvation is entirely by God's grace, not by human works or merit. We are saved by grace through faith as a gift from God.",
      color: "green"
    },
    {
      icon: Star,
      title: "Faith Alone (Sola Fide)",
      description: "We are justified by faith alone in Jesus Christ. Good works are the fruit of salvation, not the cause of it.",
      color: "purple"
    },
    {
      icon: Crown,
      title: "Christ Alone (Solus Christus)",
      description: "Jesus Christ is the only mediator between God and man. Salvation is found in no one else but Christ alone.",
      color: "red"
    }
  ];

  return (
    <div>
      <PageHeader
        title="Our Beliefs"
        subtitle="Core theological convictions that shape our ministry and worship"
        bgImage={headerImage}
        overlayColor="rgba(0, 0, 0, 0.6)"
        gradientFrom="from-green-800"
        gradientTo="to-green-900"
        height="lg"
        textColor="text-white"
        subtitleColor="text-green-100"
      />

      {/* The Five Solas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Five Solas of the Reformation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These foundational principles recovered during the Protestant Reformation
              continue to guide our understanding of the Gospel and Christian living.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {beliefs.map((belief, index) => {
              const IconComponent = belief.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                  <div className={`w-16 h-16 bg-${belief.color}-100 rounded-full flex items-center justify-center mb-6`}>
                    <IconComponent className={`w-8 h-8 text-${belief.color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {belief.title}
                  </h3>
                  <p className="text-gray-700">
                    {belief.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 text-center">
            <Crown className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Glory to God Alone (Soli Deo Gloria)
            </h3>
            <p className="text-gray-700">
              The ultimate purpose of salvation and all of life is to bring glory to God alone.
              We exist to worship, serve, and honor Him in everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Reformed Distinctives */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Reformed Theology
            </h2>
            <p className="text-lg text-gray-600">
              Our understanding of Scripture leads us to embrace Reformed theology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Sovereignty of God</h3>
              <p className="text-gray-700">
                God is absolutely sovereign over all things, including salvation.
                His will is supreme and His purposes cannot be thwarted.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Total Depravity</h3>
              <p className="text-gray-700">
                All humans are born in sin and are completely unable to save themselves
                or contribute to their salvation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Unconditional Election</h3>
              <p className="text-gray-700">
                God chose His people before the foundation of the world,
                not based on anything in them but solely on His grace.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Limited Atonement</h3>
              <p className="text-gray-700">
                Christ died specifically for His people, the elect,
                securing their salvation completely and perfectly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Irresistible Grace</h3>
              <p className="text-gray-700">
                When God calls His elect to salvation, His grace is effective
                and cannot be ultimately resisted.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Perseverance of Saints</h3>
              <p className="text-gray-700">
                All who are truly saved will persevere in faith and be kept
                by God's power until the end.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Learn More About Our Faith
          </h2>
          <p className="text-xl mb-8 text-green-100">
            We invite you to explore our Statement of Faith and other resources
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/about/statement-of-faith"
              className="bg-white text-green-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Statement of Faith
            </a>
            <a
              href="/about/literature"
              className="border border-white text-white hover:bg-white hover:text-green-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Recommended Reading
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
