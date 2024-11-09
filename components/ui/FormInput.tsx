import { ReactNode } from "react";
import styles from "./Input.module.css";
import Label from "./Label";
import Container from "../layout/Container";
import {
  FieldValues,
  UseFormRegister,
  FieldError,
  Path,
} from "react-hook-form";

type ValidatePropertyType = (
  value: string
) => boolean | string | Promise<boolean | string> | undefined;

interface FormInputProps<T extends FieldValues> {
  type: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  className?: string;
  label?: string;
  placeholder?: string;
  children?: ReactNode;
  required?: string;
  pattern?: { value: RegExp; message: string };
  minLength?: { value: number; message: string };
  validate?: {
    matchesPassword: ValidatePropertyType;
    required: ValidatePropertyType;
  };
  error?: FieldError;
}

const FormInput = <T extends FieldValues>({
  type = "text",
  name,
  register,
  className = "",
  label = "",
  placeholder = "",
  children,
  required,
  pattern,
  minLength,
  validate,
  error,
}: FormInputProps<T>) => {
  return (
    <Container className={`${styles.container} ${className}`}>
      <Label className={styles.label} htmlFor={name}>
        {label}
      </Label>
      <div className={styles.inputContainer}>
        <input
          className={`${styles.input} ${error ? styles.validationFocus : ""}`}
          type={type}
          placeholder={placeholder}
          {...register(name, {
            required,
            pattern,
            minLength,
            validate,
          })}
        />
        {children}
        {error && (
          <span className={styles.validationMessage}>{error.message}</span>
        )}
      </div>
    </Container>
  );
};

export default FormInput;
