'use client';

import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  useDisclosure,
  Text,
  Link as ChakraLink,
  VStack,
  HStack,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Icon,
  useColorModeValue, // Import useColorModeValue
  Image,
} from '@chakra-ui/react';
import { FiMenu, FiHome, FiTrendingUp, FiCompass, FiStar, FiSettings, FiBell, FiChevronDown, FiBox } from 'react-icons/fi';
import { IconType } from 'react-icons';
import { ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface NavItemProps {
  icon: IconType;
  children: ReactNode;
  href: string;
  onClose?: () => void; // Add onClose to NavItemProps
}

const NavItem = ({ icon, children, href, onClose }: NavItemProps) => {
  return (
    <ChakraLink as={Link} href={href} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }} onClick={onClose}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </ChakraLink>
  );
};

interface MobileProps {
  onOpen: () => void;
}

import ColorModeToggle from '../../components/ColorModeToggle';

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const router = useRouter();
  const menuBg = useColorModeValue('white', 'gray.800');
  const menuBorder = useColorModeValue('gray.200', 'gray.700');

  const handleLogout = () => {
    // In a real application, you would clear authentication tokens/sessions here.
    router.push('/');
  };

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.800')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <HStack display={{ base: 'flex', md: 'none' }} spacing={3}>
        <Image src="/images/logo.png" alt="Somadhan Logo" boxSize="40px" />
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Somadhan
        </Text>
      </HStack>

      <HStack spacing={{ base: '0', md: '6' }}>
        <ColorModeToggle />
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
              <MenuItem onClick={handleLogout}>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

interface SidebarProps {
  onClose: () => void;
  display?: { base?: string; md?: string; };
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const LinkItems = [
    { name: 'Home', icon: FiHome, href: '/dashboard' },
    { name: 'Trending', icon: FiTrendingUp, href: '/dashboard/trending' },
    { name: 'Explore', icon: FiCompass, href: '/dashboard/explore' },
    { name: 'Favourites', icon: FiStar, href: '/dashboard/favourites' },
    { name: 'Settings', icon: FiSettings, href: '/dashboard/settings' },
    { name: 'Products', icon: FiBox, href: '/dashboard/products' },
  ];

  return (
    <Box
      bg={useColorModeValue('white', 'gray.800')} // Use useColorModeValue
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')} // Use useColorModeValue
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <HStack>
          <Image src="/images/logo.png" alt="Somadhan Logo" boxSize="40px" />
          <Text fontSize="xl" fontWeight="bold">
            Somadhan
          </Text>
        </HStack>
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} href={link.href} onClose={onClose}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}> 
      <SidebarContent onClose={onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}
