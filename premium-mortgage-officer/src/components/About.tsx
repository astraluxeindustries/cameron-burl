import React from 'react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-tl-3xl -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-slate-100 rounded-br-3xl -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=988&q=80" 
                alt="Sarah Jenkins" 
                className="rounded-xl shadow-lg w-full object-cover h-[500px]"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
              About Sarah Jenkins
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                With over 15 years of experience in the mortgage industry, I have dedicated my career to helping families achieve the dream of homeownership. My approach is simple: listen first, advise second.
              </p>
              <p>
                I understand that a mortgage is not just a loan; it's likely the largest financial commitment you will make. That's why I take the time to explain every detail, ensuring you feel confident and empowered throughout the process.
              </p>
              <p>
                Whether you are buying your first home, investing in real estate, or refinancing, I am committed to finding the best loan solution for your unique situation.
              </p>
              <p>
                When I'm not closing loans, you can find me hiking the trails of the Pacific Northwest or volunteering at the local food bank.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-2 gap-4">
              <div>
                <span className="block text-3xl font-serif font-bold text-slate-900">15+</span>
                <span className="text-sm text-slate-500">Years Experience</span>
              </div>
              <div>
                <span className="block text-3xl font-serif font-bold text-slate-900">Top 1%</span>
                <span className="text-sm text-slate-500">Originator in WA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
