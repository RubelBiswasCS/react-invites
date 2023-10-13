import { useTransition } from 'react'
import { Button, Row, Col } from 'antd'
import InviteUserModal from '../../components/Home/InviteUserModal'

// Import Hooks and Reducers
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { setIsInviteUserModalOpen, setSelectedTab } from '../../redux/reducers/homeReducer'

// Import Components
import { Tabs } from 'antd'

import './index.scss'

const TopSection = () => {
  const dispatch = useAppDispatch()

  const [isPending, startTransition] = useTransition();

  // Redux States
  const selectedTab: string = useAppSelector((state) => state?.home?.selectedTab ?? 'Users')
  const isInviteUserModalOpen: boolean = useAppSelector((state) => state?.home?.isInviteUserModalOpen ?? false)

  const _onOpenInviteUserModal = () => {
    startTransition(() => {
      dispatch(setIsInviteUserModalOpen(true))
    });
  }

  // On Tab Change
  const _onTabChange = (key: string) => {
    dispatch(setSelectedTab(key))
  }

  return (
    <div className='top-section'>
      <Row gutter={[0, 0]} style={{ flex: 1 }}>
        <Col span={24} className='flex-end'>
          <Button ghost type='primary' onClick={ _onOpenInviteUserModal }>Invite a User</Button>
        </Col>
        <Col span={24}>
          <Tabs
            onChange={ _onTabChange }
            type="card"
            activeKey={ selectedTab }
            animated
            items={[
              {
                label: 'Onboarded Users',
                key: 'Users'
              },
              {
                label: 'Invited Users',
                key: 'InvitedUsers'
              }
            ]}
          />
        </Col>
      </Row>     
      { isInviteUserModalOpen ? <InviteUserModal /> : '' }
    </div>
  )
}

export default TopSection
