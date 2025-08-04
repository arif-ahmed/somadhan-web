
'use client';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Select,
} from '@chakra-ui/react';
import { Product } from './types';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product?: Product;
}

export default function ProductModal({ isOpen, onClose, product }: ProductModalProps) {
  const isEditing = !!product;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{isEditing ? 'Edit Product' : 'Create Product'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input defaultValue={product?.name} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Category</FormLabel>
              <Input defaultValue={product?.category} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Supplier</FormLabel>
              <Input defaultValue={product?.supplier} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Cost Price</FormLabel>
              <Input type="number" defaultValue={product?.costPrice} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Selling Price</FormLabel>
              <Input type="number" defaultValue={product?.sellingPrice} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Stock Quantity</FormLabel>
              <Input type="number" defaultValue={product?.stockQuantity} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Status</FormLabel>
              <Select defaultValue={product?.status}>
                <option value="In Stock">In Stock</option>
                <option value="Out of Stock">Out of Stock</option>
                <option value="Low Stock">Low Stock</option>
              </Select>
            </FormControl>
          </Stack>
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue">{isEditing ? 'Save Changes' : 'Create'}</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
