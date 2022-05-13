import {
  Link
  } from "react-router-dom";


const tabStyle =  `lg:h-8 lg:text-white lg:pl-2 lg:flex lg:items-center lg:cursor-pointer`
const currentTabStyle = tabStyle.concat(' ').concat('lg:bg-gray-100 lg:text-white ')

const TabList = ({tab, toggleTab, currentTab, i}) => {
  const {name} = tab;

  return (
    <div className='lg:mb-2' key={name}>
      <div className={currentTab === i ?  currentTabStyle : tabStyle} onClick={() => toggleTab(i)}> 
      {name}
      </div>

      {currentTab === i ? (
        tab.sub && tab.sub.length > 0 ? (
          <SubTabList tab={tab} />
          ) : null
      ) : null}
    </div>
  )
}

const SubTabList = ({tab}) => {
  return(
    <div className='lg:text-xsm lg:w-26 lg:ml-2 lg:mt-2 lg:text-white lg:mb-1'>
        {tab.sub.map((subTab) => {
          const {name} = subTab;
          
          return(
            <Link to={subTab.link}>
              <p className='cursor-pointer mb-1' key={name}>{name}</p>
            </Link>
          )
        })}
      </div>
  )
}

export default TabList;