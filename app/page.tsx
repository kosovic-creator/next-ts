/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import CounterState from './counter_state/page'
import Counter from './counter_reducer/page'
import StateReducer from './state_reducer/page'
import Link from 'next/link'



export default function Home() {
  return (
<>
<div>
  <h5 className='text- font-bold text-left'>
    Counter Example Reducer
  </h5>


<Counter/>
<h5 className='text- font-bold text-left'>
    Counter Example Reducer
  </h5>
</div>
<CounterState/>


<h5 className='text- font-bold text-left'>
    Counter State and Reducer
  </h5>


<StateReducer/>


      <Link href="/slozeni_reducer" className='text-blue-500 hover:underline'>
      slozeni reducer
      </Link>
</>



  )
}

