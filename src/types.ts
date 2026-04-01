export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'mouse' | 'monitor' | 'cabinet' | 'graphics' | 'keyboard';
  image: string;
  features: string[];
  specs: {
    label: string;
    value: string;
  }[];
  relatedIds: string[];
  inStock: boolean;
}

export interface Review {
  id: string;
  productId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export type View = 'home' | 'shop' | 'product' | 'checkout';
