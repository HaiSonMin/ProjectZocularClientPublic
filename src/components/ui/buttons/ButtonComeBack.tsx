"use client";
import { FaArrowLeft } from "react-icons/fa";
import styled from "styled-components";

const Button = styled.button`
    display: flex;
    gap: 1.5rem;
    padding: 15px 20px;
    border: none;
    background-color: var(--color-primary);
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
    cursor: pointer;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.2);
        transform: skewX(-30deg);
        transition: left 0.3s ease-in-out;
    }

    &:hover {
        transform: scale(1.1);

        &:before {
            left: 100%;
        }
    }
`;

interface IProps {
    onClick?: () => void;
}

export default function ButtonComeBack({ onClick }: IProps) {
    return (
        <Button onClick={onClick}>
            <FaArrowLeft /> Come back{" "}
        </Button>
    );
}
