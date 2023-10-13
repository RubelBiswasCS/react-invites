import { useMemo } from 'react'

// Import Components
import { Form, Button, Row, Col, Input, Select } from 'antd'
import StyledModal from '../common/StyledModal'

// Import Actions and Methods
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { homeApi, useGetAccountsQuery, useGetRolesQuery, useInviteUserMutation } from '../../redux/services/homeApi'
import useAlert from '../../hooks/useAlert'

import { setIsInviteUserModalOpen } from '../../redux/reducers/homeReducer'
import { getAccountUUID } from '../../utils/utils'

// Constants
const { Item } = Form

const InviteUserModal = () => {
    const dispatch = useAppDispatch()
    const { alert } = useAlert()
    const [form] = Form.useForm()

    // Redux States
    const isInviteUserModalOpen: boolean = useAppSelector((state) => state?.home?.isInviteUserModalOpen ?? false)

    // Queris
    const { data: accounts = [] } = useGetAccountsQuery({})
    const uuid = useMemo(() => getAccountUUID(accounts), [accounts])
    const { data: roles = [], isLoading: isRolesLoading = false } = useGetRolesQuery({ uuid }, { skip: !uuid })
    const [inviteUser] = useInviteUserMutation()

    // On Cancel
    const _onCancel = () => {
        form.resetFields()
        dispatch(setIsInviteUserModalOpen(false))
    }

    // On Form Submit
    const _onSubmit = async (data: any) => {
        try {
            await inviteUser({ data, uuid }).unwrap()
            alert({ type: 'success', title: 'Invitaiton Sent Successfull' })
            dispatch(homeApi.util.invalidateTags(['InvitedUsers']))
            _onCancel()
        } catch (e: any) {
            alert({ type: 'error', title: 'Failed to sent Invitation', description: e?.data?.message ?? '' })
        }
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
                                    name="emailInvitedTo"
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
                                    label={ "Role" }
                                    name="rolesInvitedTo"
                                    rules={ [
                                        { required: true, message: 'This field is Required!' }
                                    ] }
                                >
                                    <Select
                                        mode="multiple"
                                        loading={ isRolesLoading }
                                        placeholder="Select"
                                        onChange={ () => null }
                                        options={ [ ...roles] }
                                        showSearch
                                        filterOption={ (input: any, option: any) => option?.label?.toLowerCase()?.includes(input?.trim()?.toLowerCase()) }
                                    />
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
