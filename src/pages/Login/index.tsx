import { Typography, Row, Col } from "antd"
import LoginForm from "../../components/Login"

import './login.scss'

const { Title } = Typography
const Login = () => {
  return (
    <div className="login">
        <Row gutter={[0, 0]} justify='center'>
            <Col span={10} xs={20} sm={18} md={14}>
                <div className="login-form-container">
                    <Title level={4}>Invitation App</Title>
                    <LoginForm />
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default Login
