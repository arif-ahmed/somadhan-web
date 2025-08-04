'use client';

import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  Button,
  useDisclosure,
  IconButton,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import Link from 'next/link';

export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        icon={<FiMenu />}
        onClick={onOpen}
        aria-label="Open Menu"
        variant="ghost"
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Modules</DrawerHeader>
          <DrawerBody>
            <VStack align="stretch">
              <Link href="/dashboard" passHref>
                <Button as="a" w="100%" justifyContent="flex-start">
                  Home
                </Button>
              </Link>
              <Link href="/dashboard/products" passHref>
                <Button as="a" w="100%" justifyContent="flex-start">
                  Products
                </Button>
              </Link>
              <Link href="/dashboard/trending" passHref>
                <Button as="a" w="100%" justifyContent="flex-start">
                  Trending
                </Button>
              </Link>
              <Link href="/dashboard/explore" passHref>
                <Button as="a" w="100%" justifyContent="flex-start">
                  Explore
                </Button>
              </Link>
              {/* Add other module links here */}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
