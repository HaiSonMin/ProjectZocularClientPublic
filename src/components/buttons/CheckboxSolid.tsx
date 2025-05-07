import styled from "styled-components";

const StyledLabel = styled.label<{
    $highlight_color?: string;
    $disabled_color?: string;
    $text_color_default?: string;
    $text_color_checked?: string;
    $text_color_disabled?: string;
    $border_color?: string;
    $border_radius?: string;
    $border_thickness?: string;
}>`
    display: inline-block;
    color: ${(props) =>
        props.$text_color_default ? props.$text_color_default : "inherit"};
    border: solid
        ${(props) =>
            props.$border_thickness ? props.$border_thickness : "1px"}
        ${(props) => (props.$border_color ? props.$border_color : "#C6C6C6")};
    border-right-color: #c6c6c6;
    padding: 0.5rem 1rem;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    input {
        opacity: 0;
        width: 0;
        height: 0;
    }
    &:has(input:checked) {
        background-color: ${(props) =>
            props.$highlight_color ? props.$highlight_color : "#1677FF"};
        color: ${(props) =>
            props.$text_color_checked ? props.$text_color_checked : "white"};
    }
    &:has(input:disabled) {
        background-color: ${(props) =>
            props.$disabled_color ? props.$disabled_color : "lightgrey"};
        color: ${(props) =>
            props.$text_color_disabled
                ? props.$text_color_disabled
                : "#696969"};
    }

    &:first-child {
        border-top-left-radius: ${(props) =>
            props.$border_radius ? props.$border_radius : "1rem"};
        border-bottom-left-radius: ${(props) =>
            props.$border_radius ? props.$border_radius : "1rem"};
    }

    &:last-child {
        border-top-right-radius: ${(props) =>
            props.$border_radius ? props.$border_radius : "1rem"};
        border-bottom-right-radius: ${(props) =>
            props.$border_radius ? props.$border_radius : "1rem"};
        border-right-color: #c6c6c6;
    }

    &:hover {
        color: ${(props) =>
            props.$highlight_color ? props.$highlight_color : "#1677FF"};
    }
`;

interface IProps {
    children: any;
    highlightColor?: string;
    disabledColor?: string;
    defaultTextColor?: string;
    checkedTextColor?: string;
    disabledTextColor?: string;
    borderColor?: string;
    borderRadius?: string;
    border_thickness?: string;
    [propName: string]: unknown;
}

export default function CheckboxSolid({
    children,
    highlightColor,
    disabledColor,
    defaultTextColor,
    checkedTextColor,
    disabledTextColor,
    borderColor,
    borderRadius,
    border_thickness,
    ...otherProps
}: IProps) {
    return (
        <StyledLabel
            $highlight_color={highlightColor}
            $disabled_color={disabledColor}
            $text_color_default={defaultTextColor}
            $text_color_checked={checkedTextColor}
            $text_color_disabled={disabledTextColor}
            $border_color={borderColor}
            $border_radius={borderRadius}
            $border_thickness={border_thickness}
        >
            <input type="checkbox" {...otherProps} />
            {children}
        </StyledLabel>
    );
}
