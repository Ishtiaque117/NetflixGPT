import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { IMG_URL } from '../utils/constants';

const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector(store => store.user);

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName} = user;
              dispatch(
                addUser({
                    uid: uid, 
                    email: email, 
                    displayName: displayName,
              }));
              navigate("/browse");
            } else {
              dispatch(removeUser());
              navigate("/"); 
            }
          });

          return () => unsubscribe();
    },[]);

    const handleSignOut = () => {
    
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    };
  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-44'
             src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
             alt="logo" />

        {user && <div className='flex p-4'>
            <img 
              className='w-10 h-10 m-2'
              alt="usericon"
              src={IMG_URL}
              />
              <button className='font-semibold text-white' onClick={handleSignOut}>
                Sign Out
              </button>
        </div>
    }
    </div>
  )
}

export default Header