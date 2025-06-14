import { Heart, DollarSign, CreditCard, Smartphone, Building } from 'lucide-react';

export default function Give() {
  const givingOptions = [
    {
      icon: Smartphone,
      title: "Mobile Money",
      description: "Give via M-Pesa or other mobile money services",
      details: "Send to: Reformed Baptist Church\nPaybill: (To be provided)\nAccount: Your name"
    },
    {
      icon: Building,
      title: "Bank Transfer",
      description: "Direct bank transfer or deposit",
      details: "Bank: (To be provided)\nAccount Name: Reformed Baptist Church\nAccount Number: (To be provided)"
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
      <section className="bg-gradient-to-r from-amber-900 to-amber-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Give</h1>
            <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto">
              Support the ministry and mission of Reformed Baptist Church
            </p>
          </div>
        </div>
      </section>

      {/* Biblical Foundation */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why We Give</h2>
            <p className="text-lg text-gray-600 mb-8">
              Giving is an act of worship and obedience to God, expressing our gratitude
              for His grace and supporting the work of His kingdom.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-8 mb-12">
            <blockquote className="text-lg text-blue-900 italic mb-4">
              "Each one must give as he has decided in his heart, not reluctantly or under
              compulsion, for God loves a cheerful giver."
            </blockquote>
            <cite className="text-blue-800 font-semibold">— 2 Corinthians 9:7</cite>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Worship</h3>
              <p className="text-gray-600">
                Giving is an expression of our love and devotion to God
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ministry</h3>
              <p className="text-gray-600">
                Supporting the work of the church and spreading the Gospel
              </p>
            </div>

            <div className="text-center">
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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ways to Give</h2>
            <p className="text-lg text-gray-600">
              Choose the method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {givingOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-amber-600" />
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

      {/* How Funds Are Used */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Your Gifts Are Used</h2>
            <p className="text-lg text-gray-600">
              Every contribution supports the mission and ministry of our church
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ministry Operations</h3>
              <p className="text-gray-600 text-sm">
                Daily operations, utilities, and ministry supplies
              </p>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">25%</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Missions & Outreach</h3>
              <p className="text-gray-600 text-sm">
                Local evangelism and community outreach programs
              </p>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">20%</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Building & Maintenance</h3>
              <p className="text-gray-600 text-sm">
                Facility upkeep and improvement projects
              </p>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">15%</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pastoral Support</h3>
              <p className="text-gray-600 text-sm">
                Supporting pastoral ministry and leadership
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Questions */}
      <section className="py-16 bg-amber-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Questions About Giving?
          </h2>
          <p className="text-xl mb-8 text-amber-100">
            We're here to help with any questions about donations or stewardship
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-amber-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </a>
            <a
              href="mailto:info@reformedbaptistkenya.org"
              className="border border-white text-white hover:bg-white hover:text-amber-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Email Questions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
