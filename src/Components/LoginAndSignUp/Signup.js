import React, { useState } from 'react'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase/Firebase'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../Firebase/Firebase';
import { ToastContainer, toast } from 'react-toastify';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';

function Signup() {
    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const passwordformat = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [repassword, setRePassword] = useState("");
    const [submitButtonDisable, setSubmitButtonDisable] = useState(false);


    const handleCreateAccount = async (e) => {

        e.preventDefault();

        if (!name || !email || !phone || !password || !repassword) {
            toast.warning("Fill all fields");
            return;
        }
        else if (!(email).match(mailformat)) {
            toast.warning("Invalid email id");
            return;
        }
        else if (phone < 6000000000 || phone > 9999999999) {
            toast.warning("Invalid Phone number");
            return;
        }
        else if (!(password).match(passwordformat)) {
            toast.warning("Password should contain atlest 8 charecters with captital letter, small letters and special charecter.");
            return;
        }
        else if (password !== repassword) {
            toast.warning("Password is not matching");
            return;
        }
        setSubmitButtonDisable(true);

        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCreadential) => {
                setSubmitButtonDisable(false);
                const user = userCreadential.user;
                await updateProfile(
                    user, {
                    displayName: name
                });
                console.log(user);
                if (auth) {
                    try {
                        await addDoc(collection(db, "users"), {
                            uid: user.uid,
                            name: name,
                            email: email,
                            phone: phone,

                        });
                        toast.success("Login was successfull");
                    } catch (e) {
                        console.error("Error adding document: ", e);
                    }
                    navigate("/");
                }
            })
            .catch((error) => {
                toast.error("Already user exist");
                console.log(error);
            });
        setSubmitButtonDisable(false);
    };

    const handleGoogle = async (e) => {
        e.preventDefault();
        const googleAuthProvider = new GoogleAuthProvider();
        await signInWithPopup(auth, googleAuthProvider)
            .then(userCredential => {
                console.log(userCredential.user);
                navigate('/');
            }).catch((err) => console.log(err));
    }

    return (
        <>
            <div className='wrapper'>
                <h1>Create Account</h1>
                <form method='post'>
                    <input type='text' id='fname' placeholder='First Name' onChange={(e) => setName(e.target.value)} />
                    <input type='email' id='username' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                    <input type='number' id='phonenumber' placeholder='Phone Number' onChange={(e) => setPhone(e.target.value)} />
                    <input type='password' id='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                    <input type='password' id='repassword' placeholder='Re-Enter Password' onChange={(e) => setRePassword(e.target.value)} />
                </form >
                <button onClick={handleCreateAccount} disabled={submitButtonDisable} >Create</button>
                <div className='member'>Already a member?<Link to="/login"> Login Here</Link>
                <br />
                <br />
                <br />

                <h2>Ulternate methods</h2>
                <br />
                <button style={{ background: 'none', display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '5px', borderRadius: '3px', color: 'black', width:'100%', justifyContent:'center', gap:'1rem' }} onClick={handleGoogle} > <img style={{ width: '30px' }} src='https://www.outsystems.com/forge/DownloadResource.aspx?FileName=&ImageBinaryId=43951' alt='img' /> <span >Sign In with Google </span> </button>
                </div>

                
            </div >
            <ToastContainer />
        </>
    )
}

export default Signup;