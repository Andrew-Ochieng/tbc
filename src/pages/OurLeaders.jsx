import headerImage from '../assets/scriptures.jpg';
import PageHeader from '../components/PageHeader';

export default function OurLeaders() {
  return (
    <div>
      <PageHeader
        title="Our Leaders"
        subtitle="Meet our pastoral staff and church leadership team"
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
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Leadership Information</h2>
            <p className="text-lg text-gray-600">
              Information about our pastoral staff and church leadership will be available soon.
              Please contact us if you'd like to learn more about our leadership structure.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
