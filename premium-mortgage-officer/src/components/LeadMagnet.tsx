import React from 'react';
import { Button } from './ui/Button';
import { Download, BookOpen } from 'lucide-react';

export const LeadMagnet = () => {
  return (
    <section className="py-20 bg-blue-900 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-800 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 p-12 flex flex-col justify-center">
            <div className="inline-flex items-center space-x-2 text-blue-700 font-semibold mb-4">
              <BookOpen className="w-5 h-5" />
              <span className="uppercase tracking-wider text-sm">Free Resource</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
              Free First-Time Homebuyer Guide
            </h2>
            <p className="text-slate-600 mb-8 text-lg">
              Download my step-by-step guide to understanding the home buying process, including loan options, credit tips, and what to expect at closing.
            </p>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="email" className="sr-only">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Enter your email address" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
              </div>
              <Button size="lg" className="w-full md:w-auto gap-2">
                <Download className="w-4 h-4" />
                Download Guide
              </Button>
            </form>
            <p className="text-xs text-slate-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
          <div className="md:w-1/2 bg-slate-100 relative min-h-[300px]">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1073&q=80" 
              alt="Homebuyer Guide Preview" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent flex items-end p-8">
              <div className="text-white">
                <div className="font-serif text-2xl font-bold">The Ultimate Guide to Buying Your First Home</div>
                <div className="mt-2 text-white/80">2025 Edition • 24 Pages</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
