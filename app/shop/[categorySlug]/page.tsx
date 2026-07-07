import { notFound } from "next/navigation";
import { Box, Container, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { categories, getCategoryBySlug } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function CategoryPage({ params }: { params: { categorySlug: string } }) {
  const category = getCategoryBySlug(params.categorySlug);

  if (!category) {
    notFound();
  }

  const products = getProductsByCategory(params.categorySlug);

  return (
    <Box>
      <Box bg="sand.100" py={{ base: "14", md: "20" }}>
        <Container>
          <SectionHeading
            eyebrow="Collection"
            title={category.name}
            subtitle={category.description}
          />
        </Container>
      </Box>

      <Container py={{ base: "12", md: "16" }}>
        <Stack spacing="4" mb="10">
          <Text fontWeight="700" textTransform="uppercase" letterSpacing="widest" color="brand.700">
            Browse this range
          </Text>
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing="4">
            {categories.map((item) => (
              <Box
                key={item.slug}
                border="1px solid"
                borderColor={item.slug === category.slug ? "brand.600" : "ink.100"}
                borderRadius="lg"
                p="4"
                bg={item.slug === category.slug ? "brand.50" : "white"}
              >
                <Text fontWeight="700">{item.name}</Text>
                <Text fontSize="sm" color="ink.600" mt="1">
                  {item.productCount} products
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
