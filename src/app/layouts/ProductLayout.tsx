"use client";

import {ReactNode} from "react";

interface IProps {
	children: ReactNode;
}

export default function ProductLayout({children}: IProps) {
	return children;
}
