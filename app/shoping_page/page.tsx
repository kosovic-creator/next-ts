'use client'
import React from 'react'

interface ShopingProps {
    kupon: number;
    ubaciKupon: React.Dispatch<React.SetStateAction<number>>;
  }

  const Shoping: React.FC<ShopingProps> = ({ kupon, ubaciKupon }) => {
    return (
      <div>
        <p>Coupons: {kupon}</p>
        <button onClick={() => ubaciKupon(kupon + 1)}>Add Coupon</button>
      </div>
    );
  };

  export default Shoping;