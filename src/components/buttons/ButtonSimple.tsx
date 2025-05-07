import styled, { css, keyframes } from 'styled-components';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import React, { ButtonHTMLAttributes } from 'react';

const ButtonSimpleStyle = styled.button`
    cursor: pointer;
    display: flex;
    justify-content: center;
    padding: 1rem 2rem;
    border-radius: 1rem;
    color: var(--color-white);
    font-weight: 600;
    background-color: var(--color-blue-600);
    &:hover {
        cursor: pointer !important;
    }

    &:disabled {
        opacity: .8;
        cursor: not-allowed;
    }
`;
//
const spin = keyframes`
    to {
        transform: rotate(360deg);
    }
`;
const spinAnimation = css`
    animation: ${spin} 1s linear infinite;
`;
const LoadingIcon = styled(AiOutlineLoading3Quarters) <{ isLoading?: boolean }>`
    ${({ isLoading }) => isLoading && spinAnimation}
    width: 24px;
    height: 24px;
`;

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string | React.ReactNode;
    isLoading?: boolean;
}

export default function ButtonSimple({ text, isLoading, ...props }: IProps) {
    return <ButtonSimpleStyle disabled={isLoading} {...props}>{isLoading ? <LoadingIcon isLoading={isLoading} /> : text}</ButtonSimpleStyle>;
}