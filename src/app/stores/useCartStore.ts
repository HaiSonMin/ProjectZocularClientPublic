import {create} from "zustand";
import {CartItem} from "./types";
import {persist} from "zustand/middleware";

interface CartState {
	code: string;
	cart: CartItem[];
	setInitCart: (carts: CartItem[]) => void;
	updateQuantity: (id: number, quantity: number) => void;
	removeItem: (id: number) => void;
	setCode: (code: string) => void;
	addItem: (item: CartItem) => void;
}

export const useCartStore = create(
	persist<CartState>(
		(set) => ({
			code: "",
			cart: [],
			setCode: (code: string) => set({code}),
			setInitCart: (carts: CartItem[]) => set({cart: carts}),
			
			updateQuantity: (id: number, quantity: number) =>
				set((state) => {
					return {
						cart: state.cart.map((item) =>
							item.id === id ? {...item, quantity} : item
						),
					};
				}),
			removeItem: (id: number) =>
				set((state) => ({cart: state.cart.filter((item) => item.id !== id)})),
			addItem: (newItem: CartItem) =>
				set((state) => {
					const existingItem = state.cart.find(
						(item: CartItem) => item.id === newItem.id
					);
					if (existingItem) {
						return {
							cart: state.cart.map((item: CartItem) =>
								item.id === newItem.id
									? {...item, quantity: item.quantity + 1}
									: item
							),
						};
					} else {
						return {
							cart: [...state.cart, {...newItem, quantity: 1}],
						};
					}
				}),
		}),
		{name: "cart"}
	)
);
