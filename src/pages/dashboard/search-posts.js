import DashboardLayout from '../../components/layout/index';

import SearchPostHeader from '../../components/reusable/SearchPostHeader'
import Boxs from '../../components/reusable/Boxs'
import SearchPostActionIcons from '../../components/reusable/SearchPostActionIcons'
import SearchResults from '../../components/reusable/SearchResults'
import SearchPagination from '../../components/reusable/SearchPagination'



const SearchPosts = () => {
  return (
    <DashboardLayout header='Dashbaord > Search' SearchPostHeader={<SearchPostHeader />}>
      <div className='lg:border-y-2 lg:py-3 lg:px-2 lg:grid lg:grid-cols-2 lg:gap-4'>
        <div>
          <Boxs />
        </div>
        <div className="lg:justify-self-end">
          <SearchPostActionIcons /> 
        </div>
      </div>
      <div className=''>
        <SearchResults/>
      </div>
      <SearchPagination />
    </DashboardLayout>
  );
}


export default SearchPosts;