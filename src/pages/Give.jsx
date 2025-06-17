import { Heart, DollarSign, CreditCard, Smartphone, Building } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import headerImage from '../assets/scriptures.jpg';
import GivingSection from '../components/give/GivingSection';

export default function Give() {


  return (
    <div>
      <PageHeader
        title={(
          <>
            <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <span className="text-4xl md:text-5xl font-bold mb-6">Give</span>
          </>
        )}
        subtitle="Support the ministry and mission of Trinity Baptist Church"
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
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why We Give</h2>
            <p className="text-lg text-gray-600 mb-8">
              Giving is an act of worship and obedience to God, expressing our gratitude
              for His grace and supporting the work of His kingdom.
            </p>
          </div>

          <div className="bg-sky-50 border-l-4 border-sky-600 md:p-8 p-4 mb-12" data-aos="fade-up" data-aos-delay="100">
            <blockquote className="md:text-lg text-sky-900 italic mb-4">
              "Each one must give as he has decided in his heart, not reluctantly or under
              compulsion, for God loves a cheerful giver."
            </blockquote>
            <cite className="text-sky-800 font-semibold">— 2 Corinthians 9:7</cite>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Worship</h3>
              <p className="text-gray-600">
                Giving is an expression of our love and devotion to God
              </p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ministry</h3>
              <p className="text-gray-600">
                Supporting the work of the church and spreading the Gospel
              </p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Stewardship</h3>
              <p className="text-gray-600">
                Managing God's resources faithfully and generously
              </p>
            </div>
          </div>
        </div>
      </section>

      <GivingSection />


      <section className="py-16 bg-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Questions About Giving?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            We're here to help with any questions about donations or stewardship
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-green-800 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </a>
            <a
              href="mailto:tbcfunyula@gmail.com"
              className="border border-white text-white hover:bg-white hover:text-green-800 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Email Questions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
