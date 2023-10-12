import './home.scss'
import { Button } from 'antd'
import InviteUserModal from '../../components/Home/InviteUserModal'

// Import Hooks and Reducers
import { useAppDispatch } from '../../redux/store'
import { setIsInviteUserModalOpen } from '../../redux/reducers/homeReducer'

const Home = () => {
  const dispatch = useAppDispatch()

  const _onOpenInviteUserModal = () => {
    dispatch(setIsInviteUserModalOpen(true))
  }

  return (
    <div className='home'>
      <Button ghost type='primary' onClick={ _onOpenInviteUserModal }>Invite a User</Button>
      { true ? <InviteUserModal /> : '' }
    </div>
  )
}

export default Home
