import { Showroom } from "@/types";

const defaultHours = [
  { day: "Monday - Friday", time: "9:00am - 5:00pm" },
  { day: "Saturday", time: "9:00am - 6:00pm" },
  { day: "Sunday", time: "11:00am - 5:00pm" },
];

export const showrooms: Showroom[] = [
  {
    slug: "hertford",
    name: "Hertford Showroom",
    city: "Hertford",
    address: "14 Fore Street, Hertford, SG14 1DB",
    phone: "01992 555 010",
    hours: defaultHours,
    image: "https://picsum.photos/seed/hertford-showroom/1000/700",
    mapEmbed: "Hertford, UK",
    description:
      "Our flagship showroom, home to over 60 sofas on display across two floors, including our full leather and corner sofa ranges.",
  },
  {
    slug: "liverpool",
    name: "Liverpool Showroom",
    city: "Liverpool",
    address: "22 Albert Dock, Liverpool, L3 4AA",
    phone: "0151 555 021",
    hours: defaultHours,
    image: "https://picsum.photos/seed/liverpool-showroom/1000/700",
    mapEmbed: "Liverpool, UK",
    description:
      "Located on the historic Albert Dock, our Liverpool showroom features a dedicated sofa bed and fabric sofa gallery.",
  },
  {
    slug: "glasgow",
    name: "Glasgow Showroom",
    city: "Glasgow",
    address: "8 Buchanan Street, Glasgow, G1 3HF",
    phone: "0141 555 033",
    hours: defaultHours,
    image: "https://picsum.photos/seed/glasgow-showroom/1000/700",
    mapEmbed: "Glasgow, UK",
    description:
      "Our Glasgow showroom showcases recliner sofas and accent chairs, with in-store fabric and leather swatch libraries.",
  },
  {
    slug: "croydon",
    name: "Croydon Showroom",
    city: "Croydon",
    address: "101 North End, Croydon, CR0 1TP",
    phone: "020 555 0044",
    hours: defaultHours,
    image: "https://picsum.photos/seed/croydon-showroom/1000/700",
    mapEmbed: "Croydon, UK",
    description:
      "A spacious South London showroom with free parking and a dedicated dining and coffee table gallery.",
  },
  {
    slug: "newcastle",
    name: "Newcastle Showroom",
    city: "Newcastle",
    address: "5 Grainger Street, Newcastle upon Tyne, NE1 5JQ",
    phone: "0191 555 055",
    hours: defaultHours,
    image: "https://picsum.photos/seed/newcastle-showroom/1000/700",
    mapEmbed: "Newcastle, UK",
    description:
      "Our newest showroom in the North East, featuring our complete corner sofa and sofa bed collections.",
  },
];

export function getShowroomBySlug(slug: string) {
  return showrooms.find((s) => s.slug === slug);
}
