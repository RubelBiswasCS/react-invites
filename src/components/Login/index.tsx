// Import Components
import { Form, Button, Row, Col, Input } from 'antd'

// Import Actions and Methods
import { useLoginMutation } from '../../redux/services/authApi'
import { useAppDispatch } from '../../redux/store'
import { setAlertState } from '../../redux/reducers/alertReducer'
import { useNavigate } from 'react-router-dom'

// Constants
const { Item } = Form

const LoginForm = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [form] = Form.useForm()

    const [login] = useLoginMutation()

    // On Cancel
    const _onClear = () => {
        form.resetFields()
    }

    // On Form Submit
    const _onSubmit = async (data: any) => {
        try {
            await login(data).unwrap()
            dispatch(setAlertState({ type: 'success', title: 'Sucessfully Logged In' }))
            navigate('/')
        } catch {
            dispatch(setAlertState({ type: 'error', title: 'Failed to Login', discription: 'Login failed, Try Again' }))
        }
    }

    // On Form Submit Error
    const _onSubmitError = (err: any) => {
        // No action required
    }

    return (
        <Form
            className="invite-user-form"
            style={{ width: '100%', gap: 0 }}
            layout="vertical"
            size="middle"
            onFinish={ (data: any) => _onSubmit(data) }
            onFinishFailed={ _onSubmitError }
            validateTrigger="onChange"
            form={ form }
        >
            <div className="invite-user-form-content">
                <Row gutter={ [12, 0] }>
                    <Col span={ 24 }>
                        <Item
                            label="User Name"
                            name="username"
                            rules={ [
                                { required: true, message: 'This field is Required!' },
                                { type: 'email', message: 'The input is not valid E-mail!' }
                            ] }
                        >
                            <Input placeholder="Email" />
                        </Item>
                    </Col>
                    <Col span={ 24 }>
                        <Item
                            label="Password"
                            name="password"
                            rules={ [
                                { required: true, message: 'This field is Required!' }
                            ] }
                        >
                            <Input.Password placeholder='Password' />
                        </Item>
                    </Col>
                    <Col span={ 24 }>
                        <Item style={{ margin: '12px 0px 0px 0px' }}>
                            <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end', gap: 16 }}>
                                <Button
                                    size="middle"
                                    onClick={ _onClear }
                                >
                                    Clear
                                </Button>
                                <Button
                                    htmlType="submit"
                                    size="middle"
                                    type='primary'
                                >
                                    Login
                                </Button>
                            </div>
                        </Item>
                    </Col>
                </Row>
            </div>
        </Form>
     )
}

export default LoginForm
