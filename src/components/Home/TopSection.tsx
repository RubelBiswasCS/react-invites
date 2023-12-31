import { useTransition, lazy, Suspense } from 'react'
import { useNavigate } from 'react-router-dom'

// Import Components
import { Button, Row, Col } from 'antd'
import StyledLoader from '../common/StyledLoader'

// Import Hooks and Reducers
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { setIsInviteUserModalOpen, setSelectedTab } from '../../redux/reducers/homeReducer'

// Import Components
import { Tabs } from 'antd'

import './index.scss'

const InviteUserModal = lazy(() => import('../../components/Home/InviteUserModal'))
 

const TopSection = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

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

  // On Logout
  const _onLogout = () => {
    localStorage.clear()
    navigate('/login')
  }

  return (
    <div className='top-section'>
      { isInviteUserModalOpen ? (
        <Suspense fallback={ <StyledLoader isModal /> }>
          <InviteUserModal />
        </Suspense>
      )
      : '' }
      <Row gutter={[0, 0]} style={{ flex: 1 }}>
        <Col span={24} className='flex-end'>
          <div className='top-actions'>
            <Button ghost type='primary' onClick={ _onOpenInviteUserModal }>Invite a User</Button>
            <Button ghost danger type='primary' onClick={ _onLogout }>Logout</Button>
          </div>
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
    </div>
  )
}

export default TopSection
