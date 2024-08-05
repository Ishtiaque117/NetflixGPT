import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { auth } from '../utils/firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  
  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errMsg, setErrMsg] = useState(null);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const handleButtonClick = () => {
    //validate email and password

    const msg = checkValidData(email.current.value,password.current.value);

    setErrMsg(msg);

    if(msg) return;


    //sign up
    if(!isSignInForm) {
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
            displayName: name.current.value, photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2LDSBaRpfXMfcl9UH3u4o10Rk4TXZ6daN0w&s"
          }).then(() => {
            const {uid, email, displayName} = auth.currentUser;
            dispatch(addUser({uid: uid, email: email, displayName: displayName
              }));
          }).catch((error) => {
            // An error occurred
            // ...
          });
         })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrMsg(errorCode + "-" + errorMessage);
        });
    } else {
        //sign in
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrMsg(errorCode + "-" + errorMessage);
    });
    }
    

    
  }

  return (
    <div>
        {/* netflix logo */}
        <Header />

        {/* netflix background image */}
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_medium.jpg"
                 alt="logo" />
        </div>

        {/* login form */}

        <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-85'>
            <h1 className='text-2xl font-bold my-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

            {!isSignInForm && 
             <input type="text" placeholder='Full Name'
             className='p-2 my-1 w-full bg-gray-700 rounded-md'/>
             }

            <input ref={email} type="text" placeholder='Email or mobile number'
             className='p-2 my-4 w-full bg-gray-700 rounded-md'/>

            <input ref={password} type="password" placeholder='Password'
             className='p-2 my-1 w-full bg-gray-700 rounded-md'/>

             <button className='p-3 my-8 bg-red-700 rounded-lg w-full' onClick={handleButtonClick}>
             {isSignInForm ? "Sign In" : "Sign Up"}
             </button>
             
             <p className='text-red-600 font-bold text-lg py-2'>{errMsg}</p>


             <p className='text-sm cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign up now." : "Already registered? Sign In Now."}</p>

        </form>


    </div>
  )
}

export default Login