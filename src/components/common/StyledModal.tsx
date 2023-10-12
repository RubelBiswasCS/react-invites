import React from 'react'

// Import Components
import { Modal, Typography } from 'antd'

// Import Icons
import { CloseCircleOutlined } from '@ant-design/icons'

interface PropTypes {
    title: string,
    style?: object,
    width?: number | string,
    content: any,
    isOpen?: boolean,
    onCancel: Function
}

const StyledModal = ({ title, style, width, content, isOpen, onCancel }: PropTypes) => (
    <Modal
        title={ <Typography style={ titleStyles }>{ title ?? '' }</Typography> }
        footer={ null }
        closeIcon={ <CloseCircleOutlined style={{ fontSize: '24px' }} /> }
        centered
        open={ isOpen }
        onCancel={ () => onCancel() }
        style={{ borderTop: '10px solid #02A66A', borderRadius: '10px 10px 0px 0px', ...style }}
        styles={{ mask: { backdropFilter: 'blur(1.5px)' }}}
        transitionName=""
        width={ width ?? 520 }
    >
        <div style={ containerStyles }>
            { content }
        </div>
    </Modal>
)

// JSX Styles
const containerStyles = {
    width: 'auto',
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center' as 'center',
    justifyContent: 'center' as 'center',
    gap: 32,
    margin: '0px 0px',
    padding: '8px 0px'
}

const titleStyles = {
    fontFamily: "'Nunito'",
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '22px',
    minHeight: '20px',
    display: 'flex',
    alignItems: 'center',
    color: '#4C5976'
}

export default StyledModal
