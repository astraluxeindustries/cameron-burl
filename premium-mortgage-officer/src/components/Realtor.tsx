import React from 'react';
import { Button } from './ui/Button';
import { Handshake } from 'lucide-react';

export const RealtorPartnership = () => {
  return (
    <section id="realtors" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-sm mb-6 text-blue-700">
          <Handshake className="w-8 h-8" />
        </div>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
          For Realtors
        </h2>
        <p className="text-xl text-slate-600 mb-8 leading-relaxed">
          If you are a real estate professional in Seattle, I provide consistent communication, fast pre-approvals, and on-time closings to support your transactions and protect your reputation.
        </p>
        <Button variant="primary" size="lg">
          Partner With Me
        </Button>
      </div>
    </section>
  );
};
