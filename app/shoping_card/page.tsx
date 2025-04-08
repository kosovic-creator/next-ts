'use client'
import React from 'react'

interface ShopingCardProps {
    kupon_card: number;
  }

  const ShopingCard: React.FC<ShopingCardProps> = ({ kupon_card }) => {
    return (
      <div>
        <p>Coupons in Card: {kupon_card}</p>
      </div>
    );
  };

  export default ShopingCard;