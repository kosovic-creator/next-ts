/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { Button } from '@/components/ui/button';
import React, { useReducer } from 'react';

export default function AppReducerSlozeni() {
  interface State {
    banka: string;
    iznos: number;

  }

  interface Action {
    type: 'UPLATA' | 'ISPLATA';
  }
// const trenutni_iznos = ;
  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case 'UPLATA':
        if (state.banka === 'NLB' && state.iznos <150) {
          return {
            ...state,
            iznos: state.iznos + 10,
          };
        }
        case 'ISPLATA':
          if (state.banka === 'NLB' && state.iznos <150) {
            return {
              ...state,
              iznos: state.iznos - 10,
            };
          }
      default:
        return state;
    }
  };

  const initialState = {
    banka: 'NLB',
    iznos: 100,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Banka: {state.banka}</h1>
      <p>Sada je iznos: {state.iznos}</p>
      <Button className='bg-amber-950 size-fit' onClick={() => dispatch({ type: 'UPLATA' })}>Uplata</Button>
      <Button onClick={() => dispatch({ type: 'ISPLATA' })}>Ispalta</Button>
    </div>
  );
}
