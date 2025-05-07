'use client'
import { HTMLAttributes } from 'react';
import styled from 'styled-components';

const H4Styled = styled.h4``;

interface IProps extends HTMLAttributes<HTMLHeadingElement> {}

export function H4({ ...props }: IProps) {
  return <H4Styled {...props} />;
}
