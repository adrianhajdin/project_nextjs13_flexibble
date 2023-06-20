"use client"

import { getProviders, signIn } from 'next-auth/react';
import React, { useEffect, useState } from 'react'

import CustomButton from './Button';

const AuthProviders = () => {
    const [providers, setProviders] = useState<any>(null);

    useEffect(() => {
        const fetchProviders = async () => {
            const res = await getProviders();
    
            setProviders(res);
        }

        fetchProviders();
    }, []);

    if (providers) {
        return (
            <div>
                {Object.values(providers).map((provider: any, index) => (
                    <CustomButton 
                        key={index} 
                        title='Sign In' 
                        handleClick={() => signIn(provider?.id)}
                    />
                ))}
            </div>
        )
    }
}

export default AuthProviders