const SearchPagination = () => {
  return (
    <div className="lg:flex lg:gap-2 lg:items-center lg:bg-white lg:rounded-md lg:shadow-md lg:my-2 lg:p-2 lg:w-72">
      <Button text='Prev' noBorder={true} />
      <Button text='1' active={true}/>
      <Button text='2' />
      <Button text='3' />
      <Button text='Next' />
    </div>
  )
}

const Button = ({noBorder, text, active}) => {
  let defaultButtonStyle = 'lg:px-3 lg:py-1 lg:rounded-md lg:border-2 lg:text-indigo-300 lg:cursor-pointer'
  defaultButtonStyle = active && active === true ? defaultButtonStyle.concat(' ').concat('lg:bg-indigo-300 lg:text-gray-300 lg:border-none') : defaultButtonStyle

  return (
    <div className={noBorder && noBorder === true ? defaultButtonStyle.concat(' ').concat('lg:border-none') : defaultButtonStyle}>
      {text}
    </div>
  )
}

export default SearchPagination;