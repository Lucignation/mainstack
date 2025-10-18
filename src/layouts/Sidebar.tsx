
"use client";

"use client";

import { VStack, Box, Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <Box
      as="aside"
      w="240px"
      h="100vh"
      bg="white"
      borderRight="1px solid"
      borderColor="gray.200"
      p={4}
      position="fixed"
      top={0}
      left={0}
    >
      <Text fontSize="lg" fontWeight="bold" mb={6}>
        Dashboard
      </Text>

      <VStack align="start" gap={4}>
        <Link
          as={NextLink}
          href="/dashboard"
          _hover={{ textDecoration: "none", color: "blue.500" }}
        >
          Overview
        </Link>
        <Link
          as={NextLink}
          href="/dashboard/users"
          _hover={{ textDecoration: "none", color: "blue.500" }}
        >
          Users
        </Link>
        <Link
          as={NextLink}
          href="/dashboard/analytics"
          _hover={{ textDecoration: "none", color: "blue.500" }}
        >
          Analytics
        </Link>
        <Link
          as={NextLink}
          href="/dashboard/settings"
          _hover={{ textDecoration: "none", color: "blue.500" }}
        >
          Settings
        </Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;
