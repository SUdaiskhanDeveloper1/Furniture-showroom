import { notFound } from "next/navigation";
import { Box, Container, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { getShowroomBySlug } from "@/data/showrooms";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ShowroomPage({ params }: { params: { slug: string } }) {
  const showroom = getShowroomBySlug(params.slug);

  if (!showroom) {
    notFound();
  }

  return (
    <Box>
      <Box bg="sand.100" py={{ base: "14", md: "20" }}>
        <Container>
          <SectionHeading eyebrow="Showroom" title={showroom.name} subtitle={showroom.description} />
        </Container>
      </Box>

      <Container py={{ base: "12", md: "16" }}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing="10" alignItems="center">
          <Box as="img" src={showroom.image} alt={showroom.name} borderRadius="2xl" width="100%" height="420px" objectFit="cover" />
          <Stack spacing="4">
            <Heading as="h2" size="lg">
              Visit {showroom.city}
            </Heading>
            <Text color="ink.600">{showroom.address}</Text>
            <Text color="ink.600">{showroom.phone}</Text>
            <Box border="1px solid" borderColor="ink.100" borderRadius="lg" p="5" bg="white">
              <Text fontWeight="700" mb="3">
                Opening hours
              </Text>
              <Stack spacing="2">
                {showroom.hours.map((item) => (
                  <Flex key={item.day} justify="space-between" gap="4">
                    <Text color="ink.600">{item.day}</Text>
                    <Text fontWeight="600">{item.time}</Text>
                  </Flex>
                ))}
              </Stack>
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
