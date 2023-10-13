import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import Components
import Home from './pages/Home';
import Login from './pages/Login';
import Alert from './components/common/Alert';

import useAlert from './hooks/useAlert';


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
  const { alert, alertState } = useAlert()

  return (<>
    { alertState ? (
      <Alert
        isOpen={ Boolean(alertState) }
        type={ alertState?.type }
        title={ alertState?.title }
        description={ alertState?.description }
        onClose={ () => alert(null) }
      />
    ) : '' }
    <RouterProvider router={router} />
  </>
  );
}

export default App;
