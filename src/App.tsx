import { useState } from 'react';
import './App.css';
import Alert from './components/common/Alert'

function App() {
  const[isOpen, setIsOpen] = useState(false)
  return (
    <div className="App">
     { isOpen ? (
      <Alert
        isOpen={ isOpen }
        type="warning" 
        title="Error" 
        description="This is the reason"
        onClose={() => setIsOpen(false)}  
      />
    ) : '' }
    hi
    <button onClick={ () => setIsOpen(true) } style={{ marginTop: 300 }}>Open</button>
    </div>
  );
}

export default App;
