const Boxes = () => {
  return (
    <div className="lg:flex lg:gap-2 lg:items-center">
      <Box disabled={true} />
      <Box  disabled={true}/>
      <Box />
      <Box />
      <Box />
    </div>
  )
}

const Box = ({disabled}) => {
  const defaultBigBoxStyle = 'lg:border lg:rounded-md lg:w-8 lg:h-8 lg:flex lg:items-center lg:justify-center lg:bg-gray-100'
  const defaultRoundedBoxStyle = 'lg:w-4 lg:h-4 lg:rounded-full lg:bg-gray-200'

  return (
    <div className={disabled && disabled === true ? defaultBigBoxStyle : defaultBigBoxStyle.concat(' ').concat('lg:bg-white')}>
      <div className={disabled && disabled === true ? defaultRoundedBoxStyle : defaultRoundedBoxStyle.concat(' ').concat('lg:bg-indigo-300')}></div>
    </div>
  )
}

export default Boxes;