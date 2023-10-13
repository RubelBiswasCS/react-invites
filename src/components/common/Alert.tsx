import { useMemo, useEffect, useRef } from 'react'

type AlertType = 'error' | 'success' | 'warning'

interface PropTypes {
    type: AlertType,
    title: string,
    description?: string,
    isOpen: boolean,
    duration?: number,
    onClose: Function
}

const Alert = ({ type, title, description = '', duration = 3, onClose }: PropTypes) => {
    const timeoutRef: any = useRef(null)

    const [color, bgColor, text] = useMemo(() => {
        if (type === 'warning') {
            return ['#FF6F00', '#FFFDE7', 'Warning']
        }
        if (type === 'success') {
            return ['#66BB6A', '#E8F5E9', 'Success']
        }
        return ['#FF8A65', '#FBE9E7','Error']
    } , [type])

    useEffect(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
        timeoutRef.current = setTimeout(() => onClose(), duration * 1000)

        return () => {
            clearTimeout(timeoutRef.current)
        }
    }, [])

    return (
        <div style={{ ...containerStyle, color: color, backgroundColor: bgColor, border: `1px solid ${ color }` }}>
            <span style={{ ...errorStyle, ...flexCenter, backgroundColor: color }}>{ text }</span>
            <span style={{ ...flexCenter, fontSize: 16, fontStyle: 'bold', color: 'black' }}>{ title }</span>
            <span style={{ ...flexCenter, fontSize: 12, color: 'black' }}>{ description }</span>
            <button style={{ fontSize: 12, marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer' }} onClick={ () => onClose() }>Close</button>
        </div>
    )
}

// Styles
const containerStyle = {
    width: '800px',
    position: 'absolute' as 'absolute',
    left: '50%', 
    transform: 'translateX(-50%)',
    top: 4,
    padding: 6,
    display: 'flex',
    gap: 8,
    zIndex: 2000
}

const errorStyle = {
    padding: '2px 16px',
    color: 'white'
}

const flexCenter = {
    display: 'flex',
    justfyContent: 'center',
    alignItems: 'center'
}

export default Alert
