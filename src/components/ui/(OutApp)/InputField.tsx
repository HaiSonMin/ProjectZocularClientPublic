import React, {useState} from 'react'
import {Eye, EyeOff} from 'lucide-react'

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string
	error?: string
	typeInput?: '1' | '2'
	isRequired?: boolean
}

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
	(
		{
			label,
			error,
			type,
			typeInput = '1',
			isRequired = false,
			className = '',
			...props
		},
		ref
	) => {
		const [showPassword, setShowPassword] = useState(false)
		const isPassword = type === 'password'
		
		return (
			<div className="mb-4 w-full">
				{/* Label */}
				{label && (
					<label className="block text-gray-400 font-semibold mb-1">
						{label} {isRequired && <span className="text-red-500">*</span>}
					</label>
				)}
				
				{/* Input Wrapper */}
				<div className="relative">
					<input
						ref={ref}
						{...props}
						type={isPassword && showPassword ? 'text' : type}
						className={`w-full ${
							typeInput === '1'
								? 'border-b py-2'
								: 'border px-4 py-2 rounded-md'
						} focus:outline-none transition ${
							error ? 'border-red-500' : 'border-gray-300'
						} ${className}`}
					/>
					
					{/* Show/Hide Password Button */}
					{isPassword && (
						<button
							type="button"
							className="absolute right-2 top-2 text-gray-500"
							onClick={() => setShowPassword(!showPassword)}
						>
							{showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
						</button>
					)}
				</div>
				
				{/* Error Message */}
				{error && <p className="text-red-500 text-sm mt-1">{error}</p>}
			</div>
		)
	}
)

InputField.displayName = 'InputField'

export default InputField
