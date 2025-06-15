import headerImage from '../assets/scriptures.jpg';
import PageHeader from '../components/PageHeader';

export default function Literature() {

  return (
    <div>
      <PageHeader
        title="Literature"
        subtitle="Recommended books, resources, and reformed theological materials"
        bgImage={headerImage}
        overlayColor="rgba(0, 0, 0, 0.6)"
        gradientFrom="from-purple-800"
        gradientTo="to-purple-900"
        height="lg"
        textColor="text-white"
        subtitleColor="text-purple-100"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Coming Soon</h2>
            <p className="text-lg text-gray-600">
              We're currently preparing a comprehensive list of recommended Reformed Baptist literature
              and theological resources. Check back soon!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
