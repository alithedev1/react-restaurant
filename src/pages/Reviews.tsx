import React from 'react';
import { Star } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  comment: string;
  image: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    rating: 5,
    date: 'March 15, 2024',
    comment: 'An exceptional dining experience! The truffle arancini was divine, and the service was impeccable.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 2,
    name: 'Michael Chen',
    rating: 5,
    date: 'March 10, 2024',
    comment: 'The attention to detail in every dish is remarkable. The herb-crusted halibut was perfectly cooked.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    rating: 4,
    date: 'March 5, 2024',
    comment: 'Beautiful atmosphere and excellent wine selection. The chocolate soufflé was a perfect ending to our meal.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
  },
];

const Reviews = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-serif font-bold text-center mb-16">Guest Reviews</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white p-6 border border-gray-100 shadow-sm"
          >
            <div className="flex items-center mb-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="ml-4">
                <h3 className="font-medium">{review.name}</h3>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 mb-2">{review.comment}</p>
            <p className="text-sm text-gray-500">{review.date}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-serif font-bold mb-8">Share Your Experience</h2>
        <button className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors">
          Write a Review
        </button>
      </div>
    </div>
  );
};

export default Reviews;