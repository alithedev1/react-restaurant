import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4 text-white">Saveur</h3>
            <p className="text-secondary">
              Experience the finest in contemporary dining with our carefully curated menu
              and exceptional service.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-serif mb-4 text-white">Contact</h3>
            <div className="space-y-2">
              <p className="flex items-center text-secondary">
                <MapPin size={18} className="mr-2" />
                123 Culinary Street, Foodville
              </p>
              <p className="flex items-center text-secondary">
                <Phone size={18} className="mr-2" />
                (555) 123-4567
              </p>
              <p className="flex items-center text-secondary">
                <Mail size={18} className="mr-2" />
                info@saveur.com
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-serif mb-4 text-white">Hours</h3>
            <div className="space-y-2">
              <p className="flex items-center text-secondary">
                <Clock size={18} className="mr-2" />
                Mon-Fri: 11am - 10pm
              </p>
              <p className="flex items-center text-secondary">
                <Clock size={18} className="mr-2" />
                Sat-Sun: 10am - 11pm
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-light text-center text-secondary">
          <p>&copy; {new Date().getFullYear()} Saveur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;