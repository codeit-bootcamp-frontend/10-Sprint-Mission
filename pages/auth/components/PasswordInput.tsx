import { useState } from "react";
import styled from "styled-components";
import EyeInvisibleIcon from "@/public/images/icons/eye-invisible.svg";
import EyeVisibleIcon from "@/public/images/icons/eye-visible.svg";
import {
  ErrorMessage,
  InputField,
  Label,
} from "@/components/ui/InputItem";
import { UseFormRegisterReturn } from "react-hook-form";
import Image from "next/image";

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const PasswordToggleButton = styled.button`
  position: absolute;
  right: 24px;
`;

interface PasswordInputProps {
  id: string;
  label: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  errorMessage?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  id,
  label,
  placeholder,
  register,
  errorMessage,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Label htmlFor={id}>{label}</Label>

      <InputWrapper>
        <InputField
          id={id}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          {...register}
        />

        <PasswordToggleButton
          type="button"
          onClick={togglePasswordVisibility}
          aria-label="비밀번호 보기"
        >
          {/* TODO: SVG 표시가 안됨 */}
          {/* <Image
            className="password-toggle-icon"
            src={showPassword ? EyeVisibleIcon.src : EyeInvisibleIcon.src }
            alt={showPassword ? "비밀번호 표시 상태 아이콘" : "비밀번호 숨김 상태 아이콘"}
          /> */}
          { showPassword ? <EyeVisibleIcon alt = "비밀번호 표시 상태 아이콘"/> : <EyeInvisibleIcon alt = "비밀번호 숨김 상태 아이콘"/>  }
          
        </PasswordToggleButton>
      </InputWrapper>

      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};

export default PasswordInput;
