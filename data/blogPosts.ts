import { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-measure-your-living-room-for-a-sofa",
    title: "How to Measure Your Living Room for a New Sofa",
    excerpt:
      "Avoid the classic sizing mistakes with our step-by-step guide to measuring your space, doorways and delivery routes.",
    content: [
      "Before you fall in love with a sofa, it pays to grab a tape measure. Start by measuring the length and width of the room, then mark out the footprint of the sofa you're considering using masking tape on the floor.",
      "Next, check every doorway, hallway and staircase between the delivery van and the final room. Our delivery team need at least 5cm of clearance on the diagonal to get a sofa through a doorway.",
      "Finally, think about traffic flow — leave at least 90cm of walking space around your sofa so the room doesn't feel cramped.",
    ],
    image: "https://picsum.photos/seed/blog-measure/1200/800",
    category: "Buying Guides",
    date: "2026-05-12",
    readTime: "4 min read",
  },
  {
    slug: "leather-vs-fabric-which-sofa-is-right-for-you",
    title: "Leather vs Fabric: Which Sofa Is Right for You?",
    excerpt:
      "We break down the pros, cons and price differences between leather and fabric upholstery to help you decide.",
    content: [
      "Leather sofas are famously easy to wipe clean, making them a popular choice for homes with pets or young children. They also develop a rich patina over time.",
      "Fabric sofas, on the other hand, offer far more colour and texture options, and tend to feel warmer to sit on, especially during colder months.",
      "If budget is a factor, fabric is typically more affordable, while leather represents a longer-term investment thanks to its durability.",
    ],
    image: "https://picsum.photos/seed/blog-leather-fabric/1200/800",
    category: "Buying Guides",
    date: "2026-04-28",
    readTime: "5 min read",
  },
  {
    slug: "small-space-living-room-ideas",
    title: "10 Small Living Room Ideas That Actually Work",
    excerpt:
      "From corner sofas to nesting coffee tables, here's how to make a small living room feel twice the size.",
    content: [
      "Choose furniture with exposed legs — it lets light travel underneath and makes the whole room feel more open.",
      "A corner sofa can often use space more efficiently than two separate sofas, freeing up a whole wall for storage or a media unit.",
      "Mirrors, pale colour palettes and multi-functional furniture like storage footstools all help a compact room work harder.",
    ],
    image: "https://picsum.photos/seed/blog-small-space/1200/800",
    category: "Home Inspiration",
    date: "2026-04-10",
    readTime: "6 min read",
  },
  {
    slug: "how-to-style-a-neutral-living-room",
    title: "How to Style a Neutral Living Room Without It Feeling Flat",
    excerpt:
      "Layering textures, tones and statement accessories is the secret to a neutral scheme that still feels rich.",
    content: [
      "Start with a base of two or three neutral tones — think oatmeal, stone and charcoal — rather than a single flat shade.",
      "Layer textures generously: a boucle sofa, a jute rug, and a leather armchair all read as 'neutral' but feel completely different underfoot and to the touch.",
      "Finish with one or two accent colours in cushions or artwork to stop the room feeling washed out.",
    ],
    image: "https://picsum.photos/seed/blog-neutral/1200/800",
    category: "Home Inspiration",
    date: "2026-03-22",
    readTime: "5 min read",
  },
  {
    slug: "caring-for-your-fabric-sofa",
    title: "Caring for Your Fabric Sofa: A Complete Guide",
    excerpt:
      "Keep your fabric sofa looking new for years with these simple maintenance tips from our care specialists.",
    content: [
      "Vacuum your sofa weekly using an upholstery attachment to prevent dust and dirt from working into the fibres.",
      "Rotate and plump cushions regularly to maintain even wear and keep them looking full.",
      "Treat spills immediately by blotting (never rubbing) with a clean, dry cloth, and consider our Platinum Care Plan for accidental damage protection.",
    ],
    image: "https://picsum.photos/seed/blog-care/1200/800",
    category: "Care & Maintenance",
    date: "2026-03-02",
    readTime: "4 min read",
  },
  {
    slug: "2026-colour-trends-for-living-rooms",
    title: "2026 Colour Trends for Living Rooms",
    excerpt:
      "This year's palette leans into warm, earthy tones alongside deep, moody greens and blues.",
    content: [
      "Terracotta and warm clay tones are having a major moment, pairing beautifully with natural wood and rattan accents.",
      "Deep forest green continues to grow in popularity as a sofa colour, offering a rich alternative to classic greys.",
      "For those wanting a lighter scheme, warm oatmeal and putty tones remain a timeless, versatile choice.",
    ],
    image: "https://picsum.photos/seed/blog-trends/1200/800",
    category: "Home Inspiration",
    date: "2026-02-14",
    readTime: "3 min read",
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
