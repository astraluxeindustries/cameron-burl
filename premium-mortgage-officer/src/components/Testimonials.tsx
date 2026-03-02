import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Button } from './ui/Button';

export const Testimonials = () => {
  const reviews = [
    {
      text: "Sarah made the impossible possible. We had a complicated income situation, but she navigated it with ease. We are now in our dream home thanks to her!",
      author: "Michael & Jessica T.",
      type: "First-Time Buyers"
    },
    {
      text: "As a real estate investor, I need speed and reliability. Sarah delivers both every single time. Her knowledge of the market is unmatched.",
      author: "David R.",
      type: "Real Estate Investor"
    },
    {
      text: "The communication was outstanding. I never had to guess where we were in the process. Highly recommend Sarah to anyone looking for a stress-free mortgage.",
      author: "Amanda L.",
      type: "Refinance Client"
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-700 font-semibold tracking-wider uppercase text-sm">Client Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2">
            What Homebuyers Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-2xl relative">
              <Quote className="absolute top-6 right-6 text-slate-200 w-10 h-10" />
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 italic mb-6 relative z-10">"{review.text}"</p>
              <div>
                <div className="font-bold text-slate-900">{review.author}</div>
                <div className="text-sm text-slate-500">{review.type}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="gap-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-4 h-4" />
            View All Reviews on Google
          </Button>
        </div>
      </div>
    </section>
  );
};
