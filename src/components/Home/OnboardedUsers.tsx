import { useMemo } from 'react'
import StyledTable from "../common/StyledTable"

import { useGetAccountsQuery, useGetOnboardedUsersQuery } from "../../redux/services/homeApi";
import { getAccountUUID } from '../../utils/utils';
const OnboardedUsers = () => {

  const { data: accounts = [] } = useGetAccountsQuery({})
  const uuid = useMemo(() => getAccountUUID(accounts), [accounts])
  const { data: users = [], isLoading = false } = useGetOnboardedUsersQuery({ uuid }, { skip: !uuid })

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'fullname',
      key: 'fullname',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Is Active',
      dataIndex: 'isActive',
      key: 'isActive',
      align: 'center',
      render: (value: any) => value ? 'Yes' : 'No'
    }
  ];

  return (
    <div>
      <StyledTable 
        rows={users} 
        columns={columns}
        loading={ isLoading }
      />
    </div>
  )
}

export default OnboardedUsers
