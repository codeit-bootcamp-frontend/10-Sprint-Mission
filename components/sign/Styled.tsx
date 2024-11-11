import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';


export const AuthWrap = styled.div`
  width: 100%;
  max-width: 640px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-top: 60px;
`;


export const HomeButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PandaLogo = styled.img`
  width: 396px;
`;

export const Form = styled.form`
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
`;

export const InputBox = styled.div`
  width: 100%;
  display: flex;
  position:relative;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

export const Label = styled.label`
  color: #1f2937;
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
`;

export const Input = styled.input`
  display: flex;
  width: 100%;
  height: 56px;
  padding: 16px 24px;
  border: none;
  border-radius: 12px;
  background: #f3f4f6;
  font-size: 16px;
  line-height: 24px;
  color: #1f2937;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline-color: #3692ff;
  }
`;

export const VisibilityButton = styled(FontAwesomeIcon)`
  width: 24px;
  height: 24px;
  color: #4B5563;
  position: absolute;
  right: 24px;
  top: 58px;
  cursor: pointer;
`;

export const SignupButton = styled.button`
  width: 100%;
  height: 56px;
  padding: 16px 124px;
  border: none;
  border-radius: 40px;
  background: #9ca3af;
  color: #f3f4f6;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #1967d6;
  }

  &:focus {
    background-color: #1251aa;
  }

  &:disabled {
    background-color: #9ca3af;
    cursor: default;
    pointer-events: none;
  }
`;

export const SimpleLoginBox = styled.div`
  display: flex;
  width: 100%;
  height: 74px;
  padding: 16px 23px;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: #e6f2ff;
`;

export const SimpleLoginText = styled.p`
  color: #1f2937;
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
`;

export const SimpleLoginSnsBox = styled.div`
  display: flex;
  gap: 16px;
`;

export const SimpleLoginSnsLogo = styled.img`
  width: 42px;
  cursor: pointer;
`;

export const AuthSwitchBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const AuthSwitchText = styled.p`
  color: #1f2937;
  font-size: 14px;
  font-weight: 500;
`;

export const SwitchToLogin = styled.a`
  color: #3692ff;
  font-size: 14px;
  font-weight: 500;
  text-decoration: underline;
  cursor: pointer;
`;

export const ErrorMessage = styled.span`
  color: #f74747;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  margin-top: 8px;
  padding-left: 16px;
`;
