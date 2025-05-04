/*
Создайте форму для регистрации пользователя с использованием React Hook Form.
Включите поля для имени, email и пароля.
Используйте Zod для валидации формы, чтобы убедиться,
что все поля заполнены и что email имеет правильный формат.
*/

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormContainer, TextError } from './index.styles';

interface IFormData {
  name: string;
  email: string;
  password: string;
}

const validationSchema = z.object({
  name: z.string()
    .min(3, 'Обязательное поле'),
  email: z.string()
    .email('Неверный формат Email')
    .min(1, 'Обязательное поле'),
  password: z.string()
    .min(6, 'Обязательное поле'),
});

export function UserRegistrationForm () {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(validationSchema),
    mode: 'onBlur',
  });

  return (
    <div>
      <FormContainer>
        <div>
          <h3>User Registration Form</h3>
        </div>
        <form onSubmit={handleSubmit((data: IFormData) => console.log('Submitted values:', data))}>
          <div>
            <label htmlFor='name'>Имя: </label>
            <input
              {...register('name')}
              placeholder='Введите имя'
            />
            <TextError>
              {errors.name && <div>{errors.name.message}</div>}
            </TextError>
          </div>

          <div>
            <label htmlFor='email'>Email: </label>
            <input
              type='email'
              {...register('email')}
              placeholder='Введите Email'
            />
            <TextError>
              {errors.email && <div>{errors.email.message}</div>}
            </TextError>
          </div>

          <div>
            <label htmlFor="password">Пароль: </label>
            <input
              type="password"
              {...register('password')}
              placeholder='Введите пароль'
            />
            <TextError>
              {errors.password && <div>{errors.password.message}</div>}
            </TextError>
          </div>

          <button
            type='submit'
            disabled={!isValid}
          >Зарегистрироваться</button>
        </form>
      </FormContainer>
    </div>
  );
};
