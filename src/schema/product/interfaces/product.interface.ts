export interface Product {
  id?: string;
  originalPrice: number;
  discountPrice: number;
  name: string;
  category: string;
  store: string;
  updateTime: Date;
}
