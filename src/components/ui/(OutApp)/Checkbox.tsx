import React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({label, ...props}) => {
	return (
		<label className='flex items-center space-x-2 cursor-pointer'>
			<input type='checkbox' {...props} className='w-4 h-4 text-blue-500'/>
			<span className='text-gray-700 text-sm'>{label}</span>
		</label>
	);
};
