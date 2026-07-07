import { Box, Heading, Text } from "@chakra-ui/react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Box textAlign={align} maxW="700px" mx={align === "center" ? "auto" : "0"}>
      {eyebrow && (
        <Text fontSize="sm" fontWeight="700" letterSpacing="widest" textTransform="uppercase" color="brand.700" mb="2">
          {eyebrow}
        </Text>
      )}
      <Heading as="h2" size="lg" mb="3">
        {title}
      </Heading>
      {subtitle && (
        <Text fontSize="md" color="ink.600" lineHeight="1.7">
          {subtitle}
        </Text>
      )}
    </Box>
  );
}
