import { useFormik } from 'formik';
import * as Yup from 'yup';
import { LogInContainer } from './LogInModal.styled';

export const LogInModal = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        // .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Example: test@gmail.com')
        .email('Invalid email')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'at least 6 characters')
        .required('Password is required'),
    }),
    onSubmit: (values) => {
      console.log(values);
      // dispatch(
      //   logIn({
      //     email: values.email,
      //     password: values.password,
      //   })
      // );
      formik.resetForm();
    },
  });

  return (
    <LogInContainer>
      <h2>Log In</h2>
      <p>
        Welcome back! Please enter your credentials to access your account and
        continue your search for a psychologist.
      </p>
      <form
        // autoComplete="off"
        onSubmit={formik.handleSubmit}
      >
        <label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </label>
        <label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </label>
        <button type="submit">Log In</button>
      </form>
    </LogInContainer>
  );
};
