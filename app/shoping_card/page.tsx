'use client'
import React from 'react'

interface ShopingCardProps {
    kupon_card: number;
}

const ShopingCard: React.FC<ShopingCardProps> = ({ kupon_card }) => {
    return (
        <>
            <header className='bg-blue-950 text-white p-4 '>
                <h1 className='text-2xl font-bold ml-1.5 left-0'>Shopping Cart</h1>
                <p>Coupons in Card: {kupon_card}</p>
            </header>

        </>

    );
};

export default ShopingCard;