import { ProductType } from "./dataMock";

export interface ProductsContextType {
    getProducts: () => Promise<void>;
    getProductsSale: () => Promise<void>;
    getProductDetails: (productType: 'products' | 'saleProducts', id: number) => Promise<void>;
    productDetails: ProductType | null;
    productsSale: ProductType[] | null;
    products: ProductType[] | null;
    loading: boolean;
    loadingProductDetail: boolean;
}