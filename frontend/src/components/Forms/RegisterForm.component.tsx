import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { useUser } from '../../hooks/useUser';
import { TUserData, userSchema } from '../../schemas';
import { Button } from '../Button';
import { Input } from './Input.component';

export const RegisterForm = () => {
  const { registerUser } = useUser();

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<TUserData>({ resolver: zodResolver(userSchema) });

  return (
    <form
      onSubmit={handleSubmit(registerUser)}
      className="flex flex-col items-center justify-center shadow-md bg-gray-900 rounded-lg px-[22px] py-[42px] gap-[24px]"
    >
      <h2 className="text-2xl font-bold mb-4">Cadastro</h2>

      <div className="grid gap-[22px]">
        <Input error={errors.name} id="name" placeholder="name" register={register('name')} type="text" />
        <Input error={errors.email} id="email" placeholder="Email" register={register('email')} type="email" />
        <Input error={errors.password} id="password" placeholder="Password" register={register('password')} type="password" />
        <Input error={errors.confirm} id="confirm" placeholder="Confirme a senha" register={register('confirm')} type="password" />
      </div>

      <Button text="Cadastrar" type="submit" addClass="w-full" />
    </form>
  );
};
