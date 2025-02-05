import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-serif font-bold text-center mb-16 text-primary">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-serif font-bold mb-6 text-primary">Get in Touch</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 px-6 hover:bg-primary-light transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-serif font-bold mb-6 text-primary">Information</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <MapPin className="w-6 h-6 text-primary mt-1" />
              <div className="ml-4">
                <h3 className="font-medium text-primary">Address</h3>
                <p className="text-gray-600">123 Culinary Street<br />Foodville, FV 12345</p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="w-6 h-6 text-primary mt-1" />
              <div className="ml-4">
                <h3 className="font-medium text-primary">Phone</h3>
                <p className="text-gray-600">(555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="w-6 h-6 text-primary mt-1" />
              <div className="ml-4">
                <h3 className="font-medium text-primary">Email</h3>
                <p className="text-gray-600">info@saveur.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <Clock className="w-6 h-6 text-primary mt-1" />
              <div className="ml-4">
                <h3 className="font-medium text-primary">Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 11am - 10pm<br />
                  Saturday - Sunday: 10am - 11pm
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Restaurant facade"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;