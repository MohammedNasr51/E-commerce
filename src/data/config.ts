// Import images
import bn1FirstImage from "../assets/images/bn1-first-image.png";
import bn1SecondImage from "../assets/images/bn1-second-image.png";
import bn1ThirdImage from "../assets/images/bn1-third-image.png";
import bn1ForthImage from "../assets/images/bn1-forth-image.png";

import bn2BackgroundImage from "../assets/images/bn2-background-image.jpg";
import bn2Image from "../assets/images/bn2-image.png";

import bn3FirstImage from "../assets/images/bn3-first-image.png";
import bn3SecondImage from "../assets/images/bn3-second-image.png";
import bn3ThirdImage from "../assets/images/bn3-third-image.png";
import bn3ForthImage from "../assets/images/bn3-forth-image.png";
import bn3FifthImage from "../assets/images/bn3-fifth-image.png";
import bn3SixthImage from "../assets/images/bn3-sixth-image.png";
import bn3SeventhImage from "../assets/images/bn3-seventh-image.png";

import heroFirstImage from "../assets/images/hero-first-image.png";
import heroSecondImage from "../assets/images/hero-second-image.png";
import heroThirdImage from "../assets/images/hero-third-image.png";
import heroForthImage from "../assets/images/hero-forth-image.png";

import productImage from "../assets/images/product.png";

// Import icons
import darkLogo from "../assets/images/icons/dark-logo.svg";
import lightLogo from "../assets/images/icons/light-logo.svg";
import discountLightningIcon from "../assets/images/icons/discount-lightning-icon.svg";
import { Config } from "../types/home";

// Define types

// Main configuration object with mockup data
export const config: Config = {
  navbar: [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    {
      label: "Products",
      items: [
        { label: "Electronics", path: "/products/electronics" },
        { label: "Clothing", path: "/products/clothing" },
        { label: "Accessories", path: "/products/accessories" },
        { label: "Home & Garden", path: "/products/home-garden" },
        { label: "Sports", path: "/products/sports" },
      ],
    },
    { label: "Contact", path: "/contact" },
    { label: "Blog", path: "/blog" },
  ],
  footer: {
    links: [
      { label: "Privacy Policy", path: "/privacy" },
      { label: "Terms of Service", path: "/terms" },
      { label: "Help Center", path: "/help" },
      { label: "Shipping Info", path: "/shipping" },
      { label: "Returns", path: "/returns" },
    ],
    socials: [
      { platform: "Facebook", url: "https://facebook.com/yourstore" },
      { platform: "Twitter", url: "https://twitter.com/yourstore" },
      { platform: "Instagram", url: "https://instagram.com/yourstore" },
      { platform: "LinkedIn", url: "https://linkedin.com/company/yourstore" },
      { platform: "YouTube", url: "https://youtube.com/yourstore" },
    ],
    contact: {
      email: "support@yourstore.com",
      phone: "+1-800-123-4567",
      address: "1234 Commerce Street, San Francisco, CA 94102",
    },
    text: "© 2025 Your E-commerce Store. All rights reserved.",
  },
  theme: ["dark", "light", "warm", "cold", "auto"],
  fontFamily: "Cairo, Arial, sans-serif",
  photos: {
    logo: lightLogo,
    banner: bn2BackgroundImage,
    hero: [heroFirstImage, heroSecondImage, heroThirdImage, heroForthImage],
    banners: {
      bn1: [bn1FirstImage, bn1SecondImage, bn1ThirdImage, bn1ForthImage],
      bn2: {
        background: bn2BackgroundImage,
        image: bn2Image,
      },
      bn3: [
        bn3FirstImage,
        bn3SecondImage,
        bn3ThirdImage,
        bn3ForthImage,
        bn3FifthImage,
        bn3SixthImage,
        bn3SeventhImage,
      ],
    },
    product: productImage,
    icons: {
      darkLogo: darkLogo,
      lightLogo: lightLogo,
      discountLightning: discountLightningIcon,
    },
  },
};

// Export default
export default config;
