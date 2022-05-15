import {useState} from 'react'
import DashboardLayout from '../../components/layout/index';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {color} from '../../constants';

import RecentUsersTab from '../../components/reusable/RecentUsersTab';
import RecentPostsTab from '../../components/reusable/RecentPostsTab';
import Tags from '../../components/reusable/Tags'
import OverviewCards from '../../components/reusable/OverviewCards'
import ShowTabHeader from '../../components/reusable/ShowTabHeader'



const Dashboard = () => {
  const [currentTab, setCurrentTab] = useState('Recent Users');

  return (
    <DashboardLayout header='Dashboard'>
      <div className={"lg:absolute lg:text-gradient-to-b lg:right-2".concat(' ').concat(color)}>
        <MoreHorizIcon />
      </div>
      <div className='lg:flex lg:gap-6 lg:w-full lg:mt-10 lg:mb-12'>
        <OverviewCards />
        <div className='lg:w-3/5 lg:bg-white lg:shadow-md lg:py-5 lg:px-4 lg:rounded-lg'>
          <p className='lg:font-bold'>Popular Tags</p>
          <Tags />
        </div>
      </div>
      <div className=''>
        <ShowTabHeader currentTab={currentTab} setCurrentTab={setCurrentTab}/>
        <div className='lg:mb-4'>
          {currentTab === 'Recent Users' ? (
            <RecentUsersTab/>
          ) : (
            <RecentPostsTab/>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}



export default Dashboard