export interface ProductItem {
  id: string;
  title: string;
  price: string | number;
  old_price?: string | number;
  discount?: number;
  type?: string;
  imageUrl: string;
}
