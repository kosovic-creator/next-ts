'use client'
import { Button } from '@/components/ui/button'
import { useReducer, useState} from 'react'

interface State {
  count:number
}

interface Action {
  type: string;
  payload?: number;
}

function reducer(state: State, action: any): State {
  console.log('to je :',state, action);
  return {count: state.count - (action.payload ||1)} // Placeholder return to avoid errors
}


export default function StateReducer() {
    // const[count, setCount] = useState(0)
    const[count,dispatch] = useReducer(reducer, { count: 0 })
    const increment = () => {
        // setCount(count + 1)
        dispatch( 1)
        // setCount(count + 1)
        console.log('increment', count);
    }
    const decrement = () => {
        // setCount(count - 1)
        dispatch(-1)
        console.log('increment', count);
    }
  return (
    <div>
      <h1>Counter</h1>
      <Button onClick={()=>increment()}>+</Button>
      <p>Count: {count.count}</p>
      <Button onClick={()=>decrement()}>-</Button>

    </div>
  )
}


