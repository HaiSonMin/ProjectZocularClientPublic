import React from 'react'

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({className, ...props}, ref) => {
		return (
			<input
				ref={ref}
				className={`w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none transition ${className}`}
				{...props}
			/>
		)
	}
)

Input.displayName = 'Input'
