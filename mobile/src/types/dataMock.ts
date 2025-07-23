export interface ProductType {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    category: CategoryProduct
};

export interface CategoryProduct {
    id: number;
    name: string;
    image: string;
}

export interface CategoryType {
    id: number;
    name: string;
    image: string;
}