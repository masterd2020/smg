import {color} from '../../constants';

const Tags = () => {
  return (
    <div className='lg:w-4/5 lg:mt-5 lg:grid lg:gap-4 lg:grid-cols-2'>
      <Tag tag='Dog' number='345' active={true} />
      <Tag tag='Water' number='345' />
      <Tag tag='Nature' number='345' />
      <Tag tag='Private info request' number='345' />
      <Tag tag='Winter' number='345' />
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