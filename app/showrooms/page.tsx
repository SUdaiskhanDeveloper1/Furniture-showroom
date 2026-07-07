import { Box, Container, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { showrooms } from "@/data/showrooms";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ShowroomsPage() {
  return (
    <Box>
      <Box bg="sand.100" py={{ base: "14", md: "20" }}>
        <Container>
          <SectionHeading
            eyebrow="Visit us"
            title="Explore our UK showrooms"
            subtitle="Step into one of our beautifully styled spaces and see the collections in person."
          />
        </Container>
      </Box>

      <Container py={{ base: "12", md: "16" }}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing="8">
          {showrooms.map((showroom) => (
            <Box key={showroom.slug} border="1px solid" borderColor="ink.100" borderRadius="lg" overflow="hidden" bg="white">
              <Box as="img" src={showroom.image} alt={showroom.name} width="100%" height="260px" objectFit="cover" />
              <Stack p="6" spacing="3">
                <Heading as="h2" size="md">
                  {showroom.name}
                </Heading>
                <Text color="ink.600">{showroom.description}</Text>
                <Text fontWeight="600">{showroom.address}</Text>
                <Text color="ink.600">{showroom.phone}</Text>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
