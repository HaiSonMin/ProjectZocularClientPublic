'use client'
import { HTMLAttributes } from 'react';
import styled from 'styled-components';

const H3Styled = styled.h3``;

interface IProps extends HTMLAttributes<HTMLHeadingElement> {}

export function H3({ ...props }: IProps) {
  return <H3Styled {...props} />;
}
