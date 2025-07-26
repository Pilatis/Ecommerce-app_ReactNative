export interface ProductType {
    id: number;
    title: string;
    price: number;
    rating: number;
    discount?: number;
    description: string;
    images: string[] | string;
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