'use client';
import { Button } from '@/components/ui/button';
import React, { FC, useReducer } from 'react';

// Definišemo tipove za stanje i akcije
type State = {
  count: number;
};

type Action =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' };

// Inicijalno stanje
const initialState: State = { count: 0 };

// Reducer funkcija
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error('Unknown action type');
  }
}

const Counter: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <Button onClick={() => dispatch({ type: 'increment' })}>Increment</Button>
      <Button onClick={() => dispatch({ type: 'decrement' })}>Decrement</Button>
      <Button onClick={() => dispatch({ type: 'reset' })}>Reset</Button>
    </div>
  );
};

export default Counter;
