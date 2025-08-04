// app/page.tsx
'use client';

import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  SimpleGrid,
  Image,
  FormControl,
  FormLabel,
  Input,
  Spinner,
  useToast
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';


const logos = [
  "/images/khaas_food_logo.png",
  "/images/kry_international_logo.png",
  "/images/premium_fruits_logo.png",
  "/images/apex_logo.png",
];

export default function Page() {
  const router = useRouter();
  const toast = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const boxBgColor = useColorModeValue('gray.100', 'gray.700');

  const handleLogin = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      if (email === 'test@example.com' && password === 'password') {
        toast({
          title: 'Login Successful',
          description: 'Redirecting to dashboard...',
          status: 'success',
          duration: 2000,
          isClosable: true,
        });
        router.push('/dashboard');
      } else {
        toast({
          title: 'Login Failed',
          description: 'Invalid email or password.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    }, 2000); // Simulate 2 seconds API call
  };

  return (
    <Container maxW={'7xl'} as={SimpleGrid} columns={{ base: 1, md: 2 }} spacing={{ base: 10, lg: 32 }} py={{ base: 10, sm: 20, lg: 32 }}>
      <Stack spacing={{ base: 10, md: 20 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          Empower Your SME with{' '}
          <Text as={'span'} color={'blue.400'}>
            Somadhan
          </Text>
        </Heading>
        <Text color={'gray.500'}>
          A cloud-based SaaS platform designed to simplify business management for SMEs.
          Streamline your operations, enhance efficiency, and drive growth with our intuitive tools.
          Affordable, accessible, and built for your success.
        </Text>
        <Box py={10} overflow="hidden">
          <Text fontSize={'xl'} textAlign={'center'} mb={6}>
            Used by 5,000+ Bangladeshi sellers
          </Text>
          <motion.div
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            style={{
              display: "flex",
              width: "fit-content",
            }}
          >
            {[...Array(2)].map((_, i) => (
              <SimpleGrid key={i} columns={{ base: 2, md: 4 }} spacing={10} minW="100%" px="5">
                {logos.map((logo, logoIndex) => (
                  <Box key={logoIndex} height={'80px'} bg={boxBgColor} rounded={'md'} display={'flex'} alignItems={'center'} justifyContent={'center'} p={2}>
                    <Image src={logo} alt={`Logo ${logoIndex + 1}`} objectFit="contain" maxH="full" maxW="full" />
                  </Box>
                ))}
              </SimpleGrid>
            ))}
          </motion.div>
        </Box>
      </Stack>
      <Stack
        bg={useColorModeValue('gray.50', 'gray.700')}
        rounded={'xl'}
        p={{ base: 4, sm: 6, md: 8 }}
        spacing={{ base: 8 }}
        maxW={{ lg: 'lg' }}>
        <Stack spacing={4}>
          <Heading
            color={useColorModeValue('gray.800', 'white')}
            lineHeight={1.1}
            fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
            Login
          </Heading>
        </Stack>
        <Box as={'form'} mt={10}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </FormControl>
          </Stack>
          <Button
            fontFamily={'heading'}
            mt={8}
            w={'full'}
            bg={'brand.500'}
            color={'white'}
            _hover={{
              bg: 'brand.600',
              boxShadow: 'xl',
            }}
            onClick={handleLogin}
            isLoading={isLoading}
            spinner={<Spinner size="sm" />}
            loadingText="Logging in..."
            isDisabled={isLoading}
          >
            Login
          </Button>
        </Box>
        <Text color={'gray.500'}>
          Don&apos;t have an account?{" "}
          <Link href="/auth/register" color={'blue.400'}>Register here</Link>
        </Text>
      </Stack>
    </Container>
  );
}