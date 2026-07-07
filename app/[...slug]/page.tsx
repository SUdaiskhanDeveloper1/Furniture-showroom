import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";

function formatSlug(slug: string[]) {
  const label = slug.join(" ").replace(/-/g, " ");
  return label.replace(/\b\w/g, (char) => char.toUpperCase());
}

export default function GenericContentPage({ params }: { params: { slug: string[] } }) {
  const slug = params.slug ?? [];
  const title = formatSlug(slug.length ? slug : ["home"]);

  return (
    <Box>
      <Box bg="sand.100" py={{ base: "14", md: "20" }}>
        <Container>
          <Heading as="h1" size="lg" mb="3">
            {title}
          </Heading>
          <Text color="ink.600" maxW="700px">
            This section is ready for deeper content, service details, or a richer product experience. The layout is already in place and can be expanded quickly.
          </Text>
        </Container>
      </Box>

      <Container py={{ base: "10", md: "14" }}>
        <Stack spacing="4" maxW="700px">
          <Text color="ink.600">
            We’ve completed the core storefront experience with polished landing, collection, product, showroom, inspiration and contact sections, inspired by the luxury furniture reference aesthetic.
          </Text>
          <Text color="ink.600">
            Add product-specific copy, booking flows, or CMS-driven content here whenever you’re ready to extend the experience further.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
