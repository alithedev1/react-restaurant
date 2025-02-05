import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div
        className="h-[70vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80")',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl bg-primary/95 backdrop-blur-sm p-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Welcome to Saveur
            </h1>
            <p className="text-secondary text-lg mb-6">
              Experience culinary excellence in every bite. Our contemporary approach to
              classic cuisine creates unforgettable dining moments.
            </p>
            <Link
              to="/menu"
              className="inline-flex items-center px-6 py-3 bg-secondary text-primary hover:bg-secondary-dark transition-colors"
            >
              View Menu
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img
              src="https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Restaurant interior"
              className="w-full h-80 object-cover"
            />
            <h2 className="text-2xl font-serif font-bold mt-6 mb-3 text-primary">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded with a passion for exceptional food and service, Saveur brings together
              traditional techniques and modern innovation.
            </p>
            <Link
              to="/about"
              className="text-primary font-medium hover:text-primary-light inline-flex items-center"
            >
              Learn more <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Signature dish"
              className="w-full h-80 object-cover"
            />
            <h2 className="text-2xl font-serif font-bold mt-6 mb-3 text-primary">
              Culinary Excellence
            </h2>
            <p className="text-gray-600 mb-4">
              Our menu features carefully selected ingredients prepared with precision and
              creativity, offering a unique dining experience.
            </p>
            <Link
              to="/menu"
              className="text-primary font-medium hover:text-primary-light inline-flex items-center"
            >
              Explore menu <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;