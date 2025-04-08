'use client'
import React, { useState } from 'react'
import Shoping from './shoping_page/page'
import ShopingCard from './shoping_card/page'

export default function Home() {
  const[coupons, setCoupons] = useState(0);
  return (

    <>
      <div>Home</div>

      <Shoping kupon={coupons} ubaciKupon={setCoupons} />
      <ShopingCard kupon_card={coupons} />

    </>

  )
}

