import {useGetPostByIdQuery} from '../../features/post/postSlice'

import ArticleIcon from '@mui/icons-material/Article';
import FavoriteIcon from '@mui/icons-material/Favorite';
import defaultImage from '../../image/user.png';

import Loading from './Loading'

const PostDetailCard = ({currentPostId}) => {
  let {data, isFetching} = useGetPostByIdQuery(currentPostId)

  if(!currentPostId.length > 0) {
    return (
      <div className='lg:bg-white lg:rounded-md lg:shadow-md lg:p-6 lg:w-2/6 lg:flex lg:flex-col'>
        <div className='lg:w-full lg:h-full lg:flex lg:flex-col lg:items-center lg:justify-center'>
          <ArticleIcon style={{fontSize: '12rem'}}/>
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
          <PostDetail data={data || {}} />
        )
      }
    </div>
  )
}

const PostDetail = ({data}) => {
  const {id,  image, likes, tags, owner: {firstName, lastName, picture}, text} = data;

  return (
    <>
      <div className='lg:h-32 lg:object-fill lg:w-full lg:overflow-hidden lg:rounded-md lg:mb-3'>
        <img src={image || defaultImage} alt='user pic' />
      </div>  
      <div>
        <p>{text}</p>
        <div className='lg:flex lg:gap-2 lg:text-red-500 lg:m-2'>
          <FavoriteIcon />
          <p>{likes} likes</p>
        </div>
        <div className='lg:text-xs lg:mt-4'>
          <p className='lg:font-bold lg:text-indigo-200'>TAGS</p>
          <div className="lg:flex lg:gap-2 lg:align-center lg:mt-3">
            {
              tags.map(tag => <p className="lg:rounded-full lg:py-1 lg:px-4 lg:border lg:border-indigo-300" key={tag}>{tag}</p>)
            }
          </div>
        </div>
      </div>
      <div className=' lg:mt-5 lg:mb-4 lg:p-1 border-b-2 border-t-2'>
        OWNER
      </div>
      <div className='lg:flex lg:gap-1 lg:mb-4 lg:text-xsm'>
        <div className='lg:w-5 lg:h-5 lg:rounded-full lg:overflow-hidden lg:object-cover border'>
          <img src={picture || defaultImage} alt='user pic'/>
        </div>
        <div>{text}</div>
      </div>
      <div>
        <div className='lg:mb-4'>
          <p className='lg:font-bold lg:text-indigo-200 lg:text-xsm'>FULL NAME</p>
          <p>{firstName} {lastName}</p>
        </div>
        <div className='lg:mb-4'>
          <p className='lg:font-bold lg:text-indigo-200 lg:text-xsm'>EMAIL ADDRESS</p>
          <p>@{firstName}</p>
        </div>
        <div className='lg:mb-4'>
          <p className='lg:font-bold lg:text-indigo-200 lg:text-xsm'>PHONE NUMBER</p>
          <p>5235265625</p>
        </div>
      </div>
    </>
  )
}

export default PostDetailCard