import {
  Link
  } from "react-router-dom";


const tabStyle =  `lg:h-8 lg:text-white lg:pl-2 lg:flex lg:items-center lg:cursor-pointer`
const currentTabStyle = tabStyle.concat(' ').concat('lg:bg-gray-300 lg:text-white lg:opacity-50')

const TabList = ({tab, toggleTab, currentTab, i}) => {
  const {name, link} = tab;

  return (
    <div className='lg:mb-2' key={name}>
      <Link to={link}>
        <div className={currentTab === i ?  currentTabStyle : tabStyle} onClick={() => toggleTab(i)}> 
        {name}
        </div>
      </Link>

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
            <Link to={subTab.link} key={`${name}`}>
              <p className='cursor-pointer mb-1'>{name}</p>
            </Link>
          )
        })}
      </div>
  )
}

export default TabList;