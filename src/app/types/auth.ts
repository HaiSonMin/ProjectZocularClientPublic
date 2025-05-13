export type LoginRequest = {
	email: string;
	password: string;
};

export interface RegisterRequest {
	first_name: string;
	last_name: string;
	email: string;
	password: string;
	mobile_phone: string;
	telephone: string;
	birth_year: number;
	gender: string;
	address: {
		address_line1: string;
		address_line2: string;
		city: string;
		zip_code: string;
		state: string;
		country: string;
	};
}

export type ResponseMetaDefault = {
	message?: string;
	hasNextPage?: boolean;
	total?: number;
	limit?: number;
	offset?: number;
	has_next_page?: boolean;
	has_previous_page?: boolean;
	cursors?: {
		prev?: string;
		next?: string;
	};
};

export type DataResponse<TData = unknown, TMeta = ResponseMetaDefault> = {
	data: {
		data: TData;
		meta?: TMeta;
		code?: string;
	};
};

export type User = {
	_id: string;
	name: string;
	email: string;
	status: string;
};

export type AuthResponse = {
	user: User;
	tokens: {
		accessToken: string;
		refreshToken: string;
	};
};

export type AccountType = "customer" | "professional";

export const TOKEN_KEY = "token";
export const USER_ID_KEY = "user_id";
