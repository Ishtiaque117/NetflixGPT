import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { IMG_URL, NETFLIX_LOGO_URL, SUPPORTED_LANGUAGE } from '../utils/constants';
import { toggleGptSearch } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

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

   const handleGptSearchClick =() => {
        dispatch(toggleGptSearch());
   } 

   const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
   }

   const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-44'
             src={NETFLIX_LOGO_URL}
             alt="logo" />

        {user && <div className='flex p-4'>
          {showGptSearch && <select className="bg-white text-black p-2 m-1 px-2 text-lg font-semibold rounded-lg"
           onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGE.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>}
          <button className="bg-white text-black p-2 m-1 px-2 text-lg font-bold rounded-lg"
           onClick={handleGptSearchClick}>
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>
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

export default Header;