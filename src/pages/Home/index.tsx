import './home.scss'
import { Row, Col } from 'antd'
import TopSection from '../../components/Home/TopSection'

// Import Hooks
import { useAppSelector } from '../../redux/store'
const Home = () => {
  const selectedTab: string = useAppSelector((state) => state?.home?.selectedTab ?? 'Users')
  
  return (
    <div className='home'>
      <Row gutter={[0, 16]} style={{ flex: 1 }}>
        <Col span={ 24 }>
          <TopSection />
        </Col>
        <Col span={ 24 }>
          { selectedTab === 'Users' ? 'Users' : '' }
          { selectedTab === 'InvitedUsers' ? 'InvitedUsers' : '' }
        </Col>
      </Row>
    </div>
  )
}

export default Home
