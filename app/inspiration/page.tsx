import { Box, Container, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { blogPosts } from "@/data/blogPosts";
import SectionHeading from "@/components/ui/SectionHeading";

export default function InspirationPage() {
  return (
    <Box>
      <Box bg="sand.100" py={{ base: "14", md: "20" }}>
        <Container>
          <SectionHeading
            eyebrow="Inspiration"
            title="Style ideas and living room inspiration"
            subtitle="Practical advice and creative ideas to help you shape a home that feels effortless and inviting."
          />
        </Container>
      </Box>

      <Container py={{ base: "12", md: "16" }}>
        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing="6">
          {blogPosts.map((post) => (
            <Box key={post.slug} border="1px solid" borderColor="ink.100" borderRadius="lg" overflow="hidden" bg="white">
              <Box as="img" src={post.image} alt={post.title} width="100%" height="220px" objectFit="cover" />
              <Stack p="6" spacing="3">
                <Text fontSize="sm" fontWeight="700" color="brand.700" textTransform="uppercase" letterSpacing="widest">
                  {post.category}
                </Text>
                <Heading as="h2" size="md">
                  {post.title}
                </Heading>
                <Text color="ink.600">{post.excerpt}</Text>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
