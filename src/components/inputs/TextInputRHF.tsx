import { FieldErrors, UseFormRegister } from "react-hook-form";
import styled from "styled-components";

const StyledInput = styled.input`
    padding-left: 1.6rem;
`;

const StyledError = styled.p`
    margin-top: 0.4rem;
`;

export default function TextInputRHF({
    register,
    name,
    placeholder,
    errors,
    errMess_required,
    extraValidate,
    errMess_extra,
    ...otherProps
}: {
    register: UseFormRegister<any>;
    name: string;
    placeholder?: string;
    errors?: FieldErrors<any>;
    errMess_required?: string;
    extraValidate?: (value: string) => boolean;
    errMess_extra?: string;
    [propName: string]: unknown;
}) {
    return (
        <>
            <StyledInput
                type="text"
                placeholder={placeholder ? placeholder : ""}
                {...register(name, {
                    required: errMess_required,
                    validate: {
                        extra_validate: (value) =>
                            extraValidate ? extraValidate(value) : true,
                    },
                })}
                {...otherProps}
            />
            {errors?.[name] && (
                <StyledError
                    className="error"
                    style={{ color: "red", fontSize: "1.2rem" }}
                >
                    {errors?.[name]?.message && errMess_required}
                    {errors?.[name]?.type === "extra_validate" && errMess_extra}
                </StyledError>
            )}
        </>
    );
}
