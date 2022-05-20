import { SyncOutlined } from '@ant-design/icons';

const Loading = ({size}) => {
  return (
    <div className="lg:text-center">
      <SyncOutlined spin className={`lg:text-${size} lg:text-indigo-300`} />
    </div>
  )
}

export default Loading;