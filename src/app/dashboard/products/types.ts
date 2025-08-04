export interface Product {
  id: string;
  name: string;
  category: string;
  supplier: string;
  costPrice: number;
  sellingPrice: number;
  stockQuantity: number;
  status: 'In Stock' | 'Out of Stock' | 'Low Stock';
}
