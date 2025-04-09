/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from '@/components/ui/button'
import React, { useState,useReducer } from 'react'

export default function StateReducer() {
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

