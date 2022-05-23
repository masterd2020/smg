import * as Yup from 'yup';

const validate = Yup.object({
  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('First name is required'),
  lastName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Last name is Required'),
  email: Yup.string()
    .email('Email is invalid')
    .required('Email is required'),
  phone: Yup.number()
})

export default validate;