import { Box, Container, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ShopPage() {
  return (
    <Box>
      <Box bg="sand.100" py={{ base: "14", md: "20" }}>
        <Container>
          <SectionHeading
            eyebrow="Furniture collection"
            title="Discover sofas, chairs and tables that elevate everyday living"
            subtitle="Browse our full range of statement upholstery and beautifully crafted supporting furniture."
          />
        </Container>
      </Box>

      <Container py={{ base: "12", md: "16" }}>
        <Stack spacing="4" mb="10">
          <Text fontWeight="700" textTransform="uppercase" letterSpacing="widest" color="brand.700">
            Shop by category
          </Text>
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing="4">
            {categories.map((category) => (
              <Box key={category.slug} border="1px solid" borderColor="ink.100" borderRadius="lg" p="4" bg="white">
                <Text fontWeight="700">{category.name}</Text>
                <Text fontSize="sm" color="ink.600" mt="1">
                  {category.productCount} products
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing="6">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
