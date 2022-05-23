import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import {useCreateUserMutation} from '../../features/user/userSlice'

import Loading from '../../components/reusable/Loading'
import DashboardLayout from '../../components/layout/index';
import TextField from '../../components/reusable/TextField'
import addUserValidation from '../../validations/addUser'

import handleError from '../../lib/handleError'

const AddUser = () => {
const [createUser, {isLoading}] = useCreateUserMutation()
  const navigate = useNavigate();
  
  return (
    <DashboardLayout header='Add user'>
      <div className='lg:w-3/5 lg:bg-white lg:rounded-lg lg:shadow-md lg:p-6'>
        <p className='lg:text-gray-500 lg:text-lg lg:font-bold lg:mb-10'>Add User</p>
        <Formik
          initialValues={{
            title: '',
            firstName: '',
            lastName: '',
            gender: '',
            email: '',
            phone: '',
            dateOfBirth: '',
          }}
          validationSchema={addUserValidation}
          onSubmit={async values => {
            try {
              const response = await createUser(values)
              if(response.error?.data.error === 'BODY_NOT_VALID') handleError(response.error?.data.error === 'BODY_NOT_VALID', response.error?.data)
              if(response.data) return navigate('/dashboard')
            } catch (err) {
              console.log('hey err', err)
            }
          }}
        >
          {formik => (
            <div>
              <Form>
                <TextField label="Title" name="title" type="text" />
                <TextField label="First Name" name="firstName" type="text" />
                <TextField label="last Name" name="lastName" type="text" />
                <TextField label="Gender" name="gender" type="text" />
                <TextField label="Email Address" name="email" type="email" />
                <TextField label="Phone" name="phone" type="number" />
                <TextField label="Date of Birth" name="dateOfBirdth" type="date" />
                <button className="lg:px-4 lg:py-2 lg:rounded-md lg:shadow-md lg:text-center lg:text-white lg:bg-indigo-600 lg:my-4 lg:hover:bg-indigo-300" type="submit">{isLoading ? <Loading size='xl'/> : 'Add User'}</button>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </DashboardLayout>
  );
}

export default AddUser;