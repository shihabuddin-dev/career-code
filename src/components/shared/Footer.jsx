import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Button from "../ui/Button";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content pt-12 pb-8 border-t border-base-300">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-3">Career Code</h2>
          <p className="text-sm">
            Discover, Search, share, and enjoy with Career Code.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-base-content">
            <li>
              <Link to="/" className="hover:text-secondary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/my-application" className="hover:text-secondary">
                My Application
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-secondary">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-3 text-sm text-base-content">
            <li className="flex items-center gap-2">
              <FaEnvelope /> info@careercode.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> +880 96784-567890
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> Bogura, Bangladesh
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Subscribe</h3>
          <p className="text-sm mb-3">Get the best Job news every week!</p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="w-full border-2 border-base-content/20 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary transition duration-200 bg-base-100 text-base-content"
            />
            <Button type="submit">Subscribe</Button>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-8 border-t border-base-300 pt-6 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Career Code All rights reserved.
        </p>
        <div className="flex justify-center mt-3 space-x-4 text-secondary">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF size={18} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={18} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
