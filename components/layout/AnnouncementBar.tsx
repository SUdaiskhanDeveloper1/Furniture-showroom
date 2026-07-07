"use client";

import { Box, HStack, Text } from "@chakra-ui/react";

const messages = [
  "Free delivery on all orders over £500",
  "Price Match Promise — found it cheaper? We'll match it",
  "0% APR finance available on all sofas",
  "Rated 4.8 out of 5 on Trustpilot from 18,000+ reviews",
];

export default function AnnouncementBar() {
  return (
    <Box bg="ink.900" color="white" py="2" overflow="hidden">
      <HStack
        spacing="16"
        whiteSpace="nowrap"
        justify="center"
        divider={<Text color="brand.400">•</Text>}
      >
        {messages.map((m) => (
          <Text
            key={m}
            fontSize="xs"
            letterSpacing="wide"
            display={{ base: m === messages[0] ? "block" : "none", md: "block" }}
          >
            {m}
          </Text>
        ))}
      </HStack>
    </Box>
  );
}
