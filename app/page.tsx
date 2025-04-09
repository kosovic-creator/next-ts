'use client'
import React, { useEffect } from 'react'
import { data } from './data';
import { Button } from '@/components/ui/button';
import Buttons from './button';

export default function Home() {

  const podaciNiz=data;
  const [dozvola, setDozvola] = React.useState(false);
  const [profil, setProfil] = React.useState(
    [{ ime: 'marko', godine: 30 }, { ime: 'kosta', godine: 50 }]);
    useEffect(() => {
      console.log('Promjena imena');
      localStorage.setItem('profil', JSON.stringify(profil));
    }, [profil]);
    useEffect(() => {
      localStorage.setItem('profil', JSON.stringify(profil));
      const storage = localStorage.getItem('profil');
      alert(storage)
      setDozvola(true);
    }, []);
  return (
    <div className='flex flex-col justify-center items-left space-y-3'>
      <h1 className='text-black-200 text-2xl'>Person</h1>
      {podaciNiz.map((person) => (
        <div key={person.id}>
          <div className='flex justify-left items-center space-x-3'>
            <h4 className='text-red-950 font-light text-2xl '>{person.name}</h4>
            <p>{person.age}</p>
          </div>
        </div>
      ))}
      <Buttons text='Moje dugme' bgColor='blue' color='white' />
      <Button className='bg-slate-400' onClick={() => setProfil(profil => [...profil, { ime: 'sofija', godine: 88 }])}>SetProfilNovi</Button>
      {profil.map((item, index) => (
        <p key={index}>{item.ime} - {item.godine}</p>
      ))}
      <p className='text-black'>Ukupno godina: {profil.reduce((acc, cur) => acc + cur.godine, 0)}</p>
    </div>
  );
}

