import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';
import ContactMap from '../components/contact/ContactMap';
import ContactDetails from '../components/contact/ContactDetails';
import PageHeader from '../components/PageHeader';
import headerImage from '../assets/scriptures.jpg';

export default function Contact() {
  return (
    <div>
      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you and answer any questions you may have"
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>

              <ContactDetails />
            </div>

            <ContactForm />

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-lg text-gray-600">
              Located in the heart of Funyula Town, Busia
            </p>
          </div>

          <ContactMap />
        </div>
      </section>
    </div>
  );
}
