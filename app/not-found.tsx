import NextLink from "next/link";
import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";

export default function NotFound() {
  return (
    <Box py={{ base: "20", md: "28" }}>
      <Container textAlign="center">
        <Heading as="h1" size="2xl" mb="4">
          Page not found
        </Heading>
        <Text color="ink.600" mb="6">
          The page you were looking for may have moved or no longer exists.
        </Text>
        <Button as={NextLink} href="/" variant="solid">
          Return home
        </Button>
      </Container>
    </Box>
  );
}
