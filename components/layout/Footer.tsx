"use client";

import NextLink from "next/link";
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Link,
  HStack,
  Icon,
  Divider,
  Flex,
} from "@chakra-ui/react";
import {
  FaXTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaTiktok,
  FaWhatsapp,
  FaEnvelope,
  FaStar,
} from "react-icons/fa6";
import { FiChevronRight } from "react-icons/fi";
import { footerColumns } from "@/data/navigation";

const socials = [FaXTwitter, FaInstagram, FaFacebookF, FaLinkedinIn, FaPinterestP, FaTiktok];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <Stack spacing="3">
      <Text fontWeight="700" mb="1">
        {title}
      </Text>
      {links.map((l) => (
        <Link
          as={NextLink}
          key={l.href}
          href={l.href}
          fontSize="sm"
          color="brand.700"
          _hover={{ color: "brand.900", textDecoration: "underline" }}
        >
          {l.label}
        </Link>
      ))}
    </Stack>
  );
}

export default function Footer() {
  return (
    <Box as="footer" bg="white" borderTop="1px solid" borderColor="ink.100" pt="16" pb="8">
      <Container>
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 5 }} spacing="10">
          <Stack spacing="5">
            <Box border="2px solid" borderColor="ink.900" px="4" py="2" w="fit-content">
              <Text fontFamily="heading" fontWeight="700" letterSpacing="wider">
                THE SOFA LOFT
              </Text>
            </Box>
            <HStack spacing="3">
              {socials.map((S, i) => (
                <Flex
                  key={i}
                  as="a"
                  href="#"
                  align="center"
                  justify="center"
                  boxSize="8"
                  bg="ink.900"
                  color="white"
                  borderRadius="sm"
                  _hover={{ bg: "brand.700" }}
                >
                  <Icon as={S} boxSize="3.5" />
                </Flex>
              ))}
            </HStack>
            <Text fontSize="xs" color="ink.500" maxW="200px">
              Proud members of the Furniture &amp; Home Improvement Ombudsman scheme.
            </Text>
          </Stack>

          <FooterColumn title="Locations" links={footerColumns.locations} />
          <FooterColumn title="Customer Help" links={footerColumns.customerHelp} />
          <FooterColumn title="Explore" links={footerColumns.explore} />

          <Stack spacing="4">
            <Text fontWeight="700">Need Help?</Text>
            <Text fontSize="sm" color="ink.600">
              Our friendly team are available from Monday to Friday 9am-5pm. Saturday 9am - 6pm &
              Sundays 11am-5pm.
            </Text>
            <Stack spacing="2">
              <HStack
                as="a"
                href="#"
                justify="space-between"
                border="1px solid"
                borderColor="ink.200"
                borderRadius="sm"
                px="4"
                py="3"
                _hover={{ borderColor: "ink.900" }}
              >
                <HStack>
                  <Icon as={FaWhatsapp} />
                  <Text fontSize="sm" fontWeight="600">
                    Live Chat on WhatsApp
                  </Text>
                </HStack>
                <Text>â€º</Text>
              </HStack>
              <HStack
                as={NextLink}
                href="/contact"
                justify="space-between"
                border="1px solid"
                borderColor="ink.200"
                borderRadius="sm"
                px="4"
                py="3"
                _hover={{ borderColor: "ink.900" }}
              >
                <HStack>
                  <Icon as={FaEnvelope} />
                  <Text fontSize="sm" fontWeight="600">
                    Email Customer Support
                  </Text>
                </HStack>
                <Text>â€º</Text>
              </HStack>
            </Stack>

            <Stack spacing="1" pt="2">
              <HStack>
                <Icon as={FaStar} color="green.500" />
                <Text fontWeight="700" fontSize="sm">
                  Trustpilot
                </Text>
              </HStack>
              <HStack spacing="1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Flex key={i} bg="green.500" boxSize="6" align="center" justify="center">
                    <Icon as={FaStar} color="white" boxSize="3" />
                  </Flex>
                ))}
              </HStack>
              <Text fontSize="xs" color="ink.500">
                TrustScore 4.8 | 18,133 reviews
              </Text>
            </Stack>
          </Stack>
        </SimpleGrid>

        <Divider my="10" />

        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "flex-start", md: "center" }}
          gap="3"
        >
          <Text fontSize="xs" color="ink.500">
            © {new Date().getFullYear()} The Sofa Loft. All rights reserved.
          </Text>
          <HStack spacing="5" fontSize="xs" color="ink.500">
            <Link as={NextLink} href="/customer-service">
              Privacy Policy
            </Link>
            <Link as={NextLink} href="/customer-service">
              Terms &amp; Conditions
            </Link>
            <Link as={NextLink} href="/customer-service">
              Cookie Policy
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
