import { Typography } from "antd"
import { FieldErrors, UseFormRegister } from "react-hook-form"
import styled from "styled-components"

const StyledTextarea = styled.textarea`
  padding: 0.7rem
`

export default function TextareaRHF({
  register,
  name,
  placeholder,
  errors,
  errMess_required,
  extraValidate,
  errMess_extra
}: {
  register: UseFormRegister<any>,
  name: string,
  placeholder?: string,
  errors?: FieldErrors<any>,
  errMess_required?: string,
  extraValidate?: (value: string) => boolean,
  errMess_extra?: string
}) {
  return (
    <>
      <Typography.Title level={5}>{placeholder}</Typography.Title>
      <StyledTextarea rows={40}
        placeholder={placeholder ? placeholder : ''}
        {...register(name, {
          required: errMess_required,
          validate: {
            extra_validate: (value) => extraValidate ? extraValidate(value) : true,
          },
        })}
      />
      {errors?.[name] && (
        <p className='error' style={{ color: 'red' }}>
          {errors?.[name]?.message && errMess_required}
          {errors?.[name]?.type === 'extra_validate' && errMess_extra}
        </p>
      )}
    </>
  )
}