'use client';
import { HTMLAttributes } from 'react';
import styled from 'styled-components';

const H6Styled = styled.h6``;

interface IProps extends HTMLAttributes<HTMLHeadingElement> {}

export function H6({ ...props }: IProps) {
  return <H6Styled {...props} />;
}
