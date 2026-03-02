import React from 'react';

export const Stats = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Proven Results You Can Trust
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Numbers don't lie. Our track record of success speaks to the dedication we bring to every single transaction.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-800">
          <div className="p-4">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
            <div className="text-slate-400 font-medium uppercase tracking-wide text-sm">Loans Funded</div>
          </div>
          <div className="p-4">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">$250M+</div>
            <div className="text-slate-400 font-medium uppercase tracking-wide text-sm">Total Volume</div>
          </div>
          <div className="p-4">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">98%</div>
            <div className="text-slate-400 font-medium uppercase tracking-wide text-sm">On-Time Closings</div>
          </div>
          <div className="p-4">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">5.0</div>
            <div className="text-slate-400 font-medium uppercase tracking-wide text-sm">Google Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};
