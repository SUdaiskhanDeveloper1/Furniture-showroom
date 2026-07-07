import { Category } from "@/types";

export const categories: Category[] = [
  {
    slug: "corner-sofas",
    name: "Corner Sofas",
    description:
      "Maximise your living space with our range of corner sofas, designed for comfort and built to fit snugly into any room layout.",
    image: "https://picsum.photos/seed/corner-sofa-cat/900/700",
    productCount: 3,
  },
  {
    slug: "leather-sofas",
    name: "Leather Sofas",
    description:
      "Timeless, durable and easy to maintain — our leather sofas bring a refined, contemporary edge to any living room.",
    image: "https://picsum.photos/seed/leather-sofa-cat/900/700",
    productCount: 3,
  },
  {
    slug: "fabric-sofas",
    name: "Fabric Sofas",
    description:
      "Soft, warm and available in dozens of colourways, our fabric sofas are the heart of a cosy family home.",
    image: "https://picsum.photos/seed/fabric-sofa-cat/900/700",
    productCount: 3,
  },
  {
    slug: "sofa-beds",
    name: "Sofa Beds",
    description:
      "Everyday comfort by day, a great night's sleep by night. Perfect for smaller homes and guest rooms.",
    image: "https://picsum.photos/seed/sofa-bed-cat/900/700",
    productCount: 3,
  },
  {
    slug: "recliner-sofas",
    name: "Recliner Sofas",
    description:
      "Kick back and relax with power and manual reclining mechanisms built into our most comfortable frames.",
    image: "https://picsum.photos/seed/recliner-cat/900/700",
    productCount: 3,
  },
  {
    slug: "armchairs",
    name: "Armchairs & Accent Chairs",
    description:
      "The perfect finishing touch — statement armchairs and accent chairs to complement any sofa.",
    image: "https://picsum.photos/seed/armchair-cat/900/700",
    productCount: 3,
  },
  {
    slug: "coffee-tables",
    name: "Coffee Tables",
    description:
      "Functional and beautiful centrepieces in wood, glass and marble finishes for every living room style.",
    image: "https://picsum.photos/seed/coffee-table-cat/900/700",
    productCount: 3,
  },
  {
    slug: "dining-sets",
    name: "Dining Sets",
    description:
      "From compact bistro sets to eight-seater tables, find the perfect dining set for your home.",
    image: "https://picsum.photos/seed/dining-set-cat/900/700",
    productCount: 3,
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}
