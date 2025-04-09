/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import CounterState from './counter_state/page'
import Counter from './counter_reducer/page'



export default function Home() {
  return (
<>
<div>
  <h5 className='text- font-bold text-center'>
    Counter Example Reducer
  </h5>


<Counter/>
<h5 className='text- font-bold text-center'>
    Counter Example Reducer
  </h5>
</div>
<CounterState/>
</>


  )
}

