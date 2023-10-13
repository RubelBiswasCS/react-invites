import './home.scss'
import { Row, Col } from 'antd'
import TopSection from '../../components/Home/TopSection'
import OnboardedUsers from '../../components/Home/OnboardedUsers'
import InvitedUsers from '../../components/Home/InvitedUsers'

// Import Hooks
import { useAppSelector } from '../../redux/store'
const Home = () => {
  const selectedTab: string = useAppSelector((state) => state?.home?.selectedTab ?? 'Users')
  
  return (
    <div className='home'>
      <Row gutter={[0, 16]}>
        <Col span={ 24 }>
          <TopSection />
        </Col>
        <Col span={ 24 }>
          { selectedTab === 'Users' ? <OnboardedUsers /> : '' }
          { selectedTab === 'InvitedUsers' ? <InvitedUsers /> : '' }
        </Col>
      </Row>
    </div>
  )
}

export default Home
