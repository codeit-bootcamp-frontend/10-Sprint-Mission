import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import * as SS from '@/components/_styled/signStyled';
import SignInForm from '@/components/sign/SignInForm';

export default function SignIn() {
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true); 
    }, []);

    useEffect(() => {
        if (isMounted) {
            const accessToken = localStorage.getItem('accessToken');
            if (accessToken) {
                router.push('/');
            }
        }
    }, [isMounted]);

    if (!isMounted) return null;

    return (
        <SS.AuthContainer>
            <SignInForm />
        </SS.AuthContainer>
    );
}