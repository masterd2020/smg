import {useState} from 'react'

import ArticleIcon from '@mui/icons-material/Article';
import FavoriteIcon from '@mui/icons-material/Favorite';
import image from '../../image/user.png';


const UserDetailCard = () => {
  const [userId, setUserId] = useState('h')

  return (
    <div className='lg:bg-white lg:rounded-md lg:shadow-md lg:p-6 lg:w-2/6 lg:flex lg:flex-col'>
      {
        userId !== null ? <UserDetail /> : <div className='lg:w-full lg:h-full lg:flex lg:flex-col lg:items-center lg:justify-center'><ArticleIcon style={{fontSize: '12rem'}}/><p>View a selected user's detail here</p></div>
      }
    </div>
  )
}

const UserDetail = () => {
  return (
    <>
      <div className='lg:h-32 lg:object-fill lg:w-full lg:overflow-hidden lg:rounded-md lg:mb-3'>
        <img src={image} alt='user pic' />
      </div>  
      <div>
        <p>master wey</p>
        <div className='lg:flex lg:gap-2 lg:text-red-500 lg:m-2'>
          <FavoriteIcon />
          <p>89 likes</p>
        </div>
        <div className='lg:text-xs lg:mt-4'>
          <p className='lg:font-bold lg:text-indigo-200'>TAGS</p>
          <div className="lg:flex lg:gap-2 lg:align-center lg:mt-3">
            <p className="lg:rounded-full lg:py-1 lg:px-4 lg:border lg:border-indigo-300">ANIMAL</p>
            <p className="lg:rounded-full lg:py-1 lg:px-4 lg:border lg:border-indigo-300">DOG</p>
            <p className="lg:rounded-full lg:py-1 lg:px-4 lg:border lg:border-indigo-300">ANT</p>
          </div>
        </div>
      </div>
      <div className=' lg:mt-5 lg:mb-4 lg:p-1 border-b-2 border-t-2'>
        OWNER
      </div>
      <div className='lg:flex lg:gap-1 lg:mb-4 lg:text-xsm'>
        <div className='lg:w-6 lg:h-6 lg:rounded-full lg:overflow-hidden lg:object-cover border'>
          <img src={image} alt='user pic' />
        </div>
        <p>master D</p>
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
    </>
  )
}

export default UserDetailCard