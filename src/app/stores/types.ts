import {z} from 'zod'

export interface CartItem {
	id: number
	name: string
	price: number
	quantity: number
	image: string
	code?: string
}

export const checkoutSchema = z.object({
	firstName: z.string().min(1, 'First name is required'),
	lastName: z.string().min(1, 'Last name is required'),
	phoneNumber: z.string().min(1, 'Phone number is required'),
	email: z.string().email('Invalid email address'),
	streetAddress: z.string().min(1, 'Street address is required'),
	country: z.string().min(1, 'Country is required'),
	townCity: z.string().min(1, 'Town/City is required'),
	state: z.string().min(1, 'State is required'),
	zipCode: z.string().min(1, 'Zip code is required'),
	useDifferentBilling: z.boolean().optional(),
	cardNumber: z.string().min(1, 'Card number is required'),
	expiryDate: z.string().min(1, 'Expiry date is required'),
	cvc: z.string().min(3, 'CVC is required'),
	paymentMethod: z.enum(['creditCard', 'paypal'], {
		required_error: 'Payment method is required',
	}),
})
