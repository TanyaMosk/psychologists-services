import { useFormik } from 'formik';
import * as Yup from 'yup';
import { RegistrationContainer } from './RegistrationModal.styled';

export const RegistrationModal = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required('Name is required'),
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
      formik.resetForm();
    },
  });

  return (
    <RegistrationContainer>
      <h2>Registration</h2>
      <p>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </p>
      <form
        // autoComplete="off"
        onSubmit={formik.handleSubmit}
      >
        <label>
          <input
            name="name"
            type="text"
            placeholder="Name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </label>
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
        <button type="submit">Sign Up</button>
      </form>
    </RegistrationContainer>
  );
};
