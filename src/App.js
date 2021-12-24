import './App.css';
import Chat from './Components/Chat';
import Sidebar from './Components/Sidebar';
import { useSelector } from "react-redux";
import Login from "./Components/Login";

function App() {
  let user = useSelector((state) => state);
  return (
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
