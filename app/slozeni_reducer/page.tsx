/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { Button } from '@/components/ui/button';
import React, { useReducer } from 'react';

export default function AppReducerSlozeni() {
  interface State {
    agent: string;
    turtleneckType: string;
    turtleneckBlackness: number;
  }

  interface Action {
    type: 'DARKEN' | 'LIGHTEN';
  }

  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case 'DARKEN':
        if (state.agent === 'Archer' && state.turtleneckType === 'tactical') {
          return {
            ...state,
            turtleneckBlackness: state.turtleneckBlackness + 10,
          };
        }
        if (state.agent !== 'Archer') {
          return state;
        }
        return state;
      case 'LIGHTEN':
        return {
            ...state,
            turtleneckBlackness: state.turtleneckBlackness -10
          };
      default:
        return state;
    }
  };

  const initialState = {
    agent: 'Archer',
    turtleneckType: 'tactical',
    turtleneckBlackness: 100,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Agent: {state.agent}</h1>
      <p>Turtleneck Type: {state.turtleneckType}</p>
      <p>Turtleneck Blackness: {state.turtleneckBlackness}</p>
      <Button onClick={() => dispatch({ type: 'DARKEN' })}>Darken</Button>
      <Button onClick={() => dispatch({ type: 'LIGHTEN' })}>Lighten</Button>
    </div>
  );
}
