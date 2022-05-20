import {useGetUsersQuery} from '../../features/user/userSlice'

import Loading from './Loading'

import {color} from '../../constants';

const OverviewCards = () => {
  let {isFetching, data} = useGetUsersQuery();
  
  return (
    <div className='lg:w-2/5 lg:grid lg:gap-4 lg:grid-cols-2'>
      <OverviewCard overviewName='Users' number={isFetching ? '' : data?.total} isFetching={isFetching} active={true}/>
      <OverviewCard overviewName='Posts' number='100' />
      <OverviewCard overviewName='Comments' number='100' />
      <OverviewCard overviewName='Tags' number='100' />
    </div>
  )
}

const OverviewCard = ({overviewName, number, active, isFetching}) => {
  const defaultStyle = 'lg:shadow-md lg:bg-white lg:px-4 lg:py-6 lg:rounded-lg lg:bg-gradient-to-b'

  return (
    <div className={active ? defaultStyle.concat(' lg:text-white ').concat(color) : defaultStyle}>
      <p className='lg:text-xs'>{overviewName}</p>
      <div className='lg:text-lg lg:font-bold'>{isFetching ? <Loading size='xl' /> : number}</div>
    </div>
  )
}

export default OverviewCards