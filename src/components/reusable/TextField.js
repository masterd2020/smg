import { ErrorMessage, useField } from 'formik';

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="lg:my-4">
      <label htmlFor={field.name} className='lg:font-bold lg:flex lg:mb-2 lg:text-sm'>{label}</label>
      <input
        className={`lg:rounded-md lg:py-2 px-4 lg:bg-blue-50 lg:border-2 border-gray-300 lg:w-full ${meta.touched && meta.error ? 'border-red-500' : 'border-gray-300'}`}
        {...field} {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="lg:text-red-400" />
    </div>
  )
}

export default TextField;