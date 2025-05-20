import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaMediumM, } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo and Socials */}
          <div>
            <Link to="index.html" className="inline-block mb-4">
              <img src="images/logo-light.svg" alt="Logo" className="block dark:hidden w-32" />
              <img src="images/logo-dark.svg" alt="Logo" className="hidden dark:block w-32" />
            </Link>
            <p className="text-gray-400 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <ul className="flex space-x-4">
              <li>
              <Link  to="#" aria-label="Facebook">
                <FaFacebookF className="vh ul cl il" />
              </Link>
              </li>
              <Link to="#" aria-label="Facebook">
                <FaXTwitter  className="vh ul cl il" />
              </Link>
              <Link to="#" aria-label="Facebook">
                <FaLinkedinIn className="vh ul cl il" />
              </Link>
              <Link to="#" aria-label="Facebook">
                <FaMediumM className="vh ul cl il" />
              </Link>
            </ul>
          </div>
        
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="hover:underline">Home</Link></li>
              <li><Link to="#" className="hover:underline">Product</Link></li>
              <li>
                <Link to="#" className="flex items-center space-x-2 hover:underline">
                  <span>Careers</span>
                  <span className="text-xs bg-blue-600 text-white rounded px-2 py-0.5">Hiring</span>
                </Link>
              </li>
              <li><Link to="#" className="hover:underline">Pricing</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="hover:underline">Web Development</Link></li>
              <li><Link to="#" className="hover:underline">Graphics Design</Link></li>
              <li><Link to="#" className="hover:underline">Digital Marketing</Link></li>
              <li><Link to="#" className="hover:underline">UI/UX Design</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="hover:underline">Company</Link></li>
              <li><Link to="#" className="hover:underline">Press Media</Link></li>
              <li><Link to="#" className="hover:underline">Our Blog</Link></li>
              <li><Link to="#" className="hover:underline">Contact Us</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to receive future updates</p>
            <form
              action="https://formbold.com/s/unique_form_id"
              method="POST"
              className="flex"
            >
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-2 rounded-l bg-white text-black focus:outline-none"
              />
              <button className="bg-blue-600 px-4 rounded-r hover:bg-blue-700">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.5 1.5l16 8.5-16 8.5v-17z" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <ul className="flex space-x-6 mb-4 md:mb-0">
            <li><Link to="#" className="hover:text-white">English</Link></li>
            <li><Link to="#" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="#" className="hover:text-white">Support</Link></li>
          </ul>
          <p>&copy; 2025 Base. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
