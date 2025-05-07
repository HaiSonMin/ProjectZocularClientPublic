import { ButtonHTMLAttributes } from "react"
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styled, { css, keyframes } from "styled-components"

const StyledBtn = styled.button<{
  $bg_color_hex?: string,
  $border_radius?: string
}>`
  position: relative;
  cursor: pointer;
  border-radius: ${props => props.$border_radius ? props.$border_radius : '1rem'};
  color: white;
  background-color: ${props => props.$bg_color_hex ? props.$bg_color_hex : '#1677FF'};
  border: none;
  transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s;

  &:hover {
    cursor: pointer !important;
    background-color: ${props => props.$bg_color_hex ? props.$bg_color_hex : '#1677FF'}CC;
  }
  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
  &:after {
    content: '';
    display: block;
    position: absolute;
    border-radius: ${props => props.$border_radius ? props.$border_radius : '1rem'};
    inset: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.5s;
    box-shadow: 0 0 5px 10px ${props => props.$bg_color_hex ? props.$bg_color_hex : '#1677FF'};
  }
  &:active {
    top: 1px;
  }
  &:active:after {
    box-shadow: 0 0 0 0 ${props => props.$bg_color_hex ? props.$bg_color_hex : '#1677FF'};
    position: absolute;
    border-radius: ${props => props.$border_radius ? props.$border_radius : '1rem'};
    inset: 0;
    opacity: 1;
    transition: 0s;
  }
  &:disabled:after {
    transition: none;
  }
`

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
  bgColorHEX?: string;
  borderRadius?: string;
  isLoading?: boolean;
}

export default function AdvancedButton({
  bgColorHEX,
  borderRadius,
  isLoading,
  ...props
}: IProps) {
  return (
    <StyledBtn
      $bg_color_hex={bgColorHEX}
      $border_radius={borderRadius}
      disabled={isLoading}
      {...props}
    >{
        isLoading ? <LoadingIcon style={{
          margin: 'auto'
        }} isLoading={isLoading} />
          : props.children
      }</StyledBtn>
  )
}