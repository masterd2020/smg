import {useState} from 'react';

import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';

import TabList from '../reusable/TabList';
import logo from '../../image/user.png';
import tabs from '../../data/tabs';
import {color} from '../../constants';

const DashboardLayout = ({ children, header, SearchPostHeader }) => {
  const [currentTab, setCurrentTab] = useState(null)

  return (
    <div className="lg:relative lg:bg-gray-100 lg:h-full lg:flex">
      {/** Sidebar */}
      <div className={'lg:relative lg:w-1/5 lg:text-xsm lg:p-4 lg:overflow-hidden lg:bg-gradient-to-b'.concat(' ').concat(color)}>
        <div className='lg:flex lg:items-center lg:gap-3'>
          <div>
            <img src={logo} width='50' height='50' alt='logo' />
          </div>
          <div className='lg:text-white'>
            <p className='lg:font-extrabold'>User Groove</p>
            <p className='lg:text-xs'>by Fasasi Toheeb</p>
          </div>
        </div>
        <div className='lg:mt-12 lg:mx-auto lg:text-white lg:px-2 lg:flex lg:gap-2 lg:items-center'>
          <HomeIcon/>
          <span>Home</span>
        </div>
          <div className='lg:mx-auto lg:mt-6 lg:py-1 lg:border-b lg:text-white lg:flex lg:items-center'>
            <span>DIRECTORY</span>
          </div>
          <div className='lg:mt-3'>
            {
              tabs.map((tab, i) => {
                const toggleTab = (i) => {
                  if (currentTab === i) {
                    setCurrentTab(null);
                  } else {
                    setCurrentTab(i);
                  }
                };

                return (
                  <TabList tab={tab} toggleTab={toggleTab} currentTab={currentTab} i={i} />
                )
              })
            }
          </div>
      <div className='lg:absolute lg:bottom-2 lg:w-4/5 lg:mx-auto lg:border-t lg:text-white lg:px-2 lg:py-1 lg:flex lg:gap-2 lg:items-center'>
        <SettingsIcon/>
        <span>Settings</span>
      </div>
      </div>

      <div className='lg:w-full'>
        {/** Header */}
        <div className='lg:h-16 lg:w-full lg:bg-white lg:px-6 lg:z-40 lg:flex lg:items-center lg:justify-between'>
          <p className='lg:font-bold'>{header}</p>
          <div className="lg:flex lg:gap-4 lg:items-center">
            <NotificationsNoneRoundedIcon />
            <div>
              <img src={logo} width='30' height='30' alt='logo' />
            </div>
          </div>
        </div>
        {SearchPostHeader}
        
        {/** Main Content */}
        <div className="lg:w-95-p lg:flex lg:flex-col lg:overflow-hidden lg:mx-auto lg:relative lg:mt-8 lg:p-8 border border-red-500">{children}</div>
      </div>

    </div>
  );
};

export default DashboardLayout;
