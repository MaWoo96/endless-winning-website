import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#F5F5F7] py-16">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
        <div className="max-w-[1264px] mx-auto">
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12">
            {/* Logo and Description */}
            <div className="flex flex-col gap-4 max-w-[406px]">
              <div className="w-[155px] h-12 relative">
                <Image
                  src="/Footer/22ae7a12f7ec681c693b7ea72b619b780f0e74cf.png"
                  alt="Endless Winning"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <p className="text-base text-navy-dark leading-[25px]">
                Stay connected with us for insights, strategies, and success stories that help you grow with clarity, speed, and impact.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap gap-12 lg:gap-20">
              {/* Quick Links */}
              <div className="flex flex-col gap-6 w-[140px]">
                <h4 className="text-base font-medium text-[#1e1a2a]">Quick Links</h4>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link href="#about" className="text-sm text-navy-dark hover:text-navy-dark/70 transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#process" className="text-sm text-navy-dark hover:text-navy-dark/70 transition-colors">
                      The Process
                    </Link>
                  </li>
                  <li>
                    <Link href="#team" className="text-sm text-navy-dark hover:text-navy-dark/70 transition-colors">
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link href="#pricing" className="text-sm text-navy-dark hover:text-navy-dark/70 transition-colors">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="#contact" className="text-sm text-navy-dark hover:text-navy-dark/70 transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Other Links */}
              <div className="flex flex-col gap-6 w-[140px]">
                <h4 className="text-base font-medium text-[#1e1a2a]">Other Links</h4>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link href="#testimonials" className="text-sm text-navy-dark hover:text-navy-dark/70 transition-colors">
                      Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link href="#faqs" className="text-sm text-navy-dark hover:text-navy-dark/70 transition-colors">
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Info */}
              <div className="flex flex-col gap-6 w-[140px]">
                <h4 className="text-base font-medium text-[#1e1a2a]">Info</h4>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link href="#terms" className="text-sm text-navy-dark hover:text-navy-dark/70 transition-colors">
                      Terms & Condition
                    </Link>
                  </li>
                  <li>
                    <Link href="#privacy" className="text-sm text-navy-dark hover:text-navy-dark/70 transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-navy-dark/10 mb-9"></div>

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            {/* Social Icons */}
            <div className="flex items-center gap-6">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <div className="w-[27px] h-[27px]">
                  <Image
                    src="/Footer/Social Icons/Facebook/Negative.svg"
                    alt="Facebook"
                    width={27}
                    height={27}
                  />
                </div>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <div className="w-[27px] h-[27px]">
                  <Image
                    src="/Footer/Social Icons/X (Twitter)/Negative.svg"
                    alt="X (Twitter)"
                    width={27}
                    height={27}
                  />
                </div>
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <div className="w-[27px] h-[27px] relative">
                  <svg viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path d="M19.125 0.75H7.875C4.00406 0.75 0.75 4.00406 0.75 7.875V19.125C0.75 22.9959 4.00406 26.25 7.875 26.25H19.125C22.9959 26.25 26.25 22.9959 26.25 19.125V7.875C26.25 4.00406 22.9959 0.75 19.125 0.75Z" fill="#2F4F6A"/>
                    <path d="M13.5 18.75C11.0147 18.75 9 16.7353 9 14.25C9 11.7647 11.0147 9.75 13.5 9.75C15.9853 9.75 18 11.7647 18 14.25C18 16.7353 15.9853 18.75 13.5 18.75Z" fill="white"/>
                    <circle cx="19.5" cy="7.5" r="1.125" fill="white"/>
                  </svg>
                </div>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <div className="w-[27px] h-[27px]">
                  <Image
                    src="/Footer/Social Icons/LinkedIn/Negative.svg"
                    alt="LinkedIn"
                    width={27}
                    height={27}
                  />
                </div>
              </Link>
            </div>

            {/* Copyright */}
            <p className="text-sm text-[#64748b]">
              Copyright © 2025 EndlessWinning. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
