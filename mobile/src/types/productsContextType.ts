import { ProductType } from "./dataMock";

export interface ProductsContextType {
    getProducts: () => Promise<void>;
    products: ProductType[] | null;
    loading: boolean
}