'use client'
import { HTMLAttributes } from 'react';
import styled from 'styled-components';

const H5Styled = styled.h5``;

interface IProps extends HTMLAttributes<HTMLHeadingElement> {}

export function H5({ ...props }: IProps) {
  return <H5Styled {...props} />;
}
