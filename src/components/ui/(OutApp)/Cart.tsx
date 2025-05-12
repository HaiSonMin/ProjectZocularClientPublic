import React, {ReactNode} from 'react'

interface CardProps {
	children: ReactNode
	className?: string
}

export const Card: React.FC<CardProps> = ({children, className}) => {
	return (
		<div
			className={`border border-gray-300 rounded-lg shadow-sm bg-white ${className}`}
		>
			{children}
		</div>
	)
}

interface CardContentProps {
	children: ReactNode
	className?: string
}

export const CardContent: React.FC<CardContentProps> = ({
	                                                        children,
	                                                        className,
                                                        }) => {
	return <div className={`p-6 ${className}`}>{children}</div>
}
