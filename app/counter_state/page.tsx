/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

export default function CounterState() {
    const[count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
  return (
    <div>
      <h1>Counter</h1>
      <Button onClick={()=>increment()}>+</Button>
      <p>Count: {count}</p>
      <Button onClick={()=>decrement()}>-</Button>

    </div>
  )
}
