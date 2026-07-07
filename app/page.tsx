import NextLink from "next/link";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  Link,
} from "@chakra-ui/react";
import {
  FiArrowRight,
  FiCheck,
  FiMapPin,
  FiShield,
  FiTruck,
} from "react-icons/fi";
import { blogPosts } from "@/data/blogPosts";
import { categories } from "@/data/categories";
import { getFeaturedProducts } from "@/data/products";
import { showrooms } from "@/data/showrooms";
import ProductCard from "@/components/ui/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <Box>
      <Box bg="sand.100" py={{ base: "16", md: "24" }}>
        <Container>
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing="12"
            alignItems="center"
          >
            <Stack spacing="6">
              <Text
                fontSize="sm"
                fontWeight="700"
                letterSpacing="widest"
                textTransform="uppercase"
                color="brand.700"
              >
                Curated comfort for modern living
              </Text>
              <Heading as="h1" size="2xl" lineHeight="1.05">
                Bespoke sofas and statement furniture, tailored to your home.
              </Heading>
              <Text fontSize="lg" color="ink.600" maxW="650px">
                Discover sculptural corner sofas, luxurious leather pieces and
                inviting fabric collections that bring warmth and character to
                every room.
              </Text>
              <HStack spacing="4" flexWrap="wrap">
                <Button as={NextLink} href="/shop" size="lg" variant="solid">
                  Shop the collection
                </Button>
                <Button
                  as={NextLink}
                  href="/showrooms"
                  size="lg"
                  variant="outline"
                >
                  Visit a showroom
                </Button>
              </HStack>
              <SimpleGrid columns={{ base: 1, sm: 3 }} spacing="4" pt="2">
                {[
                  { label: "Free delivery over £500", icon: FiTruck },
                  { label: "5 UK showrooms", icon: FiMapPin },
                  { label: "10-year frame guarantee", icon: FiShield },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <Flex
                      key={item.label}
                      align="center"
                      gap="2"
                      color="ink.700"
                    >
                      <Box color="brand.700">
                        <Icon />
                      </Box>
                      <Text fontSize="sm" fontWeight="600">
                        {item.label}
                      </Text>
                    </Flex>
                  );
                })}
              </SimpleGrid>
            </Stack>
            <Box position="relative">
              <Box
                as="img"
                src="https://picsum.photos/seed/hero-sofa/1200/900"
                alt="Luxury sofa showroom"
                borderRadius="2xl"
                width="100%"
                height="560px"
                objectFit="cover"
              />
              <Box
                position="absolute"
                bottom="6"
                left="6"
                bg="white"
                p="5"
                borderRadius="lg"
                shadow="xl"
                maxW="280px"
              >
                <Text
                  fontSize="sm"
                  fontWeight="700"
                  color="brand.700"
                  textTransform="uppercase"
                  letterSpacing="widest"
                >
                  New this season
                </Text>
                <Text fontSize="lg" fontWeight="700" mt="1">
                  The Harlow collection is a softer, more sculptural take on
                  everyday comfort.
                </Text>
              </Box>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      <Container py={{ base: "16", md: "20" }}>
        <SectionHeading
          eyebrow="Featured furniture"
          title="Designed to feel as good as they look"
          subtitle="From deep-seated corner sofas to slim-profile armchairs, every piece is thoughtfully crafted for comfort, durability and timeless style."
        />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} spacing="6" mt="10">
          {featuredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </SimpleGrid>
      </Container>

      <Box bg="ink.900" color="white" py={{ base: "16", md: "20" }}>
        <Container>
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing="10"
            alignItems="center"
          >
            <Box>
              <Text
                fontSize="sm"
                fontWeight="700"
                letterSpacing="widest"
                textTransform="uppercase"
                color="brand.200"
              >
                Shop by room
              </Text>
              <Heading as="h2" size="lg" mt="2" mb="4">
                Curated collections for every corner of your home.
              </Heading>
              <Text color="whiteAlpha.800" fontSize="md" lineHeight="1.7">
                Browse our most-loved sofa families, statement dining sets and
                accent pieces that bring together timeless silhouettes and
                premium craftsmanship.
              </Text>
            </Box>
            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing="4">
              {categories.slice(0, 4).map((category) => (
                <Box
                  key={category.slug}
                  border="1px solid"
                  borderColor="whiteAlpha.300"
                  borderRadius="lg"
                  p="5"
                >
                  <Text fontWeight="700" fontSize="lg">
                    {category.name}
                  </Text>
                  <Text color="whiteAlpha.700" fontSize="sm" mt="2" mb="4">
                    {category.description}
                  </Text>
                  <Link
                    as={NextLink}
                    href={`/shop/${category.slug}`}
                    color="brand.200"
                    fontWeight="600"
                  >
                    Explore now
                  </Link>
                </Box>
              ))}
            </SimpleGrid>
          </SimpleGrid>
        </Container>
      </Box>

      <Container py={{ base: "16", md: "20" }}>
        <SectionHeading
          eyebrow="Showrooms"
          title="Visit us in person"
          subtitle="Experience our collections up close at one of our five beautiful showrooms across the UK."
        />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing="6" mt="10">
          {showrooms.slice(0, 3).map((showroom) => (
            <Box
              key={showroom.slug}
              border="1px solid"
              borderColor="ink.100"
              borderRadius="lg"
              overflow="hidden"
              bg="white"
            >
              <Box
                as="img"
                src={showroom.image}
                alt={showroom.name}
                width="100%"
                height="220px"
                objectFit="cover"
              />
              <Stack p="6" spacing="3">
                <Text
                  fontSize="sm"
                  fontWeight="700"
                  color="brand.700"
                  textTransform="uppercase"
                  letterSpacing="widest"
                >
                  {showroom.city}
                </Text>
                <Heading as="h3" size="md">
                  {showroom.name}
                </Heading>
                <Text color="ink.600">{showroom.description}</Text>
                <Link
                  as={NextLink}
                  href={`/showrooms/${showroom.slug}`}
                  color="ink.900"
                  fontWeight="700"
                >
                  Plan your visit
                </Link>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      <Box bg="sand.50" py={{ base: "16", md: "20" }}>
        <Container>
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing="10"
            alignItems="center"
          >
            <Box>
              <SectionHeading
                eyebrow="Why The Sofa Loft"
                title="Luxury furniture with real-world comfort"
                subtitle="We make buying a sofa feel effortless, with expert advice, flexible delivery and a promise that every piece is made to last."
              />
              <Stack spacing="3" mt="8">
                {[
                  "Premium upholstery and solid hardwood frames",
                  "Free design guidance for your space",
                  "Fast delivery and easy returns",
                ].map((item) => (
                  <Flex key={item} align="center" gap="2">
                    <Box color="brand.700">
                      <FiCheck />
                    </Box>
                    <Text fontWeight="600">{item}</Text>
                  </Flex>
                ))}
              </Stack>
            </Box>
            <Box borderRadius="2xl" overflow="hidden">
              <Box
                as="img"
                src="https://picsum.photos/seed/showroom-interior/1200/900"
                alt="Luxury furniture interior"
                width="100%"
                height="420px"
                objectFit="cover"
              />
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      <Container py={{ base: "16", md: "20" }}>
        <SectionHeading
          eyebrow="From the journal"
          title="Style ideas, buying guides and inspiration"
          subtitle="Everything you need to create a living room that feels warm, welcoming and beautifully considered."
        />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing="6" mt="10">
          {blogPosts.slice(0, 3).map((post) => (
            <Box
              key={post.slug}
              border="1px solid"
              borderColor="ink.100"
              borderRadius="lg"
              overflow="hidden"
              bg="white"
            >
              <Box
                as="img"
                src={post.image}
                alt={post.title}
                width="100%"
                height="220px"
                objectFit="cover"
              />
              <Stack p="6" spacing="3">
                <Text
                  fontSize="sm"
                  fontWeight="700"
                  color="brand.700"
                  textTransform="uppercase"
                  letterSpacing="widest"
                >
                  {post.category}
                </Text>
                <Heading as="h3" size="md">
                  {post.title}
                </Heading>
                <Text color="ink.600">{post.excerpt}</Text>
                <Link
                  as={NextLink}
                  href="/inspiration"
                  color="ink.900"
                  fontWeight="700"
                >
                  Read more{" "}
                  <Box as="span" ml="1">
                    →
                  </Box>
                </Link>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      <Container pb={{ base: "16", md: "20" }}>
        <Box bg="brand.50" borderRadius="2xl" p={{ base: "8", md: "10" }}>
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing="8"
            alignItems="center"
          >
            <Box>
              <Text
                fontSize="sm"
                fontWeight="700"
                letterSpacing="widest"
                textTransform="uppercase"
                color="brand.700"
              >
                Join our mailing list
              </Text>
              <Heading as="h2" size="lg" mt="2" mb="3">
                Receive exclusive offers and first access to new arrivals.
              </Heading>
              <Text color="ink.600">
                Be the first to hear about seasonal launches, showroom events
                and styling advice from our experts.
              </Text>
            </Box>
            <HStack spacing={6} justifyContent={{ base: "start", lg: "end" }}>
              <Button
                as={NextLink}
                href="/contact"
                variant="solid"
                borderRadius="full"
                px={8}
                py={6}
                cursor="pointer"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                  opacity: 0.95,
                }}
                _active={{
                  transform: "scale(0.98)",
                }}
              >
                Contact Us
              </Button>

              <Button
                as={NextLink}
                href="/shop"
                variant="outline"
                borderRadius="full"
                px={8}
                py={6}
                cursor="pointer"
                transition="all 0.3s ease"
                _hover={{
                  bg: "brand.500",
                  color: "white",
                  borderColor: "brand.500",
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                }}
                _active={{
                  transform: "scale(0.98)",
                }}
              >
                Browse Furniture
              </Button>
            </HStack>
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
}
