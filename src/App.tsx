import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Alert from './components/common/Alert';

import { useAppSelector, useAppDispatch } from './redux/store';
import { setAlertState } from './redux/reducers/alertReducer';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home />),
  },
  {
    path: "login",
    element: (<Login />),
  },
]);

function App() {
  const dispatch = useAppDispatch()
  const alertState: any = useAppSelector((state) => state?.alert?.alertState ?? null)
  return (<>
    { alertState ? (
      <Alert
        isOpen={ Boolean(alertState) }
        type={ alertState?.type }
        title={ alertState?.title }
        description={ alertState?.description }
        onClose={ () => dispatch(setAlertState(null)) }
      />
    ) : '' }
    <RouterProvider router={router} />
  </>
  );
}

export default App;
