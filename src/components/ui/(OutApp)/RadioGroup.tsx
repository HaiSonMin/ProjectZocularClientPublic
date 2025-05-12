'use client'

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import {CheckCircle, Circle, CircleDot, Dot} from 'lucide-react'

interface RadioGroupProps {
	value: string
	onChange: (val: string) => void
	options: { value: string; label: string; icon?: React.ReactNode }[]
}

export const RadioGroup = ({value, onChange, options}: RadioGroupProps) => {
	return (
		<RadioGroupPrimitive.Root
			className="space-y-2"
			value={value}
			onValueChange={onChange}
		>
			{options.map(option => (
				<RadioGroupPrimitive.Item
					key={option.value}
					value={option.value}
					className={`flex items-center justify-between w-full p-4 border rounded-lg cursor-pointer transition ${
						value === option.value
							? 'bg-gray-100 border-black'
							: 'border-gray-300'
					}`}
				>
					<div className="flex items-center gap-2">
						{value === option.value ? (
							// <CheckCircle className="text-black w-5 h-5" />
							<CircleDot className="text-black w-5 h-5"/>
						) : (
							<Circle className="text-gray-400 w-5 h-5"/>
						)}
						<span>{option.label}</span>
					</div>
				</RadioGroupPrimitive.Item>
			))}
		</RadioGroupPrimitive.Root>
	)
}
