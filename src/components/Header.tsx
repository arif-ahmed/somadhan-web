'use client';

import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  IconButton,
  HStack,
  Avatar,
  VStack,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Image,
} from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ColorModeToggle from './ColorModeToggle';
import { FiBell, FiChevronDown } from 'react-icons/fi';

export default function Header() {
  const pathname = usePathname();
  const isDashboardPage = pathname.startsWith('/dashboard');

  const bgColor = useColorModeValue('gray.100', 'gray.900');
  const menuBg = useColorModeValue('white', 'gray.800');
  const menuBorder = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box bg={bgColor} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <HStack>
          <Image src="/images/logo.png" alt="Somadhan Logo" boxSize="40px" />
          <Text fontSize="xl" fontWeight="bold">
            Somadhan
          </Text>
        </HStack>

        <Flex alignItems={'center'}>
          <HStack spacing={{ base: '0', md: '6' }}>
            {!isDashboardPage && (
              <>
                <Link href="/auth/login">
                  <Button>Login</Button>
                </Link>
                <Link href="/auth/register">
                  <Button>Register</Button>
                </Link>
              </>
            )}
            <ColorModeToggle />
            {isDashboardPage && (
              <>
                <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<FiBell />} />
                <Flex alignItems={'center'}>
                  <Menu>
                    <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
                      <HStack>
                        <Avatar
                          size={'sm'}
                          src="https://images.unsplash.com/photo-1619946794135-5eeef4a762c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                        />
                        <VStack
                          display={{ base: 'none', md: 'flex' }}
                          alignItems="flex-start"
                          spacing="1px"
                          ml="2"
                        >
                          <Text fontSize="sm">Justina Clark</Text>
                          <Text fontSize="xs" color="gray.600">
                            Admin
                          </Text>
                        </VStack>
                        <Box display={{ base: 'none', md: 'flex' }}>
                          <FiChevronDown />
                        </Box>
                      </HStack>
                    </MenuButton>
                    <MenuList bg={menuBg} borderColor={menuBorder}>
                      <MenuItem>Profile</MenuItem>
                      <MenuItem>Settings</MenuItem>
                      <MenuItem>Billing</MenuItem>
                      <MenuDivider />
                      <MenuItem>Sign out</MenuItem>
                    </MenuList>
                  </Menu>
                </Flex>
              </>
            )}
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
}