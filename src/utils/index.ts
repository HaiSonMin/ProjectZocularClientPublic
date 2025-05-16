import { useRouter } from "next/navigation";

 
export const formatCurrency = (number: number) => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(number);
};


export const useHandleFeatureClick = () => {
	const router = useRouter();
 	
	return (path: string) => {
		router.push(path);
	 
	};
};