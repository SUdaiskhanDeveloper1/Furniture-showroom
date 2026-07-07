import { notFound } from "next/navigation";
import NextLink from "next/link";
import { Box, Button, Container, Flex, Heading, HStack, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { FiArrowLeft, FiCheck, FiStar } from "react-icons/fi";
import { getProductBySlug } from "@/data/products";

const formatPrice = (value: number) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(value);

export default function ProductPage({ params }: { params: { categorySlug: string; productSlug: string } }) {
  const product = getProductBySlug(params.productSlug);

  if (!product || product.categorySlug !== params.categorySlug) {
    notFound();
  }

  return (
    <Box>
      <Container py={{ base: "10", md: "14" }}>
        <Button as={NextLink} href={`/shop/${product.categorySlug}`} variant="ghost" leftIcon={<FiArrowLeft />} mb="8">
          Back to {product.category}
        </Button>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing="10" alignItems="start">
          <Box>
            <Box as="img" src={product.image} alt={product.name} borderRadius="2xl" width="100%" height="520px" objectFit="cover" />
            <SimpleGrid columns={2} spacing="3" mt="4">
              {product.images.slice(0, 4).map((image, index) => (
                <Box key={index} as="img" src={image} alt={`${product.name} ${index + 1}`} borderRadius="lg" height="180px" width="100%" objectFit="cover" />
              ))}
            </SimpleGrid>
          </Box>

          <Stack spacing="6">
            <Box>
              <Text fontSize="sm" fontWeight="700" letterSpacing="widest" textTransform="uppercase" color="brand.700">
                {product.category}
              </Text>
              <Heading as="h1" size="xl" mt="2" mb="3">
                {product.name}
              </Heading>
              <Text color="ink.600" lineHeight="1.8">
                {product.description}
              </Text>
            </Box>

            <Flex align="center" gap="2">
              <HStack spacing="1" color="brand.600">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FiStar key={index} />
                ))}
              </HStack>
              <Text fontWeight="600">
                {product.rating.toFixed(1)} ({product.reviewCount} reviews)
              </Text>
            </Flex>

            <Box border="1px solid" borderColor="ink.100" borderRadius="lg" p="5">
              <Flex align="baseline" gap="3">
                {product.wasPrice && (
                  <Text as="span" textDecoration="line-through" color="ink.400" fontSize="lg">
                    {formatPrice(product.wasPrice)}
                  </Text>
                )}
                <Heading as="h2" size="lg">
                  {formatPrice(product.price)}
                </Heading>
              </Flex>
              <Text color="ink.600" mt="2">
                Delivery estimate: {product.deliveryEstimate}
              </Text>
            </Box>

            <Stack spacing="3">
              <Text fontWeight="700">Available colours</Text>
              <HStack spacing="3" flexWrap="wrap">
                {product.colors.map((color) => (
                  <Box key={color} border="1px solid" borderColor="ink.200" borderRadius="full" px="3" py="2" fontSize="sm">
                    {color}
                  </Box>
                ))}
              </HStack>
            </Stack>

            <Stack spacing="3">
              <Text fontWeight="700">Highlights</Text>
              {product.features.map((feature) => (
                <Flex key={feature} align="center" gap="2">
                  <Box color="brand.700">
                    <FiCheck />
                  </Box>
                  <Text color="ink.600">{feature}</Text>
                </Flex>
              ))}
            </Stack>

            <Button as={NextLink} href="/contact" size="lg" variant="solid" w={{ base: "100%", sm: "fit-content" }}>
              Speak to a design advisor
            </Button>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
