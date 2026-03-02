import React from 'react';
import { Menu, X, Phone, ShieldCheck } from 'lucide-react';
import { Button } from './ui/Button';
import { useState, useEffect } from 'react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Loan Programs', href: '#programs' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'For Realtors', href: '#realtors' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex flex-col">
            <span className={`font-serif text-xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900 lg:text-white'}`}>
              Sarah Jenkins
            </span>
            <span className={`text-xs uppercase tracking-widest ${isScrolled ? 'text-slate-500' : 'text-slate-500 lg:text-slate-200'}`}>
              Premier Mortgage Group
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                  isScrolled ? 'text-slate-600' : 'text-white/90'
                }`}
              >
                {link.name}
              </a>
            ))}
            <Button variant={isScrolled ? 'primary' : 'secondary'} size="sm">
              Get Pre-Qualified
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-slate-900' : 'text-slate-900 lg:text-white'}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-lg p-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-slate-600 font-medium py-2 hover:text-blue-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button className="w-full">Get Pre-Qualified</Button>
        </div>
      )}
    </nav>
  );
};
