import React from 'react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-center mb-8">Our Story</h1>
        
        <div className="mb-12">
          <img
            src="https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Restaurant interior"
            className="w-full h-96 object-cover mb-8"
          />
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2010, Saveur has been at the forefront of contemporary dining,
              combining traditional techniques with modern innovation. Our journey began
              with a simple vision: to create extraordinary dining experiences that
              celebrate the art of gastronomy.
            </p>
            
            <p className="text-lg text-gray-600 mb-6">
              Under the guidance of Executive Chef Marie Laurent, our kitchen has
              evolved into a creative workshop where classic French techniques meet
              contemporary flavors. Each dish is crafted with precision, using the
              finest seasonal ingredients sourced from local producers.
            </p>

            <p className="text-lg text-gray-600 mb-6">
              Our commitment to excellence extends beyond the kitchen. Every aspect of
              Saveur has been thoughtfully designed to create an atmosphere of
              sophisticated comfort, where exceptional food is complemented by
              attentive service and elegant surroundings.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-serif text-xl font-bold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To create memorable dining experiences through innovative cuisine and
              impeccable service.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-xl font-bold mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To be a destination for food lovers seeking exceptional culinary
              experiences.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-xl font-bold mb-2">Our Values</h3>
            <p className="text-gray-600">
              Quality, creativity, and hospitality in everything we do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;