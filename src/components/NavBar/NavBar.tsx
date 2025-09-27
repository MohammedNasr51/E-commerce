import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaGlobe,
  FaSearch,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { BsBag , BsHeart } from "react-icons/bs";

import { useTranslation } from "react-i18next";
import lightlogo from "../../assets/images/icons/light-logo.svg";
import darklogo from "../../assets/images/icons/dark-logo.svg";
import { ThemeContext } from "../../context/ThemeContext";
import { navbarData } from "../../data/navbarData";

export default function NavBar() {
  const { theme } = useContext(ThemeContext);
  const { i18n } = useTranslation();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const logo = theme === "dark" ? darklogo : lightlogo;

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-background z-50 ">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 sm:px-8">
        {/* logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-16 w-16 sm:h-24 sm:w-24" />
        </Link>

        {/* actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="text-foreground hover:text-primary transition text-sm flex items-center gap-1"
          >
            <FaGlobe />
            <span>{i18n.language === "en" ? "EN" : "AR"}</span>
          </button>
          <Link
            to="/profile"
            className="text-foreground hover:text-primary transition text-sm"
          >
            My Account
          </Link>
        </div>
      </div>

      {/* Main Bar */}
      <div className="flex items-center justify-center px-4 sm:px-8 sm:justify-between pb-4">
        {/* desktop categories */}
        <div className="hidden lg:flex items-center gap-6">
          {navbarData.map((item) =>
            item.items ? (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 text-foreground hover:text-primary transition text-sm font-medium">
                  {item.label} <FaChevronDown className="text-xs" />
                </button>
                {openDropdown === item.label && (
                  <div className="absolute top-full left-0 bg-card rounded-lg mt-2 py-2 min-w-[180px] shadow-lg animate-fadeIn">
                    {item.items.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.path}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.path!}
                className="text-foreground hover:text-primary transition text-sm font-medium"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* search */}
        <div className="hidden sm:flex items-center gap-2 bg-muted rounded-full px-3 py-2 flex-1 max-w-sm border border-foreground">
          <FaSearch className="text-foreground" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-sm outline-none w-full"
          />
        </div>

        {/* right icons */}
        <div className="flex items-center gap-4">
          <Link to="/cart" className="hover:text-primary text-foreground transition text-lg">
            <BsBag />
          </Link>
          <Link to="/favorites" className="hover:text-primary text-foreground transition text-lg">
            <BsHeart />
          </Link>

          {/* search icon for mobile */}
          <button
            className="sm:hidden text-lg text-foreground"
            onClick={() => setShowSearch(!showSearch)}
          >
            <FaSearch />
          </button>

          {/* mobile menu toggle */}
          <button
            className="lg:hidden text-2xl text-foreground"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* mobile search */}
      {showSearch && (
        <div className="sm:hidden px-4 pb-3 animate-fadeIn mt-4">
          <div className="flex items-center gap-2 bg-muted rounded-full px-3 py-2 border border-foreground w-full">
            <FaSearch className="text-foreground" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-sm outline-none flex-1"
            />
          </div>
        </div>
      )}

      {/* mobile menu */}
      {mobileMenu && (
        <div className="lg:hidden bg-card shadow-md animate-slideDown px-4 py-4 space-y-3">
          {navbarData.map((item) =>
            item.items ? (
              <div key={item.label} className="space-y-1">
                <button
                  className="flex items-center justify-between w-full text-foreground hover:text-primary transition text-sm font-medium"
                  onClick={() =>
                    setOpenDropdown(openDropdown === item.label ? null : item.label)
                  }
                >
                  {item.label}
                  <FaChevronDown
                    className={`text-xs transition-transform ${
                      openDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === item.label && (
                  <div className="pl-4 space-y-2">
                    {item.items.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.path}
                        className="block text-sm text-foreground hover:text-primary transition"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.path!}
                className="block text-foreground hover:text-primary transition text-sm font-medium"
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
}
