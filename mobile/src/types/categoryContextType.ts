import { CategoryProduct } from "./dataMock"

export interface CategoryContextType {
    getCategories: () => Promise<void>
    categories: CategoryProduct[] | null;
    loading: boolean;
}