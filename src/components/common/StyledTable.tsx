import { Table } from "antd"
import type { TableProps } from 'antd/es/table';

interface PropTypes extends TableProps<any> {
    rows: object[],
    columns: object[]
}
const StyledTable = ({ rows = [], columns = [], ...restProps }: PropTypes) => {

  return (
    <div>
      <Table 
        dataSource={rows} 
        columns={columns}
        pagination={{
          hideOnSinglePage: true
        }}
        scroll={{
          x: true
        }}
        { ...restProps }
      />
    </div>
  )
}

export default StyledTable
