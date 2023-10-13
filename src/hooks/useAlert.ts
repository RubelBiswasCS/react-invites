import { useAppDispatch, useAppSelector } from '../redux/store'
import { setAlertState } from '../redux/reducers/alertReducer'

type AlertType = 'error' | 'success' | 'warning'

interface AlertOptions {
    type: AlertType,
    title: string,
    description?: string,
    duration?: number
}

export default function useAlert() {
    const dispatch = useAppDispatch()

    const alertState: any = useAppSelector((state) => state?.alert?.alertState ?? null)
 
    function alert(options: AlertOptions | null) {
        dispatch(setAlertState(options))
    }

    return { alert, alertState }
}
