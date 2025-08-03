
'use client';

import { Box, Flex, Button, useColorModeValue, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import ColorModeToggle from './ColorModeToggle';

export default function Header() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Box>Logo</Box>

        <Flex alignItems={'center'}>
          <Stack direction={'row'} spacing={7}>
            <Link href="/">
              <Button>Home</Button>
            </Link>
            <Link href="/auth/login">
              <Button>Login</Button>
            </Link>
            <Link href="/auth/register">
              <Button>Register</Button>
            </Link>
            <ColorModeToggle />
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}
