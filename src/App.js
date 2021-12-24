import './App.css';
import Chat from './Components/Chat';
import Sidebar from './Components/Sidebar';
import { useSelector, useDispatch } from "react-redux";
import Login from "./Components/Login";
import { auth, firestore } from './firebase';
import { useEffect } from "react";
import { userCreator, userLogout } from "./redux/Actions/userActions";

function App() {
  const dispatch = useDispatch();
  let user = useSelector((state) => state);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(userCreator({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        }))
      } else {
        dispatch(userLogout());
      }
    })
  }, [dispatch])
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
