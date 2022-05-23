import Checkbox from '@mui/material/Checkbox';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import {useGetPostsQuery} from '../../features/post/postSlice'

import Loading from './Loading'

import defaultImage from '../../image/user.png';
import handleError from '../../lib/handleError'

const SearchPostResult = () => {
  let {data, isFetching, isError, error} = useGetPostsQuery()

  handleError(isError, error);

  return (
    <div className='lg:flex lg:gap-4 lg:mt-4'>
      {/** Left content */}
      <div className='lg:w-full'>
        {/** Header tab */}
        <RecentPostHeader />

        {/** Header tab content */}
        <div className="lg:h-100 lg:overflow-y-scroll">
          {
            isFetching ? <Loading size='2xl'/> : <PostList  data={data}/>
          }
        </div>
      </div>
    </div>
  )
}

const RecentPostHeader = () => {
  return (
    <div className='w-97-p'>
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
    </div>
  )
}

const PostList = ({data, setCurrentPostId}) => {
  return (
    <>
      {
        data?.data.map((post) => <SinglePostCard key={post.id} post={post} setCurrentPostId={setCurrentPostId}/>)
      }
    </>
  )
}


const SinglePostCard = ({post}) => {
  const {id, image, likes, owner: {firstName, lastName, title}, publishDate} = post;

  return (
    <div className='lg:w-full lg:rounded-md lg:shadow-md lg:bg-white lg:flex lg:items-center lg:py-3 lg:text-sm lg:mb-4'>
      <div className='lg:w-11/12 lg:flex lg:items-center lg:gap-3'>
        <div className='lg:w-1/4 lg:flex lg:items-center'>
          <Checkbox size='small' />
          <p>{id.slice(0, 5)}</p>
        </div>
        <div className='lg:w-1/2 lg:flex lg:items-center lg:gap-2 lg:text-xs'>
          <div className='lg:w-10 lg:h-10 lg:rounded-full lg:overflow-hidden'>
            <img src={image || defaultImage} alt='user pic' />
          </div>
          <div className=''>
            <p className='lg:text-indigo-300'>{firstName} {lastName}</p>
            <p className=''>@{firstName}</p>
          </div>
        </div>
        <p className='lg:w-1/4'>{title}</p>
        <div className='lg:w-1/4 lg:flex lg:items-center lg:gap-2 lg:text-gray-400'>
          <ThumbUpAltOutlinedIcon size='small' />
          <p>{likes}</p>
        </div>
        <p className='lg:w-1/4'>{new Date(publishDate).toDateString()}</p>
      </div>
      <div className='lg:w-20 lg:text-right lg:pr-4'>
        <MoreVertIcon />
      </div>
    </div>
  )
}

export default SearchPostResult