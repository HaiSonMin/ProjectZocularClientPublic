export type PageProps = {
	params: PageParams;
	searchParams: { [key: string]: string | string[] | undefined };
};

export type PageParams = {
	[key: string]: string;
};
