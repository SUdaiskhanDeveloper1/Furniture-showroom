"use client";

import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Text,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Stack,
  useDisclosure,
  Show,
  Hide,
} from "@chakra-ui/react";
import { FiSearch, FiHeart, FiUser, FiShoppingCart, FiMenu } from "react-icons/fi";
import { mainNav } from "@/data/navigation";
import NavMenuItem from "./NavMenuItem";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
    router.push(`/search${query ? `?q=${encodeURIComponent(query)}` : ""}`);
  };

  return (
    <Box as="header" borderBottom="1px solid" borderColor="ink.100" bg="white" position="sticky" top="0" zIndex="30">
      <Container py="4">
        <Flex align="center" justify="space-between" gap="6">
          <Hide below="lg">
            <HStack spacing="8">
              {mainNav.map((link) => (
                <NavMenuItem key={link.href} link={link} />
              ))}
            </HStack>
          </Hide>

          <Show below="lg">
            <IconButton
              aria-label="Open menu"
              icon={<FiMenu />}
              variant="ghost"
              onClick={onOpen}
            />
          </Show>

          <Link as={NextLink} href="/" _hover={{ textDecoration: "none" }}>
            <Box border="2px solid" borderColor="ink.900" px="4" py="2">
              <Text fontFamily="heading" fontWeight="700" fontSize={{ base: "md", md: "lg" }} letterSpacing="wider">
                THE SOFA LOFT
              </Text>
            </Box>
          </Link>

          <HStack spacing={{ base: "2", md: "5" }}>
            <Hide below="md">
              <form onSubmit={handleSearch}>
                <InputGroup w="260px" size="sm">
                  <InputLeftElement pointerEvents="none">
                    <FiSearch color="var(--chakra-colors-ink-400)" />
                  </InputLeftElement>
                  <Input
                    placeholder="Corner Sofas, Leather Sofas..."
                    borderRadius="sm"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </InputGroup>
              </form>
            </Hide>
            <Show below="md">
              <IconButton
                as={NextLink}
                href="/search"
                aria-label="Search"
                icon={<FiSearch />}
                variant="ghost"
              />
            </Show>
            <IconButton
              as={NextLink}
              href="/wishlist"
              aria-label="Wishlist"
              icon={<FiHeart />}
              variant="ghost"
            />
            <IconButton
              as={NextLink}
              href="/account"
              aria-label="Account"
              icon={<FiUser />}
              variant="ghost"
            />
            <IconButton
              as={NextLink}
              href="/cart"
              aria-label="Cart"
              icon={<FiShoppingCart />}
              variant="ghost"
            />
          </HStack>
        </Flex>
      </Container>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            <Text fontFamily="heading" fontWeight="700" letterSpacing="wider">
              THE SOFA LOFT
            </Text>
          </DrawerHeader>
          <DrawerBody px="0" py="0">
            <Box p="4">
              <form onSubmit={handleSearch}>
                <InputGroup size="sm">
                  <InputLeftElement pointerEvents="none">
                    <FiSearch color="var(--chakra-colors-ink-400)" />
                  </InputLeftElement>
                  <Input
                    placeholder="Search products..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </InputGroup>
              </form>
            </Box>
            <Accordion allowToggle>
              {mainNav.map((link) => (
                <AccordionItem key={link.href}>
                  <AccordionButton py="4">
                    <Box flex="1" textAlign="left" fontWeight="600">
                      {link.label}
                    </Box>
                    {link.children && <AccordionIcon />}
                  </AccordionButton>
                  {link.children && (
                    <AccordionPanel pb="4">
                      <Stack spacing="3">
                        {link.children.map((child) => (
                          <Link
                            as={NextLink}
                            key={child.href}
                            href={child.href}
                            onClick={onClose}
                            fontSize="sm"
                            color="ink.600"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </Stack>
                    </AccordionPanel>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
