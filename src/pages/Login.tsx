import { FormEvent, useState } from 'react';
import axios from 'axios';
import { Heading } from '../components/Heading';
import { Text } from '../components/Text';
import { TextInput } from '../components/TextInput';
import { Envelope, Lock } from 'phosphor-react';
import { Checkbox } from '../components/Checkbox';
import { Button } from '../components/Button';

export function Login() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  async function handleLogin(event:FormEvent){
    event.preventDefault();

    await axios.post('login', {
      email: 'test@email.com',
      password: 123456
    })

    setIsUserSignedIn(true);
  }

  return (<div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>
  <header className='flex flex-col items-center'>
     <Heading size='lg' className='mt-4'> Login </Heading>
  </header>

  <form onSubmit={handleLogin} className='flex flex-col gap-4 items-stretch w-full max-w-sm mt-10'>
    {isUserSignedIn && <Text>Login realizado!</Text>}
   <label htmlFor='email' className='flex flex-col gap-3'>
     <Text className='font-semibold'>Seu e-mail</Text>
     <TextInput.Root>
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>
      <TextInput.Input id='email' placeholder="Digite seu e-mail" />
    </TextInput.Root>
   </label>

   <label htmlFor='password' className='flex flex-col gap-3'>
     <Text className='font-semibold'>Sua senha</Text>
     <TextInput.Root>
      <TextInput.Icon>
        <Lock />
      </TextInput.Icon>
      <TextInput.Input type="password" id='password' placeholder="***********" />
    </TextInput.Root>
   </label>

   <label htmlFor='remember' className='flex items-center gap-2'>
    <Checkbox id='remember'/>
    <Text size='sm' className='text-gray-200'>Manter-me logado</Text>
   </label>
   
   <Button type="submit" className='mt-4'>Entrar</Button>

   <footer className='flex flex-col items-center gap-4 mt-8'>
    <Text asChild size='sm'>
      <a href='' className='text-gray-400 underline hover:text-gray-200'>Esqueceu sua senha?</a>
    </Text>
    <Text asChild size='sm'>
      <a href='' className='text-gray-400 underline hover:text-gray-200'>Não possui conta? Crie uma agora!</a>
    </Text>
   </footer>
  </form>
 </div>)
}