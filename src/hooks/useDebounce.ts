import {useState, useEffect} from "react";

function useDebounce<T>(value: T, delay: number) {
	const [debouncedValue, setDebouncedValue] = useState(value);
	
	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);
		
		// Cleanup the timeout if value or delay changes
		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);
	
	return debouncedValue;
}

export default useDebounce;
