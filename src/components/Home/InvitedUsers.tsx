import StyledTable from "../common/StyledTable"
const InvitedUsers = () => {

  const dataSource = [
    {
      key: '1',
      name: 'Jeff',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'Ron',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    }
  ];

  return (
    <div>
      <StyledTable 
        rows={dataSource} 
        columns={columns}
      />
    </div>
  )
}

export default InvitedUsers
