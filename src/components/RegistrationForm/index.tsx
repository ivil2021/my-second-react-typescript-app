/*
Создайте форму для регистрации пользователя с использованием Formik.
Включите поля для имени, email и пароля.
Используйте Yup для валидации формы, чтобы убедиться,
что все поля заполнены и что email имеет правильный формат.
*/

import { FormContainer, TextError } from './index.styles';
import { useRegistrationForm } from "./useRegistrationForm";

export function RegistrationForm() {
  const { form } = useRegistrationForm({});

  return (
    <div>
      <FormContainer>
        <div>
          <h3>Форма регистрации</h3>
        </div>

        <div>
          <label htmlFor="name">Имя: </label>
          <input
            name="name"
            value={form.values.name}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          {form.errors.name && form.touched.name && (
            <TextError>
              <div>{form.errors.name}</div>
            </TextError>
          )}
        </div>

        <div>
          <label htmlFor="email">Email: </label>
          <input
            name="email"
            value={form.values.email}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            disabled={!form.values.name || Boolean(form.errors.name)}
          />
          {form.errors.email && form.touched.email && (
            <TextError>
              <div>{form.errors.email}</div>
            </TextError>
          )}
        </div>

        <div>
          <label htmlFor="password">Пароль: </label>
          <input
            name="password"
            value={form.values.password}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            type="password"
            disabled={!form.values.email || Boolean(form.errors.email)}
          />
          {form.errors.password && form.touched.password && (
            <TextError>
              <div>{form.errors.password}</div>
            </TextError>
          )}
        </div>

        <button type="submit" disabled={form.isValid}>Зарегистрироваться</button>
      </FormContainer>
    </div>
  );
}
