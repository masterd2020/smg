import {useState} from 'react'

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import image from '../../image/user.png';


const UserDetailCard = () => {
  const [userId] = useState('kkk')

  return (
    <div className='lg:bg-white lg:rounded-md lg:shadow-md lg:p-6 lg:w-2/6 lg:flex lg:flex-col'>
      {
        userId !== null ? <UserDetail /> : <div className='lg:w-full lg:h-full lg:flex lg:flex-col lg:items-center lg:justify-center'><PersonOutlineIcon style={{fontSize: '12rem'}}/><p>View a selected user's detail here</p></div>
      }
    </div>
  )
}

const UserDetail = () => {
  return (
    <>
      <div className='lg:grid lg:grid-cols-2 lg:gap-4 lg:h-44 border-b-2'>
        <div className='lg:h-40 lg:object-fill lg:w-full lg:overflow-hidden lg:rounded-md'>
          <img src={image} alt='user pic' />
        </div>
        <div>
          <div className='lg:mb-4'>
            <p className='lg:font-bold lg:text-indigo-200 lg:text-xsm'>FULL NAME</p>
            <p>Fasasi toheeb</p>
          </div>
          <div className='lg:mb-4'>
            <p className='lg:font-bold lg:text-indigo-200 lg:text-xsm'>EMAIL ADDRESS</p>
            <p>Fasasi@toheeb.io</p>
          </div>
          <div className='lg:mb-4'>
            <p className='lg:font-bold lg:text-indigo-200 lg:text-xsm'>PHONE NUMBER</p>
            <p>5235265625</p>
          </div>
        </div>
      </div>
      <div className='lg:grid lg:grid-cols-2 lg:gap-4 lg:mt-3 border-b-2'>
        <div className='lg:mb-4'>
          <p className='lg:font-bold lg:text-indigo-200 lg:text-xsm'>FULL NAME</p>
          <p>Fasasi toheeb</p>
        </div>
        <div className='lg:mb-4'>
          <p className='lg:font-bold lg:text-indigo-200 lg:text-xsm'>FULL NAME</p>
          <p>Fasasi toheeb</p>
        </div>
      </div>
      <div className='lg:grid lg:grid-cols-2 lg:gap-col-4 lg:mt-3 border-b-2'>
        <div className='lg:mb-4'>
          <p className='lg:font-bold lg:text-indigo-200 lg:text-xsm'>STREET</p>
          <p>Gangan/Ilupeju</p>
        </div>
        <div className='lg:mb-4'>
          <p className='lg:font-bold lg:text-indigo-200 lg:text-xsm'>CITY</p>
          <p>Owode Ede</p>
        </div>
        <div className='lg:mb-4'>
          <p className='lg:font-bold lg:text-indigo-200 lg:text-xsm'>STATE</p>
          <p>Osun</p>
        </div>
        <div className='lg:mb-4'>
          <p className='lg:font-bold lg:text-indigo-200 lg:text-xsm'>COUNTRY</p>
          <p>Nigeria</p>
        </div>
        <div className='lg:mb-4'>
          <p className='lg:font-bold lg:text-indigo-200 lg:text-xsm'>YEAR ENDED</p>
          <p>1999</p>
        </div>
      </div>
      <div className='lg:grid lg:grid-cols-2 lg:gap-col-4 lg:mt-3'>
        <div className='lg:mb-4'>
          <p className='lg:font-bold lg:text-indigo-200 lg:text-xsm'>REGISTERED</p>
          <p>21-jun-2021</p>
        </div>
        <div className='lg:mb-4'>
          <p className='lg:font-bold lg:text-indigo-200 lg:text-xsm'>LAST UPDATED</p>
          <p>21-jun-2021</p>
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
      <div className='lg:rounded-md lg:bg-red-500 lg:text-white lg:flex lg:align-center lg:justify-center lg:p-2'>Delete</div>
    </>
  )
}

export default UserDetailCard