import { Empty } from 'antd'
import { NextPage } from 'next'

interface Props {}

const MyEmpty: NextPage<Props> = ({}) => {
  return <Empty description='اطلاعاتی وجود ندارد' />
}

export default MyEmpty 