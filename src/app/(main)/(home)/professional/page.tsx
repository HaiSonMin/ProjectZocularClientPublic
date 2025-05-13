"use client";

import {useRouter} from "next/navigation";
import {useEffect} from "react";

export default function Page() {
	const router = useRouter();
	const isProfessional = true;
	
	useEffect(() => {
		if (isProfessional) {
			router.push("/professional/me");
		} else {
			router.push("/professional/register");
		}
	}, []);
	
	return <div>Professional</div>;
}
