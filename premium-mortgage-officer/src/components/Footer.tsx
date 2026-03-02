import React from 'react';
import { Home } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white font-serif text-2xl font-bold mb-4">Sarah Jenkins</h3>
            <p className="mb-4 text-slate-400 max-w-sm">
              Helping families in Seattle and King County achieve their homeownership dreams with integrity, transparency, and expertise.
            </p>
            <div className="flex items-center space-x-2 text-white">
              <Home className="w-5 h-5" />
              <span className="font-medium">Equal Housing Lender</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Loan Programs</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Licensing Info</a></li>
              <li><a href="#" className="hover:text-white transition-colors">NMLS Consumer Access</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Sarah Jenkins | Premier Mortgage Group. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            NMLS #123456 | WA License #MLO-123456
          </p>
        </div>
        
        <div className="mt-8 text-xs text-slate-600 text-center max-w-4xl mx-auto">
          <p>
            This is not a commitment to lend. All loans are subject to credit approval and property appraisal. Rates and programs are subject to change without notice. Premier Mortgage Group is an Equal Housing Lender.
          </p>
        </div>
      </div>
    </footer>
  );
};
