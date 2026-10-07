// Centralized Header Data used across all header variations in src/data/

export const teamSyncHeaderData = {
  brand: {
    name: "TeamSync",
    href: "#",
  },
  navigation: [
    { id: "about", label: "About Us", href: "#about" },
    { id: "products", label: "Products", href: "#products" },
    { id: "services", label: "Services", href: "#services" },
    { id: "features", label: "Features", href: "#features" },
  ],
  actions: {
    login: { label: "Log In", href: "#login" },
    signup: { label: "Sign Up", href: "#signup" },
  },
};

export const nurapHeaderData = {
  brand: {
    name: "NURAP",
    href: "#",
  },
  menuLabel: "MANU",
  contact: {
    label: "CONTACT",
    href: "#contact",
  },
  navigation: [
    { id: "collections", label: "Collections", href: "#collections" },
    { id: "editorial", label: "Editorial", href: "#editorial" },
    { id: "archive", label: "Archive", href: "#archive" },
    { id: "atelier", label: "Atelier", href: "#atelier" },
    { id: "journal", label: "Journal", href: "#journal" },
    { id: "contact", label: "Contact Us", href: "#contact" },
  ],
};

export const untitledUiHeaderData = {
  brand: {
    name: "Untitled UI",
    href: "#",
  },
  navigation: [
    { id: "pricing", label: "Pricing", href: "#pricing" },
    { id: "bank-connect", label: "Bank Connect", href: "#bank-connect" },
    { 
      id: "financial-guides", 
      label: "Financial Guides", 
      href: "#financial-guides", 
      hasDropdown: true,
      dropdownItems: ["Getting Started", "Tax Optimization", "Investment Strategies", "Crypto & Cashflow"]
    },
    { id: "about", label: "About Us", href: "#about" },
    { 
      id: "blog", 
      label: "Blog", 
      href: "#blog", 
      hasDropdown: true,
      dropdownItems: ["Product Updates", "Engineering", "Founder Stories", "Fintech Insights"]
    },
  ],
  actions: {
    login: { label: "Log in", href: "#login" },
    getStarted: { label: "Get started", href: "#get-started" },
  },
};

export const blekHeaderData = {
  brand: {
    badge: "Blek",
    name: "World",
    href: "#",
  },
  navigation: [
    { id: "home", label: "Home", href: "#home" },
    { id: "initiatives", label: "Initiatives", href: "#initiatives" },
    { id: "stats", label: "Stats", href: "#stats" },
    { id: "about", label: "About", href: "#about" },
    { id: "blog", label: "Blog", href: "#blog" },
    { id: "contact", label: "Contact", href: "#contact" },
  ],
  action: {
    label: "Register Now",
    href: "#register",
  },
};

export const soRunHeaderData = {
  brand: {
    name: "SoRun",
    tagline: "Speed & Style",
    href: "#",
    logoText: "SoRun",
  },
  navigation: [
    { id: "home", label: "Home", href: "#home", badge: null },
    { id: "shop", label: "Shop", href: "#shop", badge: "New" },
    { id: "delivery", label: "Delivery", href: "#delivery", badge: null },
    { id: "boxes", label: "Boxes", href: "#boxes", badge: null },
    { id: "about", label: "About", href: "#about", badge: null },
  ],
  actions: {
    cart: {
      label: "Cart",
      count: 2,
      href: "#cart",
    },
    login: {
      label: "Login",
      href: "#login",
    },
    signup: {
      label: "Sign up",
      href: "#signup",
    },
  },
};

export const headerData = soRunHeaderData;

export default headerData;
