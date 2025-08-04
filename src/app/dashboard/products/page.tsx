
'use client';

import {
  Box,
  Button,
  Flex,
  Heading,
  useDisclosure,
  IconButton,
  Stack,
} from '@chakra-ui/react';
import { FiGrid, FiList, FiBox } from 'react-icons/fi';
import { useState } from 'react';
import ProductList from './ProductList';
import ProductModal from './ProductModal';
import CardView from './CardView';
import ThumbnailView from './ThumbnailView';
import { Product } from './types';


const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Claw Hammer, 16 oz',
    category: 'Hand Tools',
    supplier: 'Tools Inc.',
    costPrice: 8.5,
    sellingPrice: 14.99,
    stockQuantity: 24,
    status: 'In Stock',
  },
  {
    id: '2',
    name: 'Drill Bit Set, 20-Piece',
    category: 'Power Tool Accessories',
    supplier: 'Drill Master',
    costPrice: 15.0,
    sellingPrice: 29.99,
    stockQuantity: 10,
    status: 'In Stock',
  },
  {
    id: '3',
    name: 'Exterior Paint, 1 Gallon',
    category: 'Paint',
    supplier: 'Color Co.',
    costPrice: 22.0,
    sellingPrice: 39.99,
    stockQuantity: 5,
    status: 'Low Stock',
  },
  {
    id: '4',
    name: 'Garden Hose, 50 ft',
    category: 'Gardening',
    supplier: 'Green Thumb',
    costPrice: 12.0,
    sellingPrice: 24.99,
    stockQuantity: 0,
    status: 'Out of Stock',
  },
];

type ViewMode = 'grid' | 'card' | 'thumbnail';

export default function ProductsPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  const renderView = () => {
    switch (viewMode) {
      case 'card':
        return <CardView products={sampleProducts} />;
      case 'thumbnail':
        return <ThumbnailView products={sampleProducts} />;
      case 'grid':
      default:
        return <ProductList />;
    }
  };

  return (
    <Box>
      <Flex justify="space-between" align="center" mb={6}>
        <Flex align="center">
          <Heading as="h1" size="xl" ml={4}>
            Products
          </Heading>
        </Flex>
        <Stack direction="row" spacing={2}>
          <IconButton
            icon={<FiGrid />}
            aria-label="Grid View"
            onClick={() => setViewMode('grid')}
            variant={viewMode === 'grid' ? 'solid' : 'outline'}
          />
          <IconButton
            icon={<FiBox />}
            aria-label="Card View"
            onClick={() => setViewMode('card')}
            variant={viewMode === 'card' ? 'solid' : 'outline'}
          />
          <IconButton
            icon={<FiList />}
            aria-label="Thumbnail View"
            onClick={() => setViewMode('thumbnail')}
            variant={viewMode === 'thumbnail' ? 'solid' : 'outline'}
          />
          <Button colorScheme="blue" onClick={onOpen}>
            Create Product
          </Button>
        </Stack>
      </Flex>
      {renderView()}
      <ProductModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}
