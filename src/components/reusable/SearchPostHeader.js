import SearchIcon from '@mui/icons-material/Search';

const SearchPostHeader = () => {
  return (
    <div className="lg:h-14 lg:bg-white lg:px-10 lg:flex lg:items-center lg:border-t-2">
      <div className="lg:relative lg:flex lg:items-center lg:text-sm">
        <SearchIcon className='lg:absolute lg:text-gray-400 lg:ml-4' />
        <input type="text" placeholder="Search any text" className="lg:rounded-full lg:border lg:py-2 lg:pl-14 lg:pr-2 lg:w-72" />
      </div>
    </div>
  )
}

export default SearchPostHeader;