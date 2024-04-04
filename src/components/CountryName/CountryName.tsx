'use client'

import { fetchUserCountry } from '@/services/apiService';
import React, { FC, useState, useEffect } from 'react';

const CountryName: FC = () => {

    const [userCountry, setUserCountry] = useState<string>('');

    useEffect(() => {
        const getUserCountry = async () => {
            try {
                const country = await fetchUserCountry();
                setUserCountry(country);
            } catch (error) {
                console.log(error)
            }
        };

        getUserCountry();
    }, []);

    return (
        <span>
            {userCountry || 'Loading...'}
        </span>
    );
};

export default CountryName;
