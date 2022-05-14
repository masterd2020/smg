import {useState} from 'react'
import DashboardLayout from '../../components/layout/index';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {color} from '../../constants';

import RecentUsersTab from '../../components/reusable/RecentUsersTab';
import RecentPostsTab from '../../components/reusable/RecentPostsTab';

const userTab = ['Recent Users', 'Recent Posts']
const tabStyles =
  'text-center cursor-pointer lg:px-2 lg:py-3 lg:transition-colors lg:duration-350 lg:ease-in-out lg:flex lg:gap-2 lg:font-bold';
const activeTabStyles = tabStyles
  .concat(' ')
  .concat('lg:border-b-4 lg:border-indigo-300');

const Dashboard = () => {
    const [currentTab, setCurrentTab] = useState('Recent Users');

  return (
    <DashboardLayout>
      <div className={"lg:absolute lg:text-gradient-to-b lg:right-2".concat(' ').concat(color)}>
        <MoreHorizIcon />
      </div>
      <div className='lg:flex lg:gap-6 lg:w-full lg:mt-10 lg:mb-12'>
        <div className='lg:w-2/5 lg:grid lg:gap-4 lg:grid-cols-2'>
          <div className={'lg:shadow-md lg:px-4 lg:py-6 lg:rounded-lg lg:bg-gradient-to-b'.concat(' lg:text-white ').concat(color)}>
            <p className='lg:text-xs'>Users</p>
            <p className='lg:text-lg lg:font-bold'>100</p>
          </div>
          <div className='lg:shadow-md lg:bg-white lg:px-4 lg:py-6 lg:rounded-lg lg:bg-gradient-to-b'>
            <p className='lg:text-xs'>Posts</p>
            <p className='lg:text-lg lg:font-bold'>100</p>
          </div>
          <div className='lg:shadow-md lg:bg-white lg:px-4 lg:py-6 lg:rounded-lg lg:bg-gradient-to-b'>
            <p className='lg:text-xs'>Comments</p>
            <p className='lg:text-lg lg:font-bold'>100</p>
          </div>
          <div className='lg:shadow-md lg:bg-white lg:px-4 lg:py-6 lg:rounded-lg lg:bg-gradient-to-b'>
            <p className='lg:text-xs'>Tags</p>
            <p className='lg:text-lg lg:font-bold'>100</p>
          </div>
        </div>
        <div className='lg:w-3/5 lg:bg-white lg:shadow-md lg:py-5 lg:px-4 lg:rounded-lg'>
          <p className='lg:font-bold'>Popular Tags</p>
          <div className='lg:w-4/5 lg:mt-5 lg:grid lg:gap-4 lg:grid-cols-2'>
            <div className={'lg:rounded-md lg:p-2 lg:text-sm lg:flex'.concat(' lg:border lg:border-indigo-300 lg:bg-white lg:text-indigo-300 ').concat(color)}>
              <p className='lg:w-full'>Dogs</p>
              <p className='lg:w-14 lg:text-right'>345</p>
            </div>
            <div className='lg:rounded-md lg:p-2 lg:bg-gray-300 lg:text-sm lg:flex'>
              <p className='lg:w-full'>Water</p>
              <p className='lg:w-14 lg:text-right'>345</p>
            </div>
            <div className='lg:rounded-md lg:p-2 lg:bg-gray-300 lg:text-sm lg:flex'>
              <p className='lg:w-full'>Nature</p>
              <p className='lg:w-14 lg:text-right'>345</p>
            </div>
            <div className='lg:rounded-md lg:p-2 lg:bg-gray-300 lg:text-sm lg:flex'>
              <p className='lg:w-full'>Private info request</p>
              <p className='lg:w-14 lg:text-right'>345</p>
            </div>
            <div className='lg:rounded-md lg:p-2 lg:bg-gray-300 lg:text-sm lg:flex'>
              <p className='lg:w-full'>Winter</p>
              <p className='lg:w-14 lg:text-right'>345</p>
            </div>
          </div>
        </div>
      </div>
      <div className=''>
        <div className='lg:flex lg:w-50'>
          {
            userTab.map((el) => {
              return (
                <div 
                  key={el}
                  className={
                    currentTab === el
                      ? `${activeTabStyles} `
                      : tabStyles
                  }
                  onClick={() => setCurrentTab(el)}>
                  {el}
                </div>
              )
            })
          }
        </div>
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