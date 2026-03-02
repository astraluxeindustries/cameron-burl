import React from 'react';
import { Button } from './ui/Button';
import { Star, CheckCircle2, TrendingUp, Users } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600596542815-27b88e542d93?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Luxury Home" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-0">
        <div className="max-w-2xl">
          <div className="inline-flex items-center space-x-2 bg-blue-900/30 border border-blue-500/30 rounded-full px-3 py-1 mb-6 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-blue-400"></span>
            <span className="text-blue-100 text-xs font-medium tracking-wide uppercase">Trusted Mortgage Expert in Seattle, WA</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
            Sarah Jenkins <br />
            <span className="text-slate-300 font-light italic text-3xl lg:text-5xl">Mortgage Loan Officer</span>
          </h1>
          
          <p className="text-lg text-slate-200 mb-8 leading-relaxed max-w-xl">
            Helping First-Time Buyers, Homeowners, and Investors secure competitive, strategic home financing across King County.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="secondary" size="lg" className="shadow-lg shadow-blue-900/20">
              Start Application
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Schedule a Consultation
            </Button>
          </div>

          {/* Authority Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-8">
            <div>
              <div className="text-2xl lg:text-3xl font-bold text-white">500+</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Families Helped</div>
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-bold text-white">15+</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Years Exp.</div>
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-bold text-white">$250M+</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Volume Closed</div>
            </div>
            <div>
              <div className="flex items-center text-2xl lg:text-3xl font-bold text-white">
                5.0 <Star className="w-5 h-5 text-yellow-400 ml-1 fill-yellow-400" />
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Client Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
