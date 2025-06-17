import { Heart, DollarSign, CreditCard, Smartphone, Building } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import headerImage from '../assets/scriptures.jpg';

export default function Give() {
  const givingOptions = [
    {
      icon: Smartphone,
      title: "Mobile Money",
      description: "Give via M-Pesa or other mobile money services",
      details: "Send to: Trinity Baptist Church\nPaybill: (To be provided)\nAccount: Your name"
    },
    {
      icon: Building,
      title: "Bank Transfer",
      description: "Direct bank transfer or deposit",
      details: "Bank: (To be provided)\nAccount Name: Trinity Baptist Church\nAccount Number: (To be provided)"
    },
    {
      icon: CreditCard,
      title: "Online Giving",
      description: "Secure online donations via card",
      details: "Coming soon - secure online giving platform"
    },
    {
      icon: DollarSign,
      title: "Cash/Check",
      description: "Give in person during service",
      details: "Place your offering in the collection during Sunday service"
    }
  ];

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
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Stewardship</h3>
              <p className="text-gray-600">
                Managing God's resources faithfully and generously
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Giving Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ways to Give</h2>
            <p className="text-lg text-gray-600">
              Choose the method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {givingOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {option.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {option.description}
                      </p>
                      <div className="text-sm text-gray-700 bg-gray-50 p-4 rounded whitespace-pre-line">
                        {option.details}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


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
