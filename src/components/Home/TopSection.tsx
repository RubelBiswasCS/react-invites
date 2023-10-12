import { Button } from 'antd'
import InviteUserModal from '../../components/Home/InviteUserModal'

// Import Hooks and Reducers
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { setIsInviteUserModalOpen, setSelectedTab } from '../../redux/reducers/homeReducer'

// Import Components
import { Radio, Space } from 'antd'

// Import Types
import type { RadioChangeEvent } from 'antd'

import './index.scss'

const TopSection = () => {
  const dispatch = useAppDispatch()

  const selectedTab: string = useAppSelector((state) => state?.home?.selectedTab ?? 'Users')

  const _onOpenInviteUserModal = () => {
    dispatch(setIsInviteUserModalOpen(true))
  }

  // On Tab Change
  const _onTabChange = (e: RadioChangeEvent) => {
    dispatch(setSelectedTab(e.target.value))
  }
  return (
    <div className='top-section'>
      <Space style={{ marginBottom: 24 }}>
        <Radio.Group style={{ display: 'flex', gap: 8 }} value={ selectedTab } onChange={ _onTabChange }>
          <Radio.Button value="Users">Users</Radio.Button>
          <Radio.Button value="InvitedUsers">Invited Users</Radio.Button>
        </Radio.Group>
      </Space>
      <Button ghost type='primary' onClick={ _onOpenInviteUserModal }>Invite a User</Button>
      { true ? <InviteUserModal /> : '' }
    </div>
  )
}

export default TopSection
