import {useGetUserByIdQuery} from '../../features/user/userSlice'

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import Loading from './Loading'
import image from '../../image/user.png';


const UserDetailCard = ({currentUserId}) => {
  let {data, isFetching} = useGetUserByIdQuery(currentUserId)

  if(!currentUserId.length > 0) {
    return (
      <div className='lg:bg-white lg:rounded-md lg:shadow-md lg:p-6 lg:w-2/6 lg:flex lg:flex-col'>
        <div className='lg:w-full lg:h-full lg:flex lg:flex-col lg:items-center lg:justify-center'>
          <PersonOutlineIcon style={{fontSize: '12rem'}}/>
          <p>View a selected user's detail here</p>
        </div>
    </div>
    )
  }

  return (
    <div className='lg:bg-white lg:rounded-md lg:shadow-md lg:p-6 lg:w-2/6 lg:flex lg:flex-col'>      
      {
        isFetching ? (<Loading size='xl'/>
        ) : (
          <UserDetail data={data || {}} />
        )
      }
    </div>
  )
}

const UserDetail = ({data}) => {
  const {firstName, lastName, email, phone, picture, gender, dateOfBirth, registerDate, updatedDate, location} = data

  return (
    <>
      <div className='lg:grid lg:grid-cols-2 lg:gap-4 lg:h-44 border-b-2'>
        <div className='lg:h-40 lg:object-fill lg:w-full lg:overflow-hidden lg:rounded-md'>
          <img src={picture || image} alt='user pic' />
        </div>
        <div>
          <div className='lg:mb-4'>
            <p className='lg:font-bold lg:text-indigo-200 lg:text-xsm'>FULL NAME</p>
            <p>{firstName} {lastName}</p>
          </div>
          <div className='lg:mb-4'>
            <p className='lg:font-bold lg:text-indigo-200 lg:text-xsm'>EMAIL ADDRESS</p>
            <p>{email}</p>
          </div>
          <div className='lg:mb-4'>
            <p className='lg:font-bold lg:text-indigo-200 lg:text-xsm'>PHONE NUMBER</p>
            <p>{phone}</p>
          </div>
        </div>
      </div>
      <div className='lg:grid lg:grid-cols-2 lg:gap-4 lg:mt-3 border-b-2'>
        <div className='lg:mb-4'>
          <p className='lg:font-bold lg:text-indigo-200 lg:text-xsm'>GENDER</p>
          <p>{gender}</p>
        </div>
        <div className='lg:mb-4'>
          <p className='lg:font-bold lg:text-indigo-200 lg:text-xsm'>DATE OF BIRTH</p>
          <p>{new Date(dateOfBirth).toDateString()}</p>
        </div>
      </div>
      <div className='lg:grid lg:grid-cols-2 lg:gap-col-4 lg:mt-3 border-b-2'>
        <div className='lg:mb-4'>
          <p className='lg:font-bold lg:text-indigo-200 lg:text-xsm'>STREET</p>
          <p>{location ? location.street : 'Ilupeju'}</p>
        </div>
        <div className='lg:mb-4'>
          <p className='lg:font-bold lg:text-indigo-200 lg:text-xsm'>CITY</p>
          <p>{location ? location.city : 'Owode ede'}</p>
        </div>
        <div className='lg:mb-4'>
          <p className='lg:font-bold lg:text-indigo-200 lg:text-xsm'>STATE</p>
          <p>{location ? location.state : 'Osun'}</p>
        </div>
        <div className='lg:mb-4'>
          <p className='lg:font-bold lg:text-indigo-200 lg:text-xsm'>COUNTRY</p>
          <p>{location ? location.country : 'Nigeria'}</p>
        </div>
        <div className='lg:mb-4'>
          <p className='lg:font-bold lg:text-indigo-200 lg:text-xsm'>YEAR ENDED</p>
          <p>{data.yearEnded ? data.yearEnded : `1999`}</p>
        </div>
      </div>
      <div className='lg:grid lg:grid-cols-2 lg:gap-col-4 lg:mt-3'>
        <div className='lg:mb-4'>
          <p className='lg:font-bold lg:text-indigo-200 lg:text-xsm'>REGISTERED</p>
          <p>{new Date(registerDate).toDateString()}</p>
        </div>
        <div className='lg:mb-4'>
          <p className='lg:font-bold lg:text-indigo-200 lg:text-xsm'>LAST UPDATED</p>
          <p>{new Date(updatedDate).toDateString()}</p>
        </div>
        <div className='lg:mb-4'>
          <p className='lg:font-bold lg:text-indigo-200 lg:text-xsm'>POSTS</p>
          <p>21</p>
        </div>
        <div className='lg:mb-4'>
          <p className='lg:font-bold lg:text-indigo-200 lg:text-xsm'>COMMENTS</p>
          <p>20</p>
        </div>
      </div>
      <div className='lg:rounded-md lg:bg-red-500 lg:text-white lg:flex lg:align-center lg:justify-center lg:p-2 lg:cursor-pointer'>Delete</div>
    </>
  )
}

export default UserDetailCard