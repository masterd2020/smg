import {useState} from 'react'
import {useGetUsersQuery} from '../../features/user/userSlice'

import Checkbox from '@mui/material/Checkbox';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import image from '../../image/user.png';
import UserDetailCard from './UserDetailCard'
import Loading from './Loading'

import handleError from '../../lib/handleError'

const RecentUsersTab = () => {
  const [currentUserId, setCurrentUserId] = useState('')
  let {data, isLoading, isError, error} = useGetUsersQuery()

  handleError(isError, error);

  return (
    <div className='lg:flex lg:gap-4 lg:mt-4'>
      {/** Left content */}
      <div className='lg:w-4/6'>
        {/** Header tab */}
        <RecentUserHeader />

        {/** Header tab content */}
        <div className="lg:h-100 lg:overflow-y-scroll">
          {
            isLoading ? <Loading size='2xl'/> : <UserList  data={data} setCurrentUserId={setCurrentUserId}/>
          }
        </div>
      </div>

      {/** Right content */}
      <UserDetailCard currentUserId={currentUserId}/>
      
    </div>
  )
}

const RecentUserHeader = () => {
  return (
    <div className='w-97-p'>
      <div className='lg:w-11/12 lg:flex lg:gap-3 lg:text-sm lg:mb-3'>
        <div className='lg:w-1/3 lg:flex lg:items-center'>
          <Checkbox size='small' />
          <span>ID</span>
          <UnfoldMoreIcon style={{fontSize: '.8rem'}}/>
        </div>
        <div className='lg:w-1/4 lg:flex lg:items-center'>
          <span>TITLE</span>
          <UnfoldMoreIcon style={{fontSize: '.8rem'}}/>
        </div>
        <div className='lg:w-4/5 lg:flex lg:items-center'>
          <span>NAME</span>
          <UnfoldMoreIcon style={{fontSize: '.8rem'}}/>
        </div>
        <div className='lg:w-1/3 lg:flex lg:items-center'>
          <span>ID</span>
          <UnfoldMoreIcon style={{fontSize: '.8rem'}}/>
        </div>
        <div className='lg:w-1/4 lg:flex lg:items-center'>
          <span>PHONE</span>
          <UnfoldMoreIcon style={{fontSize: '.8rem'}}/>
        </div>
      </div>
    </div>
  )
}

const UserList = ({data, setCurrentUserId}) => {
  return (
    <>
      {
        data?.data.map((user) => <SingleUserCard key={user.id} user={user} setCurrentUserId={setCurrentUserId}/>)
      }
    </>
  )
}

const SingleUserCard = ({user, setCurrentUserId}) => {
  const {id, firstName, lastName, picture, title} = user

  return (
    <div className='lg:w-full lg:rounded-md lg:shadow-md lg:bg-white lg:flex lg:items-center lg:py-2 lg:text-xsm lg:mb-4 lg:cursor-pointer' onClick={() => setCurrentUserId(id)}>
      <div className='lg:w-11/12 lg:flex lg:items-center lg:gap-3'>
        <div className='lg:w-1/3 lg:flex lg:items-center'>
          <Checkbox size='small' />
          <p>{id.slice(0, 5)}</p>
        </div>
        <p className='lg:w-1/4'>{title || 'ms'}</p>
        <div className='lg:w-4/5 lg:flex lg:items-center lg:gap-2 lg:text-xs'>
          <div className='lg:w-10 lg:h-10 lg:rounded-full lg:overflow-hidden'>
            <img src={picture || image} alt='user pic' />
          </div>
          <div className=''>
            <p className='lg:text-indigo-300'>{firstName} {lastName}</p>
            <p className=''>{user.email ? user.email : `@${firstName}`}</p>
          </div>
        </div>
        <p className='lg:w-1/3'>{id.slice(0, 5)}...</p>
        <p className='lg:w-1/4'>{user.dateOfBirth ? user.dateOfBirth : '5/20/2022'}</p>
      </div>
      <div className='lg:w-1/12'>
        <MoreVertIcon />
      </div>
    </div>
  )
}

export default RecentUsersTab