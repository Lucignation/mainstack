// src/app/dashboard/layout.tsx
"use client";

import { Flex, Box } from "@chakra-ui/react";
import Sidebar from "@/layouts/Sidebar";
import Topbar from "@/layouts/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Flex h="100vh" bg="gray.50">
      <Sidebar />
      <Box flex="1" overflowY="auto">
        <Topbar />
        <Box p={6}>{children}</Box>
      </Box>
    </Flex>
  );
}
