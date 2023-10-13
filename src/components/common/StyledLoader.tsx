import { Spin } from 'antd'

interface PropTypes {
    isModal?: boolean
}

const StyledLoader = ({ isModal = false, ...props }: PropTypes) => (
  <div style={{ ...spinContainerStyles, position: isModal ? 'absolute' as 'absolute' : undefined }}>
    <Spin size="small" { ...props } />
  </div>
)

// JSS Styles
const spinContainerStyles = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row' as 'row',
  justifyContent: 'center',
  alignItems: 'center'
}

export default StyledLoader