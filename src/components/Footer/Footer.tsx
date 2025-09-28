import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import logo1 from "../../assets/images/icons/Visa_Inc._logo.svg.png";
import logo2 from "../../assets/images/icons/sdad.png";
import logo3 from "../../assets/images/icons/tamara.png";
import logo4 from "../../assets/images/icons/tabby.png";
import logo5 from "../../assets/images/icons/express.png";
import logo6 from "../../assets/images/icons/master.png";
import { navbarData } from "../../data/navbarData";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-background text-foreground mt-20 w-full">
      {/* top bar */}
      <div className="w-full max-w-[90rem] mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* left */}
        <div className="flex flex-col items-start">
          <h2 className="text-lg font-bold mb-4">Top Picks</h2>
          <ul className="space-y-2">
            {navbarData.map((item) => (
              <li key={item.label}>
                <Link to="" className="hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* social */}
          <div className="flex gap-4 mt-6 text-xl">
            <a href="#" className="hover:text-accent transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-accent transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-accent transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-accent transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Terms */}
        <div>
          <h2 className="text-lg font-bold mb-4">Useful Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Customer Support
              </a>
            </li>
          </ul>
        </div>

        {/* right */}
        <div>
          <h2 className="text-lg font-bold mb-4">Subscribe</h2>
          <p className="text-sm mb-3">
            Get the latest updates, offers, and exclusive content delivered
            straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent text-black"
            />
            <button className="bg-foreground text-background px-4 py-2 rounded-md hover:opacity-90 transition w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-gray-600 py-6 relative overflow-hidden">
        <div className="max-w-[90rem] mx-auto px-4 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
          {/* leftt */}
          <p className="text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>

          {/* right */}
          <div className="relative w-full sm:w-auto overflow-hidden">
            <div className="flex gap-10 animate-marquee">
              {[logo1, logo2, logo3, logo4, logo5, logo6].map((logo, i) => (
                <img
                  key={i}
                  src={logo}
                  alt={`Logo ${i + 1}`}
                  className="h-6 flex-shrink-0 hover:scale-110 transition-transform duration-300"
                />
              ))}
              {[logo1, logo2, logo3, logo4, logo5, logo6].map((logo, i) => (
                <img
                  key={i + 10}
                  src={logo}
                  alt={`Logo ${i + 1}`}
                  className="h-6 flex-shrink-0 hover:scale-110 transition-transform duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
