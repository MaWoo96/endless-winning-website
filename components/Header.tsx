'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';

interface HeaderProps {
  onAboutClick: () => void;
}

export default function Header({ onAboutClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about', onClick: onAboutClick },
    { label: 'The Process', href: '#process' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray/20">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/Logos/IMG_6671.png"
              alt="Endless Winning"
              width={180}
              height={60}
              className="h-10 w-auto sm:h-12"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              item.onClick ? (
                <button
                  key={item.label}
                  onClick={item.onClick}
                  className="text-sm font-medium text-navy-dark hover:text-navy-medium transition-colors"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-navy-dark hover:text-navy-medium transition-colors"
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <span className="text-2xl">☀️</span>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link href="#contact" className="btn-primary">
                Get Started →
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-navy-dark"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray/20">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                item.onClick ? (
                  <button
                    key={item.label}
                    onClick={() => {
                      item.onClick();
                      setIsMenuOpen(false);
                    }}
                    className="text-base font-medium text-navy-dark hover:text-navy-medium transition-colors py-2 text-left"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-base font-medium text-navy-dark hover:text-navy-medium transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              ))}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="#contact"
                  className="btn-primary w-full mt-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started →
                </Link>
              </motion.div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
