export interface CartType {
    id: number;
    title: string;
    price: number;
    quantity: number;
    color: string;
    size?: string;
    image: string;
}

export interface CartContextType {
    getCartItems: () => Promise<void>;
    postCartItem: (item: CartType) => Promise<'success' | 'failure'>;
    cartItems: CartType[] | null;
    loading: boolean;
    error: boolean;
}