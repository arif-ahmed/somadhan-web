
'use client';

import {
  Box,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <Box>
      <Heading>Dashboard</Heading>
      <Text>Welcome to your dashboard.</Text>
      <Link href="/">
        <Button mt={4}>Go to Home</Button>
      </Link>
    </Box>
  );
}
