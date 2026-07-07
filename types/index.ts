export interface Product {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  price: number;
  wasPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  images: string[];
  colors: string[];
  description: string;
  features: string[];
  dimensions: { label: string; value: string }[];
  tag?: "New" | "Sale" | "Best Seller" | "Clearance";
  inStock: boolean;
  deliveryEstimate: string;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
}

export interface Showroom {
  slug: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  hours: { day: string; time: string }[];
  image: string;
  mapEmbed: string;
  description: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  image: string;
  category: string;
  date: string;
  readTime: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}
