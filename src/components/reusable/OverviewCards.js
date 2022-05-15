import {color} from '../../constants';

const OverviewCards = () => {
  return (
    <div className='lg:w-2/5 lg:grid lg:gap-4 lg:grid-cols-2'>
      <OverviewCard overviewName='Users' number='100' active={true}/>
      <OverviewCard overviewName='Posts' number='100' />
      <OverviewCard overviewName='Comments' number='100' />
      <OverviewCard overviewName='Tags' number='100' />
    </div>
  )
}

const OverviewCard = ({overviewName, number, active}) => {
  const defaultStyle = 'lg:shadow-md lg:bg-white lg:px-4 lg:py-6 lg:rounded-lg lg:bg-gradient-to-b'

  return (
    <div className={active ? defaultStyle.concat(' lg:text-white ').concat(color) : defaultStyle}>
      <p className='lg:text-xs'>{overviewName}</p>
      <p className='lg:text-lg lg:font-bold'>{number}</p>
    </div>
  )
}

export default OverviewCards