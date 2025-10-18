"use client";

import { Box, Grid, Heading, Text } from "@chakra-ui/react";

export default function DashboardPage() {
  return (
    <>
      <Heading mb="4">Overview</Heading>
      <Grid columns={[1, 2, 3]} gap="6">
        <Box bg="white" p="4" rounded="lg" shadow="sm">
          <Text fontWeight="medium" color="gray.600">
            Total Users
          </Text>
          <Text fontSize="2xl" fontWeight="bold">
            1,245
          </Text>
        </Box>

        <Box bg="white" p="4" rounded="lg" shadow="sm">
          <Text fontWeight="medium" color="gray.600">
            Revenue
          </Text>
          <Text fontSize="2xl" fontWeight="bold">
            $58,430
          </Text>
        </Box>

        <Box bg="white" p="4" rounded="lg" shadow="sm">
          <Text fontWeight="medium" color="gray.600">
            Active Sessions
          </Text>
          <Text fontSize="2xl" fontWeight="bold">
            312
          </Text>
        </Box>
      </Grid>
    </>
  );
}
