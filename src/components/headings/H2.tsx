'use client'
import { HTMLAttributes } from 'react';
import styled from 'styled-components';

const H2Styled = styled.h1``;

interface IProps extends HTMLAttributes<HTMLHeadingElement> {}

export function H2({ ...props }: IProps) {
  return <H2Styled {...props} />;
}
