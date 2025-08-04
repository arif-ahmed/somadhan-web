'use client';

import { Box, SimpleGrid, Heading, Text, Stack, Badge } from '@chakra-ui/react';
import { Product } from './types';

interface CardViewProps {
  products: Product[];
}

export default function CardView({ products }: CardViewProps) {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={6}>
      {products.map((product) => (
        <Box key={product.id} p={5} shadow="md" borderWidth="1px" rounded="md">
          <Heading fontSize="xl">{product.name}</Heading>
          <Text mt={2} color="gray.500">{product.category}</Text>
          <Stack mt={4} direction="row" align="center" justify="space-between">
            <Text fontWeight="bold">${product.sellingPrice.toFixed(2)}</Text>
            <Badge colorScheme={product.status === 'In Stock' ? 'green' : 'red'}>
              {product.status}
            </Badge>
          </Stack>
          <Text mt={2}>Stock: {product.stockQuantity}</Text>
        </Box>
      ))}
    </SimpleGrid>
  );
}
