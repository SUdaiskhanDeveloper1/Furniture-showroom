import { Box, Container, Heading, Text } from "@chakra-ui/react";

export default function SearchPage() {
  return (
    <Box>
      <Box bg="sand.100" py={{ base: "14", md: "20" }}>
        <Container>
          <Heading as="h1" size="lg" mb="3">
            Search our furniture collections
          </Heading>
          <Text color="ink.600">
            Use the search bar in the header to find sofas, armchairs, dining sets and more.
          </Text>
        </Container>
      </Box>
    </Box>
  );
}
