import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as SS from '@/components/_styled/signStyled';
import SignInForm from '@/components/sign/SignInForm';

export default function SignUp() {
    const router = useRouter();
    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
          router.push('/');
        }
      }, [router]); 
    
    return (
        <SS.AuthContainer>
            <SignInForm />
        </SS.AuthContainer>
    );
}
