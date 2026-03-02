import React from 'react';
import { MapPin, Phone, Sliders, MessageSquare } from 'lucide-react';

export const Differentiation = () => {
  const features = [
    {
      icon: <MapPin className="w-8 h-8 text-blue-700" />,
      title: "Local Market Expertise",
      description: "Deep knowledge of the Seattle & King County real estate landscape to help you win offers."
    },
    {
      icon: <Phone className="w-8 h-8 text-blue-700" />,
      title: "Direct Access",
      description: "No call centers or automated loops. You get my personal cell number for direct support."
    },
    {
      icon: <Sliders className="w-8 h-8 text-blue-700" />,
      title: "Strategic Structuring",
      description: "We don't just quote rates; we structure loans to meet your long-term financial goals."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-blue-700" />,
      title: "Clear Communication",
      description: "Proactive updates every Tuesday and Friday so you never have to wonder where your loan stands."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
            Why Work With Sarah Jenkins?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Choosing the right mortgage professional makes a difference. I provide direct guidance, proactive communication, and tailored loan strategies to ensure smooth closings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow duration-300">
              <div className="mb-4 p-3 bg-white rounded-xl inline-block shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
