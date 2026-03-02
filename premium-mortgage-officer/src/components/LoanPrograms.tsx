import React from 'react';
import { ArrowRight, Home, Briefcase, HardHat, RefreshCw, Flag } from 'lucide-react';

export const LoanPrograms = () => {
  const programs = [
    {
      icon: <Home className="w-6 h-6" />,
      title: "Conventional Home Loans",
      description: "Ideal for borrowers with good credit. Offers competitive rates and flexible down payment options as low as 3%.",
      link: "#"
    },
    {
      icon: <Flag className="w-6 h-6" />,
      title: "FHA Loans",
      description: "Government-backed loans perfect for first-time buyers with lower credit scores or smaller down payments.",
      link: "#"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "VA Loans for Veterans",
      description: "Exclusive to veterans and active military. $0 down payment, no mortgage insurance, and highly competitive rates.",
      link: "#"
    },
    {
      icon: <HardHat className="w-6 h-6" />,
      title: "Construction Loans",
      description: "Build your dream home from the ground up. Short-term financing for the building phase that converts to a permanent mortgage.",
      link: "#"
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Refinancing",
      description: "Lower your monthly payment, shorten your term, or cash out equity for home improvements or debt consolidation.",
      link: "#"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-blue-700 font-semibold tracking-wider uppercase text-sm">Mortgage Solutions in Seattle, WA</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2">
            Comprehensive Home Loan Options
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 group">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 mb-6 group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
                {program.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{program.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {program.description}
              </p>
              <a href={program.link} className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800 transition-colors">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
