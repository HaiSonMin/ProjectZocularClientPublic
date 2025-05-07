'use client';

import styled from 'styled-components';
import React, { ButtonHTMLAttributes } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const ButtonSimpleStyle = styled.button<{
  $outLine: boolean;
  $success: boolean;
  $warning: boolean;
  $error: boolean;
  $secondary: boolean;
  $small: boolean;
  $large: boolean;
  $disabled: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => {
    if (props.$small) return '.6rem 1.6rem';
    if (props.$large) return '1.6rem 2.6em';
    return '1rem 2rem';
  }};
  border-radius: 0.8rem;
  color: ${(props) => {
    if (!props.$outLine) return 'var(--color-white)';
    if (props.$secondary) return 'var(--color-grey-600)';
    if (props.$success) return 'var(--color-green-700)';
    if (props.$warning) return 'var(--color-yellow-600)';
    if (props.$error) return 'var(--color-red-600)';
    return 'var(--color-blue-600)';
  }};
  font-weight: 600;
  background-color: ${(props) => {
    if (props.$outLine) return 'var(--color-white)';
    if (props.$secondary) return 'var(--color-grey-600)';
    if (props.$success) return 'var(--color-green-700)';
    if (props.$warning) return 'var(--color-yellow-600)';
    if (props.$error) return 'var(--color-red-600)';
    return 'var(--color-blue-600)';
  }};
  border: ${(props) => {
    let color = 'transparent';
    if (props.$outLine) color = 'currentColor';
    return `1px solid ${color}`;
  }};

  opacity: ${(props) => (props.$disabled ? '0.8' : '1')};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
`;

const ContainerIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  svg {
    font-size: 2rem;
  }
`;

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string | React.ReactNode;
  outLine?: boolean;
  success?: boolean;
  warning?: boolean;
  error?: boolean;
  secondary?: boolean;
  small?: boolean;
  large?: boolean;
  icon?: React.ReactNode;
  isLoading?: boolean;
}

export default function ButtonPrimary({
  text,
  outLine = false,
  success = false,
  warning = false,
  error = false,
  secondary = false,
  small = false,
  large = false,
  icon = <></>,
  isLoading = false,
  ...props
}: IProps) {
  return (
    <ButtonSimpleStyle
      $outLine={outLine}
      $success={success}
      $warning={warning}
      $error={error}
      $secondary={secondary}
      $small={small}
      $large={large}
      $disabled={isLoading}
      {...props}
    >
      <ContainerIcon>
        {isLoading ? (
          <AiOutlineLoading3Quarters className='animate-spin' />
        ) : (
          icon
        )}{' '}
        {text}
      </ContainerIcon>
    </ButtonSimpleStyle>
  );
}
