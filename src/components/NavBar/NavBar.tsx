import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaGlobe,
  FaSearch,
  FaChevronDown,
  FaBars,
  FaTimes,
  FaSun,
  FaMoon,
  FaSnowflake,
  FaFire,
} from "react-icons/fa";
import { BsBag, BsHeart } from "react-icons/bs";

import { useTranslation } from "react-i18next";
import lightlogo from "../../assets/images/icons/light-logo.svg";
import darklogo from "../../assets/images/icons/dark-logo.svg";
import { ThemeContext } from "../../context/ThemeContext";
import { navbarData } from "../../data/navbarData";

export default function NavBar() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { i18n } = useTranslation();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [themeMenu, setThemeMenu] = useState(false);

  const logo = theme === "dark" ? darklogo : lightlogo;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  return (
    <nav
      className={`top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "fixed bg-background shadow-md py-2"
          : "relative bg-background py-4"
      }`}
    >
      {!scrolled && (
        <>
          {/* Top Bar */}
          <div className="flex items-center justify-between px-4 sm:px-8 h-12">
            {/* logo */}
            <Link to="/" className="flex items-center gap-2">
              <img
                src={logo}
                alt="logo"
                className="transition-all duration-300 h-16 w-16 sm:h-20 sm:w-20"
              />
            </Link>

            {/* actions */}
            <div className="flex items-center gap-4 relative">
              {/* Language Switch */}
              <button
                onClick={toggleLanguage}
                className="text-foreground hover:text-primary transition text-sm flex items-center gap-1"
              >
                <FaGlobe />
                <span>{i18n.language === "en" ? "EN" : "AR"}</span>
              </button>

              {/* Theme Switcher */}
              <div className="relative">
                <button
                  onClick={() => setThemeMenu(!themeMenu)}
                  className="text-foreground hover:text-primary transition text-sm flex items-center gap-1"
                >
                  {theme === "light" && <FaSun />}
                  {theme === "dark" && <FaMoon />}
                  {theme === "warm" && <FaFire />}
                  {theme === "cold" && <FaSnowflake />}
                  <FaChevronDown className="text-xs" />
                </button>
                {themeMenu && (
                  <div className="absolute right-0 mt-2 bg-background rounded-lg shadow-lg py-2 min-w-[120px] z-[1000]">
                    <button
                      onClick={() => {
                        setTheme("light");
                        setThemeMenu(false);
                      }}
                      className="flex items-center gap-2 px-3 py-1 hover:bg-muted w-full"
                    >
                      <FaSun /> Light
                    </button>
                    <button
                      onClick={() => {
                        setTheme("dark");
                        setThemeMenu(false);
                      }}
                      className="flex items-center gap-2 px-3 py-1 hover:bg-muted w-full"
                    >
                      <FaMoon /> Dark
                    </button>
                    <button
                      onClick={() => {
                        setTheme("warm");
                        setThemeMenu(false);
                      }}
                      className="flex items-center gap-2 px-3 py-1 hover:bg-muted w-full"
                    >
                      <FaFire /> Warm
                    </button>
                    <button
                      onClick={() => {
                        setTheme("cold");
                        setThemeMenu(false);
                      }}
                      className="flex items-center gap-2 px-3 py-1 hover:bg-muted w-full"
                    >
                      <FaSnowflake /> Cold
                    </button>
                  </div>
                )}
              </div>

              <Link
                to="/profile"
                className="text-foreground hover:text-primary transition text-sm"
              >
                My Account
              </Link>
            </div>
          </div>

          {/* Main Bar */}
          <div className="flex items-center justify-center px-4 sm:px-8 sm:justify-between pb-2">
            {/* desktop categories */}
            <div className="hidden lg:flex items-center gap-6 relative z-[100]">
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
                      <div className="absolute top-full left-0 bg-background rounded-lg mt-2 py-2 min-w-[180px] shadow-lg animate-fadeIn z-[1000]">
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
            <div className="hidden sm:flex items-center gap-2 bg-muted rounded-full px-3 py-1 flex-1 max-w-sm border border-foreground">
              <FaSearch className="text-foreground" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent text-sm outline-none w-full"
              />
            </div>

            {/* right icons */}
            <div className="flex items-center gap-4">
              <Link
                to="/cart"
                className="hover:text-primary text-foreground transition text-lg"
              >
                <BsBag />
              </Link>
              <Link
                to="/favorites"
                className="hover:text-primary text-foreground transition text-lg"
              >
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
        </>
      )}

      {scrolled && (
        <div className="flex items-center justify-between px-4 sm:px-8 h-14">
          {/* logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="logo" className="h-20 w-20" />
          </Link>

          {/* quick menu */}
          <div className="hidden lg:flex items-center gap-6">
            {navbarData.map((item) =>
              !item.items ? (
                <Link
                  key={item.label}
                  to={item.path!}
                  className="text-sm text-foreground hover:text-primary transition"
                >
                  {item.label}
                </Link>
              ) : null
            )}
          </div>

          {/* icons */}
          <div className="flex items-center gap-4">
            <Link
              to="/cart"
              className="hover:text-primary text-foreground transition text-lg"
            >
              <BsBag />
            </Link>
            <Link
              to="/favorites"
              className="hover:text-primary text-foreground transition text-lg"
            >
              <BsHeart />
            </Link>
            <button
              className="lg:hidden text-2xl text-foreground"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
