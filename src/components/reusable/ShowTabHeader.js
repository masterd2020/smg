const userTab = ['Recent Users', 'Recent Posts']

const tabStyles =
  'text-center cursor-pointer lg:px-2 lg:py-3 lg:transition-colors lg:duration-350 lg:ease-in-out lg:flex lg:gap-2 lg:font-bold';
const activeTabStyles = tabStyles
  .concat(' ')
  .concat('lg:border-b-4 lg:border-indigo-300');

const ShowTabHeader = ({currentTab, setCurrentTab}) => {

  return (
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
  )
}

export default ShowTabHeader