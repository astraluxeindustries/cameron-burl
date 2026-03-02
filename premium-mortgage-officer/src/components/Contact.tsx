import React from 'react';
import { Button } from './ui/Button';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Ready to get started? Have questions about your options? Reach out today for a no-obligation consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 h-full">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 p-3 rounded-lg text-blue-700">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">Phone</p>
                  <a href="tel:+12065550123" className="text-lg font-semibold text-slate-900 hover:text-blue-700 transition-colors">
                    (206) 555-0123
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 p-3 rounded-lg text-blue-700">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">Email</p>
                  <a href="mailto:sarah@premiermortgage.com" className="text-lg font-semibold text-slate-900 hover:text-blue-700 transition-colors">
                    sarah@premiermortgage.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 p-3 rounded-lg text-blue-700">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">Office</p>
                  <p className="text-slate-900">
                    123 Financial District Blvd, Suite 400<br />
                    Seattle, WA 98101
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 p-3 rounded-lg text-blue-700">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">Hours</p>
                  <p className="text-slate-900">
                    Mon - Fri: 9:00 AM - 6:00 PM<br />
                    Sat: By Appointment
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                  <input type="tel" id="phone" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
                </div>
              </div>

              <div>
                <label htmlFor="goal" className="block text-sm font-medium text-slate-700 mb-1">I'm interested in...</label>
                <select id="goal" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none">
                  <option>Buying a Home</option>
                  <option>Refinancing</option>
                  <option>Getting Pre-Approved</option>
                  <option>Investment Property</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"></textarea>
              </div>

              <Button size="lg" className="w-full">
                Start Your Application Today
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
