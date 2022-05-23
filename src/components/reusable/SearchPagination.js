import {useGetPostsQuery} from '../../features/post/postSlice'

import Loading from './Loading'

const SearchPagination = () => {
    let {data, isFetching} = useGetPostsQuery()
    const len = data?.total/data?.limit

  return (
    <div className="lg:grid lg:grid-cols-12 lg:gap-2 lg:items-center lg:bg-white lg:rounded-md lg:shadow-md lg:my-2 lg:p-2 lg:w-full">
      <Button text='Prev' noBorder={true} />
      <Button text='1' active={true}/>
      {
        isFetching ? <Loading size='2xl'/> : <ButtonList len={len}/>
      }
      <Button text='Next' />
    </div>
  )
}

const ButtonList = ({len}) => {

  return(
    <>
      {
        Array.from(Array(Math.floor(len)).keys()).map((i) => <Button key={i} text={i+1} />)
      }
    </>
  )
}

const Button = ({noBorder, text, active}) => {
  let defaultButtonStyle = 'lg:px-3 lg:py-1 lg:rounded-md lg:border-2 lg:text-center lg:text-indigo-300 lg:cursor-pointer lg:hover:bg-indigo-600'
  defaultButtonStyle = active && active === true ? defaultButtonStyle.concat(' ').concat('lg:bg-indigo-300 lg:text-gray-300 lg:border-none') : defaultButtonStyle

  return (
    <div className={noBorder && noBorder === true ? defaultButtonStyle.concat(' ').concat('lg:border-none') : defaultButtonStyle}>
      {text}
    </div>
  )
}

export default SearchPagination;