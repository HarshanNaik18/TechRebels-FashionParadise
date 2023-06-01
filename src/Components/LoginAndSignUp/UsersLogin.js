import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase/Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
function UsersLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ErrorMsg, setErrorMsg] = useState("");
  const [submitButtonDisable, setSubmitButtonDisable] = useState(false);

  const login = (e) => {
    e.preventDefault();
    if (!email || !password) {
      // setErrorMsg("Fill all fields");
      toast.warning("Fill all fields");
      return;
    }
    setSubmitButtonDisable(true);

    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        setSubmitButtonDisable(false);
        sessionStorage.setItem("user", JSON.stringify(userCredential.user));
        toast.success("Login successfull");
        navigate("/");
      })
      .catch((error) => {
        setSubmitButtonDisable(false);
        toast.error("Invalid username or password", {
          autoClose: 2000,
          pauseOnHover: false,
          closeOnClick: true
        });
        setErrorMsg("Inavlid username or password");
        console.log(error);
      })
  }

  const handleGoogle =  () => {
    const auth = getAuth();
    const googleAuthProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleAuthProvider).then(async (userCredential) => {
      setSubmitButtonDisable(false);
      sessionStorage.setItem("user", JSON.stringify(userCredential.user));
      toast.success("Login successfull");
      navigate("/");
    })
    .catch((error) => {
      setSubmitButtonDisable(false);
      toast.error("Invalid username or password", {
        autoClose: 2000,
        pauseOnHover: false,
        closeOnClick: true
      });
      setErrorMsg("Inavlid username or password");
      console.log(error);
    })
  }

  return (
    <>
      <div className='wrapper'>
        <h1>Login</h1>
        <form action='/' method='post'>
          <input type='email' id='username' placeholder='Username/email' onChange={(event) => setEmail(event.target.value)}></input>
          <input type='password' id='password' placeholder='Password' onChange={(event) => setPassword(event.target.value)}></input>
        </form>
        <b className='errMsg' >{ErrorMsg}</b>
        <button disabled={submitButtonDisable} onClick={login}>Login</button>
        <div className='member'>Not a member?<Link to='/signup' > Sign in Here</Link>
          <br />
          <br />
          <br />

          <h2>Ulternate methods</h2>
          <br />
          <button style={{ background: 'none', display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '5px', borderRadius: '3px', color: 'black', width: '100%', justifyContent: 'center', gap: '1rem' }} onClick={handleGoogle} > <img style={{ width: '30px' }} src='https://www.outsystems.com/forge/DownloadResource.aspx?FileName=&ImageBinaryId=43951' alt='img' /> <span >LogIn with Google </span> </button>
        </div>
        <ToastContainer />
      </div>
    </>
  )
}

export default UsersLogin;