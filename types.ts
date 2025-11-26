export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
  }
  
  export interface ServiceAlert {
    active: boolean;
    message: string;
    level: 'info' | 'warning' | 'critical';
  }