'use client';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const InputContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const Input = styled.input`
    width: 100%;
    height: 100%;
    left: 0px;
    border: 2px solid var(--color-grey-500);
    font-weight: 500;
    color: var(--color-text-grey);
    &:focus {
        outline: none;
    }
    &:read-only {
        background-color: #f5f5f5;
        color: #333;
        cursor: text;
    }
`;

const TextArea = styled.textarea`
    width: 100%;
    padding: 1rem;
    font-size: 1.4rem;
    left: 0px;
    border: 1px solid var(--color-grey-500);
    background-color: transparent;
    height: 13rem;
    font-weight: 500;
    &:focus {
        border-color: 'var(--color-primary)';
        outline: none;
    }
`;

const Label = styled.label<{ $focused: boolean; $hasValue: boolean }>`
    position: absolute;
    transition: all 0.3s;
    ${(props) =>
        props.$focused || props.$hasValue
            ? css`
                  left: 0.5rem;
                  top: 0.4rem;
              `
            : css`
                  left: 1.2rem;
                  top: 2rem;
              `};
    font-size: ${(props) => (props.$focused || props.$hasValue ? '1.2rem' : '1.4rem')};
    color: ${(props) => (props.$focused ? 'var(--color-primary)' : 'var(--color-text-secondary)')};
    cursor: auto;

    .required {
        color: var(--color-danger);
        font-weight: 500;
    }
`;

const ShowPasswordButton = styled.span<{ $showPassword: boolean }>`
    position: absolute;
    right: 1rem;
    top: 2.8rem;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    font-size: 18px;
    color: ${(props) => (props.$showPassword ? 'black' : 'inherit')};
`;

const ErrorInput = styled.p`
    margin-top: 5px;
    color: var(--color-red-400);
    font-size: 1.1rem;
    font-weight: 600;
    text-align: left;
`;

interface IProps {
    id?: string;
    type?: React.HTMLInputTypeAttribute;
    label?: string;
    placeholder?: string;
    register: any;
    hasValue: boolean;
    children?: React.ReactNode;
    error?: string;
    autoFocus?: boolean;
    isRequired?: boolean;
    isTextArea?: boolean;
    className?: string;
    value?: any;
    min?: string;
    max?: string;
    readonly?: boolean;
}

export function InputForm({
    type = 'text',
    label,
    error,
    placeholder,
    children,
    register,
    hasValue,
    autoFocus,
    className,
    isRequired = false,
    isTextArea,
    id,
    value,
    min,
    max,
    readonly,
}: IProps) {
    const [focused, setFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleInputFocus = () => setFocused(true);
    const handleInputBlur = () => setFocused(false);
    const toggleShowPassword = () => setShowPassword(!showPassword);

    return (
        <InputContainer>
            {!isTextArea ? (
                <Input
                    type={type !== 'password' ? type : showPassword ? 'text' : type}
                    {...register}
                    placeholder={placeholder}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    autoComplete="true"
                    autoFocus={autoFocus || false}
                    className={className}
                    id={id}
                    value={value}
                    min={type === 'date' ? min : undefined}
                    max={type === 'date' ? max : undefined}
                    readOnly={readonly}
                />
            ) : (
                <TextArea
                    {...register}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    autoComplete="true"
                    autoFocus={autoFocus || false}
                    className={className}
                    id={id}
                    value={value}
                />
            )}
            <Label $focused={focused} $hasValue={hasValue}>
                {label} {isRequired && <span className="required">(*)</span>}
            </Label>
            {type === 'password' && (
                <ShowPasswordButton onClick={toggleShowPassword} $showPassword={showPassword}>
                    {!showPassword ? <FaEye /> : <FaEyeSlash />}
                </ShowPasswordButton>
            )}
            {children}
            {error && <ErrorInput>{error}</ErrorInput>}
        </InputContainer>
    );
}
