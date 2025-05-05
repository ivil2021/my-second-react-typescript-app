import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const validationSchema = z.object({
  name: z.string()
    .min(3, 'Обязательное поле'),
  email: z.string()
    .email('Неверный формат Email')
    .min(1, 'Обязательное поле'),
  password: z.string()
    .min(6, 'Обязательное поле'),
});

export function useUserRegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(validationSchema),
    mode: 'onBlur',
  });

  return {
    register,
    handleSubmit: handleSubmit(data => console.log('Submitted values:', data)),
    errors,
    isValid,
  };
}
