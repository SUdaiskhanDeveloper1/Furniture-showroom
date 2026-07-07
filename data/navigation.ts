import { NavLink } from "@/types";

export const mainNav: NavLink[] = [
  {
    label: "Shop Sofas",
    href: "/shop",
    children: [
      { label: "Corner Sofas", href: "/shop/corner-sofas", description: "Space-smart designs" },
      { label: "Leather Sofas", href: "/shop/leather-sofas", description: "Timeless & durable" },
      { label: "Fabric Sofas", href: "/shop/fabric-sofas", description: "Soft & warm" },
      { label: "Sofa Beds", href: "/shop/sofa-beds", description: "Comfort by day & night" },
      { label: "Recliner Sofas", href: "/shop/recliner-sofas", description: "Kick back and relax" },
      { label: "Armchairs & Accent Chairs", href: "/shop/armchairs", description: "The finishing touch" },
      { label: "Coffee Tables", href: "/shop/coffee-tables", description: "Living room centrepieces" },
      { label: "Dining Sets", href: "/shop/dining-sets", description: "For every household" },
    ],
  },
  {
    label: "Info",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Home Inspiration", href: "/inspiration" },
      { label: "Sofa Sale", href: "/sale" },
      { label: "Black Friday Sale", href: "/black-friday" },
      { label: "Careers", href: "/careers" },
      { label: "Press Enquiries", href: "/press" },
    ],
  },
];

export const footerColumns = {
  locations: [
    { label: "Find Us", href: "/showrooms" },
    { label: "Hertford Showroom", href: "/showrooms/hertford" },
    { label: "Liverpool Showroom", href: "/showrooms/liverpool" },
    { label: "Glasgow Showroom", href: "/showrooms/glasgow" },
    { label: "Croydon Showroom", href: "/showrooms/croydon" },
    { label: "Newcastle Showroom", href: "/showrooms/newcastle" },
  ],
  customerHelp: [
    { label: "Customer Service", href: "/customer-service" },
    { label: "Finance", href: "/finance" },
    { label: "Delivery", href: "/delivery" },
    { label: "Platinum Care Plan", href: "/platinum-care-plan" },
    { label: "Returns", href: "/returns" },
    { label: "Warranty", href: "/warranty" },
    { label: "Contact Us", href: "/contact" },
  ],
  explore: [
    { label: "About Us", href: "/about" },
    { label: "Sofa Sale", href: "/sale" },
    { label: "Home Inspiration", href: "/inspiration" },
    { label: "Black Friday Sale", href: "/black-friday" },
    { label: "Careers", href: "/careers" },
    { label: "Press Enquiries", href: "/press" },
  ],
};
