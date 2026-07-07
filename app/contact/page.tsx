import { Box, Container, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ContactPage() {
  return (
    <Box>
      <Box bg="sand.100" py={{ base: "14", md: "20" }}>
        <Container>
          <SectionHeading
            eyebrow="Contact us"
            title="We’re here to help with your next furniture purchase"
            subtitle="Talk to our team for advice on sizing, delivery or choosing the right sofa for your space."
          />
        </Container>
      </Box>

      <Container py={{ base: "12", md: "16" }}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing="8">
          <Box border="1px solid" borderColor="ink.100" borderRadius="lg" p="8" bg="white">
            <Heading as="h2" size="md" mb="4">
              Customer support
            </Heading>
            <Stack spacing="3" color="ink.600">
              <Text>Email: hello@thesofaloft.co.uk</Text>
              <Text>Phone: 0800 123 4567</Text>
              <Text>Mon-Fri: 9:00am - 5:00pm</Text>
              <Text>Sat: 9:00am - 6:00pm</Text>
            </Stack>
          </Box>
          <Box border="1px solid" borderColor="ink.100" borderRadius="lg" p="8" bg="white">
            <Heading as="h2" size="md" mb="4">
              Visit a showroom
            </Heading>
            <Text color="ink.600">
              Our experienced team can help you compare fabrics, test comfort and explore dimensions in person at one of our UK showrooms.
            </Text>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
