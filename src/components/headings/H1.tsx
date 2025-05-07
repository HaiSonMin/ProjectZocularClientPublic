'use client';
import { HTMLAttributes } from 'react';
import styled from 'styled-components';

const H1Styled = styled.h1`
  color: var(--color-nude-400);
`;

interface IProps extends HTMLAttributes<HTMLHeadingElement> {}

export function H1({ ...props }: IProps) {
  return <H1Styled {...props} />;
}
