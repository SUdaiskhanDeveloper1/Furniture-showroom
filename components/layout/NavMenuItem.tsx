"use client";

import NextLink from "next/link";
import {
  Box,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { NavLink } from "@/types";

export default function NavMenuItem({ link }: { link: NavLink }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (!link.children) {
    return (
      <Link
        as={NextLink}
        href={link.href}
        fontSize="sm"
        fontWeight="600"
        letterSpacing="wide"
        _hover={{ color: "brand.600" }}
      >
        {link.label}
      </Link>
    );
  }

  return (
    <Popover isOpen={isOpen} placement="bottom-start" gutter={18}>
      <Box onMouseEnter={onOpen} onMouseLeave={onClose}>
        <PopoverTrigger>
          <Link
            as={NextLink}
            href={link.href}
            fontSize="sm"
            fontWeight="600"
            letterSpacing="wide"
            _hover={{ color: "brand.600" }}
          >
            {link.label}
          </Link>
        </PopoverTrigger>
        <PopoverContent
          w="560px"
          border="1px solid"
          borderColor="ink.100"
          borderRadius="sm"
          shadow="lg"
          p="2"
        >
          <PopoverBody>
            <SimpleGrid columns={2} spacing="1">
              {link.children.map((child) => (
                <Link
                  key={child.href}
                  as={NextLink}
                  href={child.href}
                  p="3"
                  borderRadius="sm"
                  _hover={{ bg: "sand.100", textDecoration: "none" }}
                >
                  <Text fontWeight="600" fontSize="sm">
                    {child.label}
                  </Text>
                  {child.description && (
                    <Text fontSize="xs" color="ink.500">
                      {child.description}
                    </Text>
                  )}
                </Link>
              ))}
            </SimpleGrid>
          </PopoverBody>
        </PopoverContent>
      </Box>
    </Popover>
  );
}
