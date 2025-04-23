/*
Создайте форму для регистрации пользователя с использованием Formik.
Включите поля для имени, email и пароля.
Используйте Yup для валидации формы, чтобы убедиться,
что все поля заполнены и что email имеет правильный формат.
*/

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { FormContainer } from './index.styles';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Имя должно быть не меньше 3 символов!')
    .max(50, 'Имя слишком длинное!')
    .required('Имя обязательно'),
  email: Yup.string()
    .email('Неверный формат email')
    .required('Email обязателен'),
  password: Yup.string()
    .min(3, 'Пароль слишком короткий!')
    .max(50, 'Пароль слишком длинный!')
    .required('Пароль обязателен')
});

export const RegistrationForm = () => (
  <div>
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => console.log(values)}
    >
      {({ errors, touched }) => (
        <Form>
          <FormContainer>
            <div>
              <h3>Форма регистрации</h3>
            </div>
            <div>
              <label htmlFor="name">Имя</label>
              <Field name="name" type="text" />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
            </div>
            <div>
              <label htmlFor="password">Пароль</label>
              <Field name="password" type="password" />
              {errors.password && touched.password ? <div>{errors.password}</div> : null}
            </div>
            <button type="submit">Зарегистрироваться</button>
          </FormContainer>
        </Form>
      )}
    </Formik>
  </div>
);
