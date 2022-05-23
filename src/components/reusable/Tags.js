import {color} from '../../constants';

import {useGetTagsQuery} from '../../features/tag/tagSlice'

import Loading from './Loading'


const Tags = () => {
  let tagData = useGetTagsQuery();

  return (
    <div className='lg:w-4/5 lg:mt-5 lg:grid lg:gap-4 lg:grid-cols-2'>
      {tagData.isFetching ? <Loading size='xl' /> : tagData.data?.data.slice(0,6).map((tag, index) => {
        return (
          <Tag key={index} tag={tag} number={index} active={index === 0} />
        )
      })}
    </div>
  )
}

const Tag = ({tag, number, active}) => {
  const defaultStyle = 'lg:rounded-md lg:p-2 lg:text-sm lg:flex'

  return (
    <div className={active ? defaultStyle.concat(' lg:border lg:border-indigo-300 lg:bg-white lg:text-indigo-300 ').concat(color) : defaultStyle.concat(' lg:bg-gray-300')}>
      <p className='lg:w-full'>{tag}</p>
      <p className='lg:w-14 lg:text-right'>{number}</p>
    </div>
  )
}

export default Tags;