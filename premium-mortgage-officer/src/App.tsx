import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Differentiation } from './components/Differentiation';
import { LoanPrograms } from './components/LoanPrograms';
import { Stats } from './components/Stats';
import { Testimonials } from './components/Testimonials';
import { LeadMagnet } from './components/LeadMagnet';
import { RealtorPartnership } from './components/Realtor';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <Differentiation />
        <LoanPrograms />
        <Stats />
        <Testimonials />
        <LeadMagnet />
        <RealtorPartnership />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
