export interface Product {
	id: number;
	name: string;
	description: string;
	price: number;
	rating: number;
	image: string;
	bestseller: boolean;
}

export const products = [
	{
		id: 1,
		name: "ZocuLash Eyelash Enhancing Serum",
		description: "Like small jewels in shiny brass",
		price: 55.95,
		rating: 4.6,
		image: "/images/home/productList/01.png",
		bestseller: true,
	},
	{
		id: 2,
		name: "ZocuShield Syringe",
		description: "Dry eye specialists recommend",
		price: 55.95,
		rating: 4.6,
		image: "/images/home/productList/02.png",
		bestseller: true,
	},
	{
		id: 3,
		name: "ZocuZap Complete Skincare 15 CT",
		description: "Bodies with the penetrating",
		price: 24.95,
		rating: 4.6,
		image: "/images/home/productList/03.png",
		bestseller: true,
	},
	{
		id: 4,
		name: "ZocuShield & ZocuFoam Combo",
		description: "Maximal therapeutic effects",
		price: 97.95,
		rating: 4.6,
		image: "/images/home/productList/04.png",
		bestseller: true,
	},
	{
		id: 5,
		name: "ZocuWipe Towelette",
		description: "Your eyelids to provide instant",
		price: 45.95,
		rating: 4.6,
		image: "/images/home/productList/01.png",
		bestseller: true,
	},
	{
		id: 6,
		name: "ZocuShield & ZocuFoam Combo",
		description: "Combine the power",
		price: 97.95,
		rating: 4.6,
		image: "/images/home/productList/02.png",
		bestseller: true,
	},
	{
		id: 7,
		name: "ZocuFill Elixir",
		description: "Activated okra complex produces",
		price: 95.95,
		rating: 4.6,
		image: "/images/home/productList/03.png",
		bestseller: true,
	},
	{
		id: 8,
		name: "ZocuLash Eyelash Enhancing Serum",
		description: "Like small jewels in shiny brass",
		price: 55.95,
		rating: 4.6,
		image: "/images/home/productList/04.png",
		bestseller: true,
	},
];

export interface CartItem {
	id: number;
	name: string;
	price: number;
	quantity: number;
	image: string;
}

export const cartItems: CartItem[] = [
	{
		id: 1,
		name: "ZocuShield Syringe",
		price: 55.95,
		quantity: 2,
		image: "/images/home/productList/01.png",
	},
	{
		id: 2,
		name: "ZocuWipe Towelette",
		price: 45.95,
		quantity: 2,
		image: "/images/home/productList/02.png",
	},
	{
		id: 3,
		name: "ZocuShield & ZocuFoam Combo",
		price: 195.9,
		quantity: 1,
		image: "/images/home/productList/03.png",
	},
];

export interface Customer {
	id: number;
	name: string;
	email: string;
	joinedDate: string;
	orders: number;
	rewards: number;
}

export const customers: Customer[] = [
	{
		id: 1,
		name: "Dr. Luis Rojas",
		email: "luis_rojas@gmail.com",
		joinedDate: "22/03/2025",
		orders: 25,
		rewards: 10000,
	},
	{
		id: 2,
		name: "Dr.Shane Swatts",
		email: "shane_swatts@gmail.com",
		joinedDate: "15/02/2025",
		orders: 15,
		rewards: 6000,
	},
	{
		id: 3,
		name: "Dr. Edward Jaccoma",
		email: "edward_jaccoma@gmail.com",
		joinedDate: "10/01/2025",
		orders: 5,
		rewards: 2000,
	},
	{
		id: 4,
		name: "Dr. Luis Rojas",
		email: "luis_rojas@gmail.com",
		joinedDate: "22/03/2025",
		orders: 25,
		rewards: 10000,
	},
	{
		id: 5,
		name: "Dr.Shane Swatts",
		email: "shane_swatts@gmail.com",
		joinedDate: "15/02/2025",
		orders: 15,
		rewards: 6000,
	},
	{
		id: 6,
		name: "Dr. Luis Rojas",
		email: "luis_rojas@gmail.com",
		joinedDate: "22/03/2025",
		orders: 25,
		rewards: 10000,
	},
	{
		id: 7,
		name: "Dr.Shane Swatts",
		email: "shane_swatts@gmail.com",
		joinedDate: "15/02/2025",
		orders: 15,
		rewards: 6000,
	},
	{
		id: 8,
		name: "Dr. Luis Rojas",
		email: "luis_rojas@gmail.com",
		joinedDate: "22/03/2025",
		orders: 25,
		rewards: 10000,
	},
];
