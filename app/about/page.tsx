import { Box, Container, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import SectionHeading from "@/components/ui/SectionHeading";

const points = [
  {
    title: "Crafted to last",
    text: "Every frame is built by hand using responsibly sourced hardwoods and premium upholstery materials.",
  },
  {
    title: "Made for real homes",
    text: "We design around everyday family life, from easy-clean fabrics to generous comfort and flexible layouts.",
  },
  {
    title: "Personal service",
    text: "Our showroom team and online specialists are here to help you choose the right shape, size and finish.",
  },
];

export default function AboutPage() {
  return (
    <Box>
      <Box bg="sand.100" py={{ base: "14", md: "20" }}>
        <Container>
          <SectionHeading
            eyebrow="About The Sofa Loft"
            title="Thoughtful furniture, beautifully made"
            subtitle="We believe a sofa should be more than a place to sit — it should define the comfort, rhythm and personality of your home."
          />
        </Container>
      </Box>

      <Container py={{ base: "12", md: "16" }}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing="10" alignItems="center">
          <Box>
            <Heading as="h2" size="lg" mb="4">
              A British furniture destination rooted in comfort and style
            </Heading>
            <Text color="ink.600" lineHeight="1.8">
              Since opening our first showroom, The Sofa Loft has been helping customers create beautiful living spaces with carefully edited furniture, exceptional service and a real understanding of how homes work in everyday life.
            </Text>
          </Box>
          <Box as="img" src="https://picsum.photos/seed/about-sofa/1200/900" alt="Furniture showroom interior" borderRadius="2xl" width="100%" height="360px" objectFit="cover" />
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing="6" mt="12">
          {points.map((point) => (
            <Box key={point.title} border="1px solid" borderColor="ink.100" borderRadius="lg" p="6" bg="white">
              <Heading as="h3" size="md" mb="2">
                {point.title}
              </Heading>
              <Text color="ink.600">{point.text}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
