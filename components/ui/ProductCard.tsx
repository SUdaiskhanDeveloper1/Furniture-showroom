import NextLink from "next/link";
import { Badge, Box, Flex, HStack, Link, Stack, Text } from "@chakra-ui/react";
import { FiStar } from "react-icons/fi";
import type { Product } from "@/types";

const formatPrice = (value: number) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(value);

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link as={NextLink} href={`/shop/${product.categorySlug}/${product.slug}`} _hover={{ textDecoration: "none" }}>
      <Box border="1px solid" borderColor="ink.100" borderRadius="lg" overflow="hidden" h="100%" bg="white" _hover={{ shadow: "lg", transform: "translateY(-2px)" }} transition="all 0.2s ease">
        <Box position="relative">
          <Box as="img" src={product.image} alt={product.name} width="100%" height="280px" objectFit="cover" />
          {product.tag && (
            <Badge position="absolute" top="4" left="4" colorScheme="green" variant="solid" px="2" py="1">
              {product.tag}
            </Badge>
          )}
        </Box>
        <Stack p="5" spacing="3">
          <Text fontSize="sm" textTransform="uppercase" letterSpacing="widest" color="brand.700">
            {product.category}
          </Text>
          <Text fontSize="xl" fontWeight="700" lineHeight="1.2">
            {product.name}
          </Text>
          <Text fontSize="sm" color="ink.600" noOfLines={2}>
            {product.description}
          </Text>
          <HStack justify="space-between" align="center">
            <Flex align="center" gap="1">
              <FiStar />
              <Text fontSize="sm" fontWeight="600">
                {product.rating.toFixed(1)}
              </Text>
              <Text fontSize="sm" color="ink.500">
                ({product.reviewCount})
              </Text>
            </Flex>
            <Text fontSize="sm" color="ink.500">
              {product.inStock ? "In stock" : "Made to order"}
            </Text>
          </HStack>
          <Flex align="center" justify="space-between" pt="2">
            <Box>
              {product.wasPrice && (
                <Text as="span" textDecoration="line-through" color="ink.400" fontSize="sm" mr="2">
                  {formatPrice(product.wasPrice)}
                </Text>
              )}
              <Text as="span" fontWeight="700" fontSize="lg">
                {formatPrice(product.price)}
              </Text>
            </Box>
            <Text fontSize="sm" color="ink.500">
              {product.deliveryEstimate}
            </Text>
          </Flex>
        </Stack>
      </Box>
    </Link>
  );
}
