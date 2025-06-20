import { Link } from 'react-router-dom';
import { aboutPages } from '../data/homeData';
import headerImage from "../assets/scriptures.jpg"
import churchImage from "../assets/church.jpg"
import PageHeader from '../components/PageHeader';

export default function About() {
  const getColorClasses = (color) => {
    const colors = {
      sky: 'bg-sky-100 text-sky-600 hover:bg-sky-200',
      green: 'bg-green-100 text-green-600 hover:bg-green-200',
      purple: 'bg-purple-100 text-purple-600 hover:bg-purple-200',
      orange: 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200'
    };
    return colors[color] || colors.sky;
  };

  return (
    <div>
      <PageHeader
        title="About Us"
        subtitle="Learn more about our church, our beliefs, and our commitment to the Reformed faith"
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Trinity Baptist Church is a Bible-believing congregation in Busia committed
                to the historic Reformed faith. We hold to the authority of Scripture, the sovereignty
                of God, and the Gospel of Jesus Christ as the power of God for salvation.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Founded on the principles of the Protestant Reformation, we embrace the "Five Solas"
                and seek to glorify God through faithful preaching, biblical worship, and genuine
                Christian fellowship.
              </p>
              <p className="text-lg text-gray-600">
                Our desire is to see the Gospel transform lives throughout Busia and to
                raise up faithful disciples who will carry the message of Christ to the ends of the earth.
              </p>
            </div>
            <div className="">
              <img src={churchImage} alt="Church Building Photo" className='md:h-[400px] h-96 rounded-lg' />
            </div>
          </div>
        </div>
      </section>


      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
              <p className="text-gray-600">
                To glorify God by making disciples of Jesus Christ through the faithful preaching
                of God's Word, biblical worship, genuine fellowship, and compassionate service to
                our community in Busia.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
              <p className="text-gray-600">
                To see the Gospel of Jesus Christ transform lives, families, and communities
                throughout Busia and beyond, raising up faithful disciples who love God,
                love His Word, and love their neighbors.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Learn More
            </h2>
            <p className="text-lg text-gray-600">
              Explore different aspects of our church and faith
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutPages.map((page) => {
              const IconComponent = page.icon;
              return (
                <Link
                  key={page.href}
                  to={page.href}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200 hover:border-gray-300"
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${getColorClasses(page.color)}`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {page.title}
                  </h3>
                  <p className="text-gray-600">
                    {page.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>


      <section className="py-16 bg-sky-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Questions About Our Church?
          </h2>
          <p className="text-xl mb-8 text-sky-100">
            We'd love to hear from you and answer any questions you may have
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-sky-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
