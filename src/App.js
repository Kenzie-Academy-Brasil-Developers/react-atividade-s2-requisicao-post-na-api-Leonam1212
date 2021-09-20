import Form from "./pages/FormLogin"
import Display from "./pages/Display"
import {useState} from "react"
import './App.css';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(undefined)

  return (
    <div className="App">
        <Form  setIsAuthenticated={setIsAuthenticated}/>
        { isAuthenticated === undefined ? "" : <Display isAuthenticated={isAuthenticated}/>}
    </div>
  );
}

export default App;
