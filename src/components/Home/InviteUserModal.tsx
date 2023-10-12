// Import Components
import { Form, Button, Row, Col, Input } from 'antd'
import StyledModal from '../common/StyledModal'

// Import Actions and Methods
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { setIsInviteUserModalOpen } from '../../redux/reducers/homeReducer'

// Constants
const { Item } = Form

const InviteUserModal = () => {
    const dispatch = useAppDispatch()
    const [form] = Form.useForm()

    // Redux States
    const isInviteUserModalOpen: boolean = useAppSelector((state) => state?.home?.isInviteUserModalOpen ?? false)


    // On Cancel
    const _onCancel = () => {
        form.resetFields()
        dispatch(setIsInviteUserModalOpen(false))
    }

    // On Form Submit
    const _onSubmit = (data: any) => {
        const key = 'invite-user'
        const values = {
            ...data
        }

        console.log({ data })
    }

    // On Form Submit Error
    const _onSubmitError = (err: any) => {
        // No action required
    }

    return (
        <StyledModal
            title="Invite a User"
            isOpen={ isInviteUserModalOpen }
            onCancel={ _onCancel }
            content={ (
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
                                    label="Email"
                                    name="email"
                                    rules={ [
                                        { required: true, message: 'This field is Required!' },
                                        { type: 'email', message: 'The input is not valid E-mail!' }
                                    ] }
                                >
                                    <Input placeholder="Email" />
                                </Item>
                            </Col>
                            <Col span={ 24 }>
                                <Item style={{ margin: '12px 0px 0px 0px' }}>
                                    <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end', gap: 16 }}>
                                        <Button
                                            size="middle"
                                            onClick={ _onCancel }
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            htmlType="submit"
                                            size="middle"
                                        >
                                            Invite
                                        </Button>
                                    </div>
                                </Item>
                            </Col>
                        </Row>
                    </div>
                </Form>
            ) }
        />
    )
}

export default InviteUserModal
