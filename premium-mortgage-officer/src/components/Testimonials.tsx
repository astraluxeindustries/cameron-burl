import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Button } from './ui/Button';

export const Testimonials = () => {
  const reviews = [
    {
      text: "Cameron was the loan officer for the Buyer on My Seller’s Transaction. He kept me well informed throughout the transaction and was a very good communicator and perfect gentleman.",
      author: "Nancy B.",
      type: "First-Time Buyers"
    },
    {
      text: "Cameron handled the entire loan process like a true professional, he is very knowledgeable and it shows.",
      author: "Kellen B.",
      type: "Real Estate Investor"
    },
    {
      text: "Cameron was there to answer all my questions and concerns for over a year as the process of buying our newly built home was underway. He always took my calls or made sure to call me back if he was unavailable. I felt like I was being taken care of the whole time.",
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
