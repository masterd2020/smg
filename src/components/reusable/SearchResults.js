import Checkbox from '@mui/material/Checkbox';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';

import image from '../../image/user.png';

const RecentUsersTab = () => {
  return (
    <div className='lg:flex lg:gap-4 lg:mt-4'>
      {/** Left content */}
      <div className='lg:w-full'>
        {/** Header tab */}
        <RecentUserHeader />

        {/** Header tab content */}
        <div className="lg:h-96 lg:overflow-y-scroll">
          <SingleUserCard />
          <SingleUserCard />
          <SingleUserCard />
          <SingleUserCard />
          <SingleUserCard />
          <SingleUserCard />
          <SingleUserCard />
          <SingleUserCard />
          <SingleUserCard />
        </div>
      </div>

    </div>
  )
}

const RecentUserHeader = () => {
  return (
    <div className='lg:w-11/12 lg:flex lg:gap-3 lg:text-sm lg:mb-3'>
      <div className='lg:w-1/4 lg:flex lg:items-center'>
        <Checkbox size='small' />
        <span>ID</span>
        <UnfoldMoreIcon style={{fontSize: '.8rem'}}/>
      </div>
      <div className='lg:w-1/2 lg:flex lg:items-center'>
        <span>OWNER</span>
        <UnfoldMoreIcon style={{fontSize: '.8rem'}}/>
      </div>
      <div className='lg:w-1/4 lg:flex lg:items-center'>
        <span>TITLE</span>
        <UnfoldMoreIcon style={{fontSize: '.8rem'}}/>
      </div>
      <div className='lg:w-1/4 lg:flex lg:items-center'>
        <span>LINKS</span>
        <UnfoldMoreIcon style={{fontSize: '.8rem'}}/>
      </div>
      <div className='lg:w-1/4 lg:flex lg:items-center'>
        <span>PUBLISHED DATE</span>
        <UnfoldMoreIcon style={{fontSize: '.8rem'}}/>
      </div>
    </div>
  )
}

const SingleUserCard = () => {
  return (
    <div className='lg:w-full lg:rounded-md lg:shadow-md lg:bg-white lg:flex lg:items-center lg:py-3 lg:text-sm lg:mb-4'>
      <div className='lg:w-full lg:flex lg:items-center lg:gap-3'>
        <div className='lg:w-1/4 lg:flex lg:items-center'>
          <Checkbox size='small' />
          <p>3qradsf4</p>
        </div>
        <div className='lg:w-1/2 lg:flex lg:items-center lg:gap-2 lg:text-xs'>
          <div className='lg:w-10 lg:h-10 lg:rounded-full lg:overflow-hidden'>
            <img src={image} alt='user pic' />
          </div>
          <div className=''>
            <p className='lg:text-indigo-300'>Kehinde Adebisi</p>
            <p className=''>@Adebisi</p>
          </div>
        </div>
        <p className='lg:w-1/4'>hey watsapp</p>
        <div className='lg:w-1/4 lg:flex lg:items-center lg:gap-2 lg:text-gray-400'>
          <ThumbUpAltOutlinedIcon size='small' />
          <p>32</p>
        </div>
        <p className='lg:w-1/4'>Oct 2003</p>
      </div>
      <div className='lg:w-20 lg:text-right lg:pr-4'>
        <MoreVertIcon />
      </div>
    </div>
  )
}

export default RecentUsersTab