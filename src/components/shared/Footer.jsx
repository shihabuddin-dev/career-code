import React from "react";
import {
  FaApple,
  FaGooglePlay,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content pt-12 pb-8">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-6 gap-10">
        {/* Logo + Description + Socials */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold mb-3">Career Code</h2>
          <p className="text-sm mb-4">
            Career Code is the heart of the design community and the best
            resource to discover and connect with designers and jobs worldwide.
          </p>
          <div className="flex space-x-3">
            <a href="#" className="text-xl text-primary">
              <FaFacebookF />
            </a>
            <a href="#" className="text-xl text-primary">
              <FaTwitter />
            </a>
            <a href="#" className="text-xl text-primary">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:underline">
                About us
              </Link>
            </li>
            <li>
              <Link to="/team" className="hover:underline">
                Our Team
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:underline">
                Products
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Community</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/feature" className="hover:underline">
                Feature
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:underline">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/credit" className="hover:underline">
                Credit
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:underline">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/ios" className="hover:underline">
                iOS
              </Link>
            </li>
            <li>
              <Link to="/android" className="hover:underline">
                Android
              </Link>
            </li>
            <li>
              <Link to="/microsoft" className="hover:underline">
                Microsoft
              </Link>
            </li>
            <li>
              <Link to="/desktop" className="hover:underline">
                Desktop
              </Link>
            </li>
          </ul>
        </div>

        {/* More */}
        <div>
          <h3 className="text-lg font-semibold mb-3">More</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/privacy" className="hover:underline">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="/help" className="hover:underline">
                Help
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:underline">
                Terms
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:underline">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Download App</h3>
          <p className="text-sm mb-4">
            Download our Apps and get extra 15% Discount on your first Order...!
          </p>
          <div className="flex space-x-3">
            <button className="bg-primary text-white px-3 py-1.5 rounded flex items-center text-sm">
              <FaApple className="mr-2" />
              App
            </button>
            <button className="bg-primary text-white px-3 py-1.5 rounded flex items-center text-sm">
              <FaGooglePlay className="mr-2" />
              Google
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-base-400 border-dashed">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="mb-3 md:mb-0">
            &copy; {new Date().getFullYear()} Career Code all right reserved
          </p>
          <div className="flex space-x-4">
            <Link to="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:underline">
              Terms & Conditions
            </Link>
            <Link to="/security" className="hover:underline">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
