import React, {SelectHTMLAttributes, OptionHTMLAttributes} from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
	label?: string;
	error?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
	({label, error, children, ...props}, ref) => {
		return (
			<div className='flex flex-col space-y-1'>
				{label && (
					<label className='text-sm font-medium text-gray-700'>{label}</label>
				)}
				<select
					ref={ref}
					{...props}
					className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black'
				>
					{children}
				</select>
				{error && <span className='text-red-500 text-xs'>{error}</span>}
			</div>
		);
	}
);
Select.displayName = 'Select';

type SelectItemProps = OptionHTMLAttributes<HTMLOptionElement>;

export const SelectItem: React.FC<SelectItemProps> = ({
	                                                      children,
	                                                      ...props
                                                      }) => {
	return <option {...props}>{children}</option>;
};
