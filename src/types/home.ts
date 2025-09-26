export interface NavbarItem {
  label: string;
  path?: string;
  items?: NavbarItem[];
}

export interface FooterLink {
  label: string;
  path: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface Contact {
  email: string;
  phone: string;
  address: string;
}

export interface Footer {
  links: FooterLink[];
  socials: SocialLink[];
  contact: Contact;
  text: string;
}

export interface Photos {
  logo: string;
  banner: string;
  hero: string[];
  banners: {
    bn1: string[];
    bn2: {
      background: string;
      image: string;
    };
    bn3: string[];
  };
  product: string;
  icons: {
    darkLogo: string;
    lightLogo: string;
    discountLightning: string;
  };
}

export interface Config {
  navbar: NavbarItem[];
  footer: Footer;
  theme: string[];
  fontFamily: string;
  photos: Photos;
}