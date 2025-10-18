"use client";

import CustomInput from "@/components/ui/custom-input";
import {
  Flex,
  Box,
  Text,
  Input,
  IconButton,
  Avatar,
  HStack,
} from "@chakra-ui/react";
import { FiSearch, FiBell } from "react-icons/fi";

const Topbar = () => {
  return (
    <Flex
      as="header"
      position="sticky"
      top="0"
      zIndex="10"
      bg="white"
      borderBottomWidth="1px"
      borderColor="gray.200"
      align="center"
      justify="space-between"
      h="64px"
      px="6"
      shadow="sm"
    >
      {/* Left Section */}
      <Text fontSize="lg" fontWeight="bold" color="brand.500">
        Mainstack Dashboard
      </Text>

      {/* Center Search Bar (optional) */}
      <Box flex="1" maxW="400px" mx="8" display={{ base: "none", md: "block" }}>
        <Flex align="center" bg="gray.100" rounded="full" px="3">
          <FiSearch color="#A0AEC0" />
          <CustomInput 
            label="Search"
            name="search"
            defaultValue=""
            placeholder="Search..."
            isDisabled={false}
            errorMessage=""
            onBlur={() => {}}
            onChange={() => {}}
          />
        </Flex>
      </Box>

      {/* Right Section */}
      <HStack gap="4">
        <IconButton
          aria-label="Notifications"
          variant="ghost"
        //   icon={<FiBell />}
          size="md"
        />
         <Avatar.Root>
          <Avatar.Image src="https://i.pravatar.cc/150?img=32" />
          <Avatar.Fallback>GO</Avatar.Fallback>
        </Avatar.Root>
      </HStack>
    </Flex>
  );
};

export default Topbar;
