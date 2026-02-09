export interface Product {
    id: string | number;
    title: string;
    description?: string;
    price: number;
    image?: string;
    category?:string;
    rating?: {
        rate: number;
        count: number;
    }
}

export interface ProductsResponse {
    products: Product[];
   
}

