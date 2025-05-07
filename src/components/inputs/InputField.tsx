import { MESS_ERROR_CONSTANT } from '@/constants';
import { Input, Typography } from 'antd';
import { Controller, Control, FieldErrors } from 'react-hook-form';

interface IPropsInputField<T> {
  label: string;
  name: keyof T;
  control: Control<any>;
  required?: boolean;
  extraValidate?: (val: string) => string | true;
  placeholder?: string;
  errors: FieldErrors<any>;
}

export function InputField<T>({
  label,
  name,
  control,
  required,
  extraValidate,
  placeholder,
  errors,
}: IPropsInputField<T>) {
  return (
    <div>
      <Typography.Title level={5}>{label}</Typography.Title>
      <Controller
        name={`${name.toString()}`}
        control={control}
        rules={{
          required: required,
          validate: extraValidate,
        }}
        render={({ field }) => (
          <>
            <Input {...field} size='large' placeholder={placeholder} />
            <div className='h-3 mt-1'>
              {errors?.[name]?.type === 'required' && (
                <Typography className='text-red-400 text-[12px] font-[500]'>
                  {MESS_ERROR_CONSTANT.FIELD_NOT_EMPTY(label)}
                </Typography>
              )}
              {errors?.[name] && (
                <Typography className='text-red-400 text-[12px] font-[500]'>
                  {errors?.[name]?.message as string}
                </Typography>
              )}
            </div>
          </>
        )}
      />
    </div>
  );
}
