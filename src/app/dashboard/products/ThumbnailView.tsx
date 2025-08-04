'use client';

import { SimpleGrid, Image, Heading, Text, VStack } from '@chakra-ui/react';
import { Product } from './types';

interface ThumbnailViewProps {
  products: Product[];
}

export default function ThumbnailView({ products }: ThumbnailViewProps) {
  return (
    <SimpleGrid columns={{ sm: 2, md: 4, lg: 6 }} spacing={4}>
      {products.map((product) => (
        <VStack key={product.id} p={3} shadow="md" borderWidth="1px" rounded="md">
          <Image
            src={`https://via.placeholder.com/150?text=${product.name}`}
            alt={product.name}
            boxSize="100px"
            objectFit="cover"
          />
          <Heading mt={2} fontSize="md" textAlign="center">{product.name}</Heading>
          <Text fontSize="sm" color="gray.500">${product.sellingPrice.toFixed(2)}</Text>
        </VStack>
      ))}
    </SimpleGrid>
  );
}
