import React from 'react';
import { GoArrowRight } from 'react-icons/go';

const Trusted = () => {
  const cardsData = [
    {
      image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
      name: 'Briar Martin',
      title: 'Project Manager | WFC', // Added title field
      rating: 5, // Rating out of 5
    },
    {
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
      name: 'Avery Johnson',
      title: 'Project Manager | WFC',
      rating: 5,
    },
    {
      image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
      name: 'Jordan Lee',
      title: 'Project Manager | WFC',
      rating: 5,
    },
    {
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
      name: 'Casey Kim',
      title: 'Project Manager | WFC',
      rating: 5,
    },
  ];

  // Component for star rating
  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  // Component for an individual testimonial card
  const CreateCard = ({ card }) => (
    <div className="p-5 rounded-lg mx-4 shadow hover:shadow-lg transition-all duration-200 w-80 shrink-0 bg-white border border-gray-100">
      {/* Star Rating - Always 5 stars as per image */}
      <div className="mb-3">
        <StarRating rating={card.rating} />
      </div>
      
      {/* Testimonial text - Car battery service focused */}
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        "As an SEO consultant, I needed a website that not only looked professional but also performed exceptionally in search rankings."
      </p>
      
      {/* Author info - Name and Title only, no handle/date */}
      <div className="flex items-center gap-3">
        <img 
          className="w-10 h-10 rounded-full object-cover" 
          src={card.image} 
          alt={card.name} 
        />
        <div>
          <p className="font-semibold text-sm text-gray-900">{card.name}</p>
          <p className="text-xs text-gray-500">{card.title}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="py-12 bg-[#FDF8F8]">

        <div className='flex items-center justify-center flex-col gap-y-3 mt-6'>
                    <p>What Our Customers Say</p>
                    <h1 className='lg:text-[40px] md:text-[35px] text-[30px] text-center md:text-left font-bold'>
                      <span>Trusted by </span>{' '}
                      <span className='text-[#C1121F]'>Drivers Everywhere</span>{' '}
                    </h1>
                  </div>
      {/* Inline keyframes for the marquee animation */}
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .marquee-inner {
          animation: marqueeScroll 30s linear infinite;
        }
        .marquee-reverse {
          animation-direction: reverse;
        }
      `}</style>

      {/* First marquee row (left to right) */}
      <div className="marquee-row w-full mx-auto max-w-6xl overflow-hidden relative">
        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-gray-50 to-transparent"></div>

        <div className="marquee-inner flex transform-gpu min-w-[200%] pt-6 pb-4">
          {[...cardsData, ...cardsData].map((card, index) => (
            <CreateCard key={`row1-${index}`} card={card} />
          ))}
        </div>

        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-gray-50 to-transparent"></div>
      </div>

      {/* Second marquee row (right to left) */}
      <div className="marquee-row w-full mx-auto max-w-6xl overflow-hidden relative">
        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-gray-50 to-transparent"></div>

        <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] pt-4 pb-6">
          {[...cardsData, ...cardsData].map((card, index) => (
            <CreateCard key={`row2-${index}`} card={card} />
          ))}
        </div>

        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-gray-50 to-transparent"></div>
      </div>
    </div>
  );
};

export default Trusted;