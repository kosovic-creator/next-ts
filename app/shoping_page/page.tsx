'use client'
import { Button } from '@/components/ui/button';
import React from 'react'

interface ShopingProps {
    kupon: number;
    ubaciKupon: React.Dispatch<React.SetStateAction<number>>;
  }

  const Shoping: React.FC<ShopingProps> = ({ kupon, ubaciKupon }) => {
    return (
      <div>
        <p>Coupons: {kupon}</p>
        <Button onClick={() => ubaciKupon(kupon + 1)}>Add Coupon</Button>
      </div>
    );
  };

  export default Shoping;