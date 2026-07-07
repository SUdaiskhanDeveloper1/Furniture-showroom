import { Product } from "@/types";

const dims = (seat: string, depth: string, height: string, width: string) => [
  { label: "Width", value: width },
  { label: "Depth", value: depth },
  { label: "Height", value: height },
  { label: "Seat Height", value: seat },
];

export const products: Product[] = [
  // Corner Sofas
  {
    slug: "harlow-corner-sofa",
    name: "Harlow Corner Sofa",
    category: "Corner Sofas",
    categorySlug: "corner-sofas",
    price: 1399,
    wasPrice: 1899,
    rating: 4.7,
    reviewCount: 214,
    image: "https://picsum.photos/seed/harlow-corner/900/700",
    images: [
      "https://picsum.photos/seed/harlow-corner-1/1200/900",
      "https://picsum.photos/seed/harlow-corner-2/1200/900",
      "https://picsum.photos/seed/harlow-corner-3/1200/900",
    ],
    colors: ["Charcoal Grey", "Oatmeal", "Dusky Pink"],
    description:
      "The Harlow Corner Sofa combines deep cushioning with a low-profile silhouette, upholstered in our signature brushed weave fabric. A reversible chaise means it fits either side of the room.",
    features: [
      "Reversible chaise unit",
      "High-density foam and fibre-wrapped cushions",
      "Solid hardwood frame with 15-year guarantee",
      "Removable, washable cushion covers",
    ],
    dimensions: dims("48cm", "165cm", "88cm", "285cm"),
    tag: "Best Seller",
    inStock: true,
    deliveryEstimate: "3-4 weeks",
  },
  {
    slug: "kensington-corner-sofa",
    name: "Kensington Corner Sofa",
    category: "Corner Sofas",
    categorySlug: "corner-sofas",
    price: 1699,
    rating: 4.5,
    reviewCount: 98,
    image: "https://picsum.photos/seed/kensington-corner/900/700",
    images: [
      "https://picsum.photos/seed/kensington-corner-1/1200/900",
      "https://picsum.photos/seed/kensington-corner-2/1200/900",
    ],
    colors: ["Midnight Blue", "Stone", "Forest Green"],
    description:
      "A sculptural, XL corner sofa built for open-plan living. Deep seats and a wide chaise make Kensington the ultimate weekend lounging spot.",
    features: [
      "XL wide chaise",
      "Pocket-sprung seat base",
      "Scatter-back cushions included",
      "Stain-resistant weave fabric",
    ],
    dimensions: dims("46cm", "180cm", "90cm", "310cm"),
    tag: "New",
    inStock: true,
    deliveryEstimate: "4-5 weeks",
  },
  {
    slug: "bermondsey-corner-sofa",
    name: "Bermondsey Corner Sofa",
    category: "Corner Sofas",
    categorySlug: "corner-sofas",
    price: 1099,
    wasPrice: 1349,
    rating: 4.4,
    reviewCount: 156,
    image: "https://picsum.photos/seed/bermondsey-corner/900/700",
    images: [
      "https://picsum.photos/seed/bermondsey-corner-1/1200/900",
      "https://picsum.photos/seed/bermondsey-corner-2/1200/900",
    ],
    colors: ["Light Grey", "Tan"],
    description:
      "A compact corner sofa designed for smaller living rooms and flats without compromising on comfort.",
    features: [
      "Space-saving footprint",
      "Wooden feet with brass finish",
      "Interchangeable armrests",
    ],
    dimensions: dims("45cm", "155cm", "85cm", "245cm"),
    inStock: true,
    deliveryEstimate: "2-3 weeks",
  },

  // Leather Sofas
  {
    slug: "chester-leather-sofa",
    name: "Chester 3-Seater Leather Sofa",
    category: "Leather Sofas",
    categorySlug: "leather-sofas",
    price: 1899,
    rating: 4.8,
    reviewCount: 342,
    image: "https://picsum.photos/seed/chester-leather/900/700",
    images: [
      "https://picsum.photos/seed/chester-leather-1/1200/900",
      "https://picsum.photos/seed/chester-leather-2/1200/900",
    ],
    colors: ["Tan Leather", "Espresso Leather", "Black Leather"],
    description:
      "A modern take on the Chesterfield, the Chester sofa is upholstered in full-grain leather that only gets better with age.",
    features: [
      "Full-grain leather upholstery",
      "Deep button-tufted back cushions",
      "Solid beech frame",
      "10-year frame guarantee",
    ],
    dimensions: dims("47cm", "95cm", "82cm", "210cm"),
    tag: "Best Seller",
    inStock: true,
    deliveryEstimate: "4-6 weeks",
  },
  {
    slug: "soho-leather-sofa",
    name: "Soho 2-Seater Leather Sofa",
    category: "Leather Sofas",
    categorySlug: "leather-sofas",
    price: 1299,
    wasPrice: 1599,
    rating: 4.6,
    reviewCount: 87,
    image: "https://picsum.photos/seed/soho-leather/900/700",
    images: [
      "https://picsum.photos/seed/soho-leather-1/1200/900",
      "https://picsum.photos/seed/soho-leather-2/1200/900",
    ],
    colors: ["Cognac", "Charcoal Leather"],
    description:
      "Clean lines and a low, wide seat make Soho a favourite for contemporary apartments and studies.",
    features: [
      "Slim track arms",
      "Foam and feather seat cushions",
      "Tapered oak legs",
    ],
    dimensions: dims("46cm", "90cm", "80cm", "175cm"),
    tag: "Sale",
    inStock: true,
    deliveryEstimate: "3-4 weeks",
  },
  {
    slug: "camden-leather-corner",
    name: "Camden Leather Corner Sofa",
    category: "Leather Sofas",
    categorySlug: "leather-sofas",
    price: 2199,
    rating: 4.7,
    reviewCount: 63,
    image: "https://picsum.photos/seed/camden-leather/900/700",
    images: [
      "https://picsum.photos/seed/camden-leather-1/1200/900",
      "https://picsum.photos/seed/camden-leather-2/1200/900",
    ],
    colors: ["Black Leather", "Dark Brown Leather"],
    description:
      "Big, bold and built for entertaining — Camden pairs a leather corner unit with an oversized ottoman.",
    features: [
      "Includes matching storage ottoman",
      "Reinforced corner joint construction",
      "Easy-clean leather finish",
    ],
    dimensions: dims("48cm", "170cm", "86cm", "295cm"),
    inStock: true,
    deliveryEstimate: "5-6 weeks",
  },

  // Fabric Sofas
  {
    slug: "willow-fabric-sofa",
    name: "Willow 3-Seater Fabric Sofa",
    category: "Fabric Sofas",
    categorySlug: "fabric-sofas",
    price: 949,
    wasPrice: 1199,
    rating: 4.6,
    reviewCount: 271,
    image: "https://picsum.photos/seed/willow-fabric/900/700",
    images: [
      "https://picsum.photos/seed/willow-fabric-1/1200/900",
      "https://picsum.photos/seed/willow-fabric-2/1200/900",
    ],
    colors: ["Oatmeal Boucle", "Sage Green", "Warm Grey", "Terracotta"],
    description:
      "Willow's plump, boucle-wrapped cushions and rounded arms make it the softest seat in the house.",
    features: [
      "Boucle textured fabric",
      "Feather-topped cushions",
      "Available in 4 colourways",
    ],
    dimensions: dims("47cm", "98cm", "84cm", "205cm"),
    tag: "Sale",
    inStock: true,
    deliveryEstimate: "2-3 weeks",
  },
  {
    slug: "amara-fabric-sofa",
    name: "Amara 4-Seater Fabric Sofa",
    category: "Fabric Sofas",
    categorySlug: "fabric-sofas",
    price: 1249,
    rating: 4.5,
    reviewCount: 132,
    image: "https://picsum.photos/seed/amara-fabric/900/700",
    images: [
      "https://picsum.photos/seed/amara-fabric-1/1200/900",
      "https://picsum.photos/seed/amara-fabric-2/1200/900",
    ],
    colors: ["Navy", "Mustard", "Charcoal"],
    description:
      "Extra length for growing families — Amara seats four in generous, deep-filled comfort.",
    features: [
      "Seats up to four adults",
      "Removable back cushions",
      "Water-repellent fabric treatment",
    ],
    dimensions: dims("46cm", "96cm", "83cm", "260cm"),
    tag: "New",
    inStock: true,
    deliveryEstimate: "3-4 weeks",
  },
  {
    slug: "primrose-snuggle-chair",
    name: "Primrose Fabric Snuggle Chair",
    category: "Fabric Sofas",
    categorySlug: "fabric-sofas",
    price: 649,
    rating: 4.3,
    reviewCount: 74,
    image: "https://picsum.photos/seed/primrose-snuggle/900/700",
    images: [
      "https://picsum.photos/seed/primrose-snuggle-1/1200/900",
      "https://picsum.photos/seed/primrose-snuggle-2/1200/900",
    ],
    colors: ["Blush Pink", "Grey"],
    description:
      "Wide enough for two, Primrose is a cuddle-sized snuggle chair perfect for movie nights.",
    features: ["Extra-wide single seat", "Curved wraparound back", "Scatter cushions included"],
    dimensions: dims("45cm", "100cm", "90cm", "130cm"),
    inStock: true,
    deliveryEstimate: "2-3 weeks",
  },

  // Sofa Beds
  {
    slug: "brooklyn-sofa-bed",
    name: "Brooklyn Click-Clack Sofa Bed",
    category: "Sofa Beds",
    categorySlug: "sofa-beds",
    price: 799,
    wasPrice: 999,
    rating: 4.4,
    reviewCount: 189,
    image: "https://picsum.photos/seed/brooklyn-sofabed/900/700",
    images: [
      "https://picsum.photos/seed/brooklyn-sofabed-1/1200/900",
      "https://picsum.photos/seed/brooklyn-sofabed-2/1200/900",
    ],
    colors: ["Grey Linen", "Navy Linen"],
    description:
      "A three-in-one design that folds flat from sofa to lounger to a full double bed in seconds.",
    features: [
      "Click-clack reclining mechanism",
      "Converts to full double bed",
      "Includes sprung mattress topper",
    ],
    dimensions: dims("45cm", "90cm", "85cm", "195cm"),
    tag: "Sale",
    inStock: true,
    deliveryEstimate: "2-3 weeks",
  },
  {
    slug: "shoreditch-corner-sofa-bed",
    name: "Shoreditch Corner Sofa Bed",
    category: "Sofa Beds",
    categorySlug: "sofa-beds",
    price: 1449,
    rating: 4.5,
    reviewCount: 112,
    image: "https://picsum.photos/seed/shoreditch-sofabed/900/700",
    images: [
      "https://picsum.photos/seed/shoreditch-sofabed-1/1200/900",
      "https://picsum.photos/seed/shoreditch-sofabed-2/1200/900",
    ],
    colors: ["Charcoal", "Light Grey"],
    description:
      "Corner sofa by day, king-size bed by night, with under-storage in the chaise for bedding.",
    features: [
      "Hidden bedding storage",
      "Underslung pull-out mechanism",
      "Reversible chaise",
    ],
    dimensions: dims("47cm", "160cm", "88cm", "270cm"),
    inStock: true,
    deliveryEstimate: "4-5 weeks",
  },
  {
    slug: "islington-sofa-bed",
    name: "Islington 2-Seater Sofa Bed",
    category: "Sofa Beds",
    categorySlug: "sofa-beds",
    price: 699,
    rating: 4.2,
    reviewCount: 58,
    image: "https://picsum.photos/seed/islington-sofabed/900/700",
    images: [
      "https://picsum.photos/seed/islington-sofabed-1/1200/900",
      "https://picsum.photos/seed/islington-sofabed-2/1200/900",
    ],
    colors: ["Mustard", "Teal"],
    description:
      "A compact sofa bed with bold colour options, ideal for studio flats and guest rooms.",
    features: ["Single-motion pull-out frame", "Compact footprint", "Machine-washable cover"],
    dimensions: dims("44cm", "85cm", "80cm", "165cm"),
    tag: "New",
    inStock: true,
    deliveryEstimate: "2-3 weeks",
  },

  // Recliner Sofas
  {
    slug: "houston-recliner-sofa",
    name: "Houston Power Recliner Sofa",
    category: "Recliner Sofas",
    categorySlug: "recliner-sofas",
    price: 1799,
    rating: 4.6,
    reviewCount: 97,
    image: "https://picsum.photos/seed/houston-recliner/900/700",
    images: [
      "https://picsum.photos/seed/houston-recliner-1/1200/900",
      "https://picsum.photos/seed/houston-recliner-2/1200/900",
    ],
    colors: ["Grey Leather", "Brown Leather"],
    description:
      "Dual power recliners with USB charging built into the armrests — the ultimate home cinema seat.",
    features: [
      "Dual power reclining seats",
      "USB charging ports",
      "Adjustable headrests",
    ],
    dimensions: dims("46cm", "100cm", "105cm", "220cm"),
    tag: "New",
    inStock: true,
    deliveryEstimate: "5-6 weeks",
  },
  {
    slug: "dakota-manual-recliner",
    name: "Dakota Manual Recliner Sofa",
    category: "Recliner Sofas",
    categorySlug: "recliner-sofas",
    price: 1199,
    wasPrice: 1449,
    rating: 4.4,
    reviewCount: 121,
    image: "https://picsum.photos/seed/dakota-recliner/900/700",
    images: [
      "https://picsum.photos/seed/dakota-recliner-1/1200/900",
      "https://picsum.photos/seed/dakota-recliner-2/1200/900",
    ],
    colors: ["Slate Grey", "Chestnut"],
    description:
      "Simple side-lever reclining action on both end seats, upholstered in a hard-wearing woven fabric.",
    features: ["Manual lever recline", "Hard-wearing woven fabric", "Sturdy hardwood frame"],
    dimensions: dims("46cm", "98cm", "100cm", "215cm"),
    tag: "Sale",
    inStock: true,
    deliveryEstimate: "3-4 weeks",
  },
  {
    slug: "austin-recliner-armchair",
    name: "Austin Recliner Armchair",
    category: "Recliner Sofas",
    categorySlug: "recliner-sofas",
    price: 649,
    rating: 4.5,
    reviewCount: 145,
    image: "https://picsum.photos/seed/austin-recliner/900/700",
    images: [
      "https://picsum.photos/seed/austin-recliner-1/1200/900",
      "https://picsum.photos/seed/austin-recliner-2/1200/900",
    ],
    colors: ["Black Leather", "Tan Leather", "Grey Fabric"],
    description:
      "A single power recliner armchair with a matching footstool, sold separately.",
    features: ["Power recline & lift assist", "360-degree swivel base", "Compatible footstool available"],
    dimensions: dims("45cm", "90cm", "102cm", "85cm"),
    inStock: true,
    deliveryEstimate: "3-4 weeks",
  },

  // Armchairs
  {
    slug: "wren-accent-chair",
    name: "Wren Accent Armchair",
    category: "Armchairs & Accent Chairs",
    categorySlug: "armchairs",
    price: 449,
    rating: 4.7,
    reviewCount: 203,
    image: "https://picsum.photos/seed/wren-armchair/900/700",
    images: [
      "https://picsum.photos/seed/wren-armchair-1/1200/900",
      "https://picsum.photos/seed/wren-armchair-2/1200/900",
    ],
    colors: ["Mustard Velvet", "Emerald Velvet", "Blush Velvet"],
    description:
      "A jewel-toned velvet accent chair with brass-finished legs — the finishing touch for any room.",
    features: ["Plush velvet upholstery", "Brass-finished tapered legs", "Deep button back"],
    dimensions: dims("45cm", "80cm", "85cm", "75cm"),
    tag: "Best Seller",
    inStock: true,
    deliveryEstimate: "2-3 weeks",
  },
  {
    slug: "harper-wingback-chair",
    name: "Harper Wingback Chair",
    category: "Armchairs & Accent Chairs",
    categorySlug: "armchairs",
    price: 549,
    wasPrice: 699,
    rating: 4.5,
    reviewCount: 88,
    image: "https://picsum.photos/seed/harper-wingback/900/700",
    images: [
      "https://picsum.photos/seed/harper-wingback-1/1200/900",
      "https://picsum.photos/seed/harper-wingback-2/1200/900",
    ],
    colors: ["Herringbone Grey", "Forest Check"],
    description:
      "A classic wingback silhouette updated with a slim profile and contemporary fabrics.",
    features: ["High wingback design", "Wooden bun feet", "Traditional deep buttoning"],
    dimensions: dims("46cm", "85cm", "108cm", "78cm"),
    tag: "Sale",
    inStock: true,
    deliveryEstimate: "2-3 weeks",
  },
  {
    slug: "milo-rocking-chair",
    name: "Milo Rattan Rocking Chair",
    category: "Armchairs & Accent Chairs",
    categorySlug: "armchairs",
    price: 329,
    rating: 4.6,
    reviewCount: 61,
    image: "https://picsum.photos/seed/milo-rocking/900/700",
    images: [
      "https://picsum.photos/seed/milo-rocking-1/1200/900",
      "https://picsum.photos/seed/milo-rocking-2/1200/900",
    ],
    colors: ["Natural Rattan"],
    description:
      "Hand-woven natural rattan on a solid oak rocking base, with a removable cushion set.",
    features: ["Hand-woven rattan back", "Solid oak rocking base", "Removable seat cushion"],
    dimensions: dims("44cm", "75cm", "95cm", "68cm"),
    tag: "New",
    inStock: true,
    deliveryEstimate: "2-3 weeks",
  },

  // Coffee Tables
  {
    slug: "oslo-oak-coffee-table",
    name: "Oslo Solid Oak Coffee Table",
    category: "Coffee Tables",
    categorySlug: "coffee-tables",
    price: 349,
    rating: 4.8,
    reviewCount: 176,
    image: "https://picsum.photos/seed/oslo-coffee/900/700",
    images: [
      "https://picsum.photos/seed/oslo-coffee-1/1200/900",
      "https://picsum.photos/seed/oslo-coffee-2/1200/900",
    ],
    colors: ["Natural Oak", "Walnut"],
    description:
      "Scandinavian-inspired solid oak coffee table with a lower storage shelf.",
    features: ["Solid oak construction", "Lower storage shelf", "Rounded safety edges"],
    dimensions: dims("-", "60cm", "45cm", "120cm"),
    tag: "Best Seller",
    inStock: true,
    deliveryEstimate: "1-2 weeks",
  },
  {
    slug: "marbella-marble-coffee-table",
    name: "Marbella Marble-Top Coffee Table",
    category: "Coffee Tables",
    categorySlug: "coffee-tables",
    price: 429,
    wasPrice: 529,
    rating: 4.6,
    reviewCount: 54,
    image: "https://picsum.photos/seed/marbella-coffee/900/700",
    images: [
      "https://picsum.photos/seed/marbella-coffee-1/1200/900",
      "https://picsum.photos/seed/marbella-coffee-2/1200/900",
    ],
    colors: ["White Marble / Gold", "Black Marble / Black"],
    description:
      "A genuine marble top paired with a powder-coated steel frame for a striking centrepiece.",
    features: ["Genuine marble top", "Powder-coated steel frame", "Anti-scratch pads included"],
    dimensions: dims("-", "70cm", "40cm", "110cm"),
    tag: "Sale",
    inStock: true,
    deliveryEstimate: "2-3 weeks",
  },
  {
    slug: "hoxton-glass-coffee-table",
    name: "Hoxton Glass & Wood Coffee Table",
    category: "Coffee Tables",
    categorySlug: "coffee-tables",
    price: 279,
    rating: 4.3,
    reviewCount: 39,
    image: "https://picsum.photos/seed/hoxton-coffee/900/700",
    images: [
      "https://picsum.photos/seed/hoxton-coffee-1/1200/900",
      "https://picsum.photos/seed/hoxton-coffee-2/1200/900",
    ],
    colors: ["Clear / Oak"],
    description:
      "Tempered glass top on a light oak frame — a versatile piece for modern living rooms.",
    features: ["8mm tempered glass top", "Light oak frame", "Easy self-assembly"],
    dimensions: dims("-", "65cm", "42cm", "115cm"),
    inStock: true,
    deliveryEstimate: "1-2 weeks",
  },

  // Dining Sets
  {
    slug: "copenhagen-dining-set",
    name: "Copenhagen 6-Seater Dining Set",
    category: "Dining Sets",
    categorySlug: "dining-sets",
    price: 1099,
    rating: 4.5,
    reviewCount: 82,
    image: "https://picsum.photos/seed/copenhagen-dining/900/700",
    images: [
      "https://picsum.photos/seed/copenhagen-dining-1/1200/900",
      "https://picsum.photos/seed/copenhagen-dining-2/1200/900",
    ],
    colors: ["Oak / Grey Fabric"],
    description:
      "A solid oak dining table paired with six upholstered dining chairs in a soft grey weave.",
    features: ["Seats 6 comfortably", "Solid oak table top", "Upholstered dining chairs included"],
    dimensions: dims("-", "90cm", "76cm", "180cm"),
    tag: "New",
    inStock: true,
    deliveryEstimate: "4-5 weeks",
  },
  {
    slug: "bistro-2-seater-dining-set",
    name: "Bistro 2-Seater Dining Set",
    category: "Dining Sets",
    categorySlug: "dining-sets",
    price: 349,
    wasPrice: 429,
    rating: 4.4,
    reviewCount: 47,
    image: "https://picsum.photos/seed/bistro-dining/900/700",
    images: [
      "https://picsum.photos/seed/bistro-dining-1/1200/900",
      "https://picsum.photos/seed/bistro-dining-2/1200/900",
    ],
    colors: ["Black / Oak"],
    description:
      "A compact round table and two chairs, perfect for kitchen nooks and small dining spaces.",
    features: ["Space-saving round top", "Powder-coated steel legs", "Stackable chairs"],
    dimensions: dims("-", "75cm", "75cm", "75cm"),
    tag: "Sale",
    inStock: true,
    deliveryEstimate: "1-2 weeks",
  },
  {
    slug: "brooklyn-extending-dining-set",
    name: "Brooklyn Extending 8-Seater Dining Set",
    category: "Dining Sets",
    categorySlug: "dining-sets",
    price: 1599,
    rating: 4.7,
    reviewCount: 29,
    image: "https://picsum.photos/seed/brooklyn-dining/900/700",
    images: [
      "https://picsum.photos/seed/brooklyn-dining-1/1200/900",
      "https://picsum.photos/seed/brooklyn-dining-2/1200/900",
    ],
    colors: ["Walnut / Black"],
    description:
      "An extending table that grows from six to eight seats, with matching black-frame dining chairs.",
    features: ["Extends from 6 to 8 seats", "Butterfly leaf mechanism", "Matching chairs included"],
    dimensions: dims("-", "95cm", "76cm", "220cm"),
    inStock: true,
    deliveryEstimate: "5-6 weeks",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string) {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getFeaturedProducts() {
  return products.filter((p) => p.tag === "Best Seller").slice(0, 8);
}

export function getSaleProducts() {
  return products.filter((p) => p.wasPrice);
}

export function getNewProducts() {
  return products.filter((p) => p.tag === "New");
}
