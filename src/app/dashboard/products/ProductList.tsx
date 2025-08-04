
'use client';

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Input,
  Flex,
  Button,
  Select,
} from '@chakra-ui/react';
import {
  FiMoreVertical,
  FiEdit,
  FiTrash2,
  FiChevronLeft,
  FiChevronRight,
} from 'react-icons/fi';
import { Product } from './types';
import { useMemo, useState } from 'react';
import ProductModal from './ProductModal';

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

export default function ProductList() {
  const products = sampleProducts;
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState({ key: 'name', direction: 'asc' });
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | undefined>(
    undefined
  );

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingProduct(undefined);
  };

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => p.name.toLowerCase().includes(filter.toLowerCase()))
      .sort((a, b) => {
        const aValue = a[sort.key as keyof Product];
        const bValue = b[sort.key as keyof Product];
        if (aValue < bValue) return sort.direction === 'asc' ? -1 : 1;
        if (aValue > bValue) return sort.direction === 'asc' ? 1 : -1;
        return 0;
      });
  }, [products, filter, sort]);

  const paginatedProducts = useMemo(() => {
    const startIndex = (page - 1) * itemsPerPage;
    return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredProducts, page, itemsPerPage]);

  const handleSort = (key: string) => {
    setSort((prev) => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  return (
    <>
      <Flex mb={4} gap={2}>
        <Input
          placeholder="Filter by name"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <Select
          value={sort.key}
          onChange={(e) => handleSort(e.target.value)}
          w="200px"
        >
          <option value="name">Name</option>
          <option value="category">Category</option>
          <option value="sellingPrice">Price</option>
          <option value="stockQuantity">Stock</option>
        </Select>
      </Flex>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th cursor="pointer" onClick={() => handleSort('name')}>
              Name
            </Th>
            <Th cursor="pointer" onClick={() => handleSort('category')}>
              Category
            </Th>
            <Th cursor="pointer" onClick={() => handleSort('sellingPrice')}>
              Price
            </Th>
            <Th cursor="pointer" onClick={() => handleSort('stockQuantity')}>
              Stock
            </Th>
            <Th>Status</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {paginatedProducts.map((product) => (
            <Tr key={product.id}>
              <Td>{product.name}</Td>
              <Td>{product.category}</Td>
              <Td>${product.sellingPrice.toFixed(2)}</Td>
              <Td>{product.stockQuantity}</Td>
              <Td>{product.status}</Td>
              <Td>
                <Menu>
                  <MenuButton
                    as={IconButton}
                    icon={<FiMoreVertical />}
                    variant="ghost"
                  />
                  <MenuList>
                    <MenuItem
                      icon={<FiEdit />}
                      onClick={() => handleEdit(product)}
                    >
                      Edit
                    </MenuItem>
                    <MenuItem icon={<FiTrash2 />} color="red.500">
                      Delete
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Flex justify="flex-end" mt={4} align="center">
        <Button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          leftIcon={<FiChevronLeft />}
        >
          Previous
        </Button>
        <Button
          onClick={() =>
            setPage((p) =>
              p * itemsPerPage < filteredProducts.length ? p + 1 : p
            )
          }
          disabled={page * itemsPerPage >= filteredProducts.length}
          rightIcon={<FiChevronRight />}
          ml={2}
        >
          Next
        </Button>
      </Flex>
      <ProductModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={editingProduct}
      />
    </>
  );
}

