import {useState} from 'react';
import {useGetPostsQuery, useGetPaginatedPostsQuery} from '../../features/post/postSlice'

import Loading from './Loading'

const SearchPagination = ({setPaginatedPostsData, setPaginatedPostsIsFetching}) => {
  const [currentPage, setCurrentPage] = useState(1)

  let {data, isFetching} = useGetPostsQuery()
  let paginatedPosts = useGetPaginatedPostsQuery({page: currentPage})

  const len = data?.total/data?.limit || 1
  paginatedPosts.data?.data.length > 0 && setPaginatedPostsData(paginatedPosts.data?.data)
  paginatedPosts.isFetching ? setPaginatedPostsIsFetching(paginatedPosts.isFetching) : setPaginatedPostsIsFetching(paginatedPosts.isFetching)

  const handleNext = () => {
    setCurrentPage((prevPage) => {
      if(!(prevPage > Math.floor(len))) {
        return prevPage + 1
      }
      return 1;
    })
  }

  const handlePrev = () => {
    setCurrentPage((prevPage) => {
      if(prevPage !== 1) {
        return prevPage - 1
      }
      return Math.floor(len);
    })
  }
  
  return (
    <div className="lg:grid lg:grid-cols-12 lg:gap-2 lg:items-center lg:bg-white lg:rounded-md lg:shadow-md lg:my-2 lg:p-2 lg:w-full">
      <CustomButton text='Prev' noBorder={true} handleNextPrev={handlePrev} currentPage={currentPage}/>
      {
        isFetching ? <Loading size='2xl'/> : <ButtonList len={len} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
      }
      <CustomButton text='Next' handleNextPrev={handleNext} currentPage={currentPage}/>
    </div>
  )
}

const ButtonList = ({len, setCurrentPage, currentPage}) => {

  return(
    <>
      {
        Array.from(Array(Math.floor(len)).keys()).map((el, i) => {
          return (
            <Button text={el+1} key={el} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
          )
        })
      }
    </>
  )
}

const Button = ({noBorder, text, currentPage, setCurrentPage}) => {
  let defaultButtonStyle = 'lg:px-3 lg:py-1 lg:rounded-md lg:border-2 lg:text-center lg:text-indigo-300 lg:cursor-pointer lg:hover:bg-indigo-600'
  defaultButtonStyle = currentPage && currentPage === text ? defaultButtonStyle.concat(' ').concat('lg:bg-indigo-300 lg:text-gray-300 lg:border-none') : defaultButtonStyle

  const handleOnClick = (e) => {
    setCurrentPage(text)
  }
  
  return (
    <div className={noBorder && noBorder === true ? defaultButtonStyle.concat(' ').concat('lg:border-none') : defaultButtonStyle} onClick={(e) => handleOnClick()}>
      {text}
    </div>
  )
}

const CustomButton = ({noBorder, text, currentPage, handleNextPrev}) => {
  let defaultButtonStyle = 'lg:px-3 lg:py-1 lg:rounded-md lg:border-2 lg:text-center lg:text-indigo-300 lg:cursor-pointer lg:hover:bg-indigo-600'
  defaultButtonStyle = currentPage && currentPage === text ? defaultButtonStyle.concat(' ').concat('lg:bg-indigo-300 lg:text-gray-300 lg:border-none') : defaultButtonStyle

  return (
    <div className={noBorder && noBorder === true ? defaultButtonStyle.concat(' ').concat('lg:border-none') : defaultButtonStyle} onClick={handleNextPrev}>
      {text}
    </div>
  )
}

export default SearchPagination;