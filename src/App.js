import './App.css';
import app from './firebase.init';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import { useState } from 'react';

const auth = getAuth(app);
function App() {
  const[user,setUser]=useState({});
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    // console.log('working');
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
      }).catch((error) => {
        console.error(error);
      })
  }

  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
      <h2>Name:{user.displayName}</h2>
      <img style={{borderRadius:'100%'}} src={user.photoURL} alt="" />
      <h3>{user.email}</h3>
    </div>
  );
}

export default App;
