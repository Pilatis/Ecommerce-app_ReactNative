import { ProductType } from "./dataMock";

export interface ProductsContextType {
    getProducts: () => Promise<void>;
    getProductsSale: () => Promise<void>;
    productsSale: ProductType[] | null;
    products: ProductType[] | null;
    loading: boolean
}