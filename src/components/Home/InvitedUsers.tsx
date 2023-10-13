import { useMemo } from 'react'
import StyledTable from "../common/StyledTable"

import { useGetAccountsQuery, useGetInvitedUsersQuery } from "../../redux/services/homeApi";
import { getAccountUUID } from '../../utils/utils';
const InvitedUsers = () => {

  const { data: accounts = [] } = useGetAccountsQuery({})
  const uuid = useMemo(() => getAccountUUID(accounts), [accounts])
  const { data: invitedUsers = [], isLoading = false } = useGetInvitedUsersQuery({ uuid }, { skip: !uuid })
  
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Email',
      dataIndex: 'emailInvitedTo',
      key: 'emailInvitedTo',
    },
    {
      title: 'Invited By',
      dataIndex: 'invitedByName',
      key: 'invitedByName',
    },
    {
      title: 'Invited By(Username)',
      dataIndex: 'invitedByUserName',
      key: 'invitedByUserName',
    },
    {
      title: 'Invited On',
      dataIndex: 'invitedOn',
      key: 'invitedOn',
    }
  ];

  return (
    <div>
      <StyledTable 
        rows={invitedUsers} 
        columns={columns}
        loading={ isLoading }
      />
    </div>
  )
}

export default InvitedUsers
