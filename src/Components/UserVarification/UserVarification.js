import React, { useContext, useState } from 'react';
import Authentication from '../Authentication/Authentication';
import CreateAccount from '../CreateAccount/CreateAccount';
import LogInForm from '../LogInForm/LogInForm';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config'
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import Header2 from '../Header2/Header2';

firebase.initializeApp(firebaseConfig);

const UserVarification = () => {
  const [newUser, setNewUser] = useState(true);
    const [isCreateAccount, setIsCreateAccount] = useState(true);
    const toggleLogInToSignUp = () => {
      setIsCreateAccount(!isCreateAccount);
      setNewUser(!newUser);
    }
    
    const [user,setUser] = useState({
      isSignedIn: false,
      name: '',
      email: '',
      password: '',
      error: '',
      success: false,
    })
    
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const handleSignInGoogle= ()=>{
    firebase.auth().signInWithPopup(googleProvider)
     .then(res=>{
      const{ displayName, email} = res.user;
      const signedInUser ={
        isSignedIn: true,
        name: displayName,
        email: email,
      }
      setUser(signedInUser);
      setLoggedInUser(signedInUser);
      history.replace(from);
     })
     .catch(err=>{
      console.log(err);
      console.log(err.message);
    })
  }
  const handleSignOut = ()=>{
    firebase.auth().signOut()
    .then(res => {
      // Sign-out successful.
      const signedOutUser= {
        isSignedIn: false,
        name: '',
        email: '',
        photo: '',
      }
      setUser(signedOutUser)
    })
    .catch(err => {
      // An error happened.
    });
  }

  const handleBlour = (e) => {
    let isFormValid=true;
    if (e.target.name === 'email') {
      isFormValid = /^[a-zA-Z0-9]+$/.test(e.target.value) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value);
    }
    if (e.target.name === 'password') {
      isFormValid = e.target.value.length>6 && /\d{1}/.test(e.target.value);
    }
    if(isFormValid){
        const newUserInfo = {...user};
        newUserInfo[e.target.name] = e.target.value;
        setUser(newUserInfo);
    }
  }

  const handleSubmit = (e) => {
      if(newUser && user.email && user.password){
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(res=>{
          const newUserInfo = {...user};
          newUserInfo.error = '';
          newUserInfo.success= true;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          history.replace(from);
          updateUserName(user.name);
        })
        .catch(error=>{
          const newUserInfo ={...user};
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
      }

      if(!newUser && user.email && user.password){
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(res=>{
          const newUserInfo = {...user};
          newUserInfo.error = '';
          newUserInfo.success= true;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          history.replace(from);
        })
        .catch(function(error) {
          const newUserInfo ={...user};
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
      }
      e.preventDefault();
  }

  const updateUserName = name =>{
    const user = firebase.auth().currentUser;

        user.updateProfile({
          displayName: name,
        }).then(function() {
        }).catch(function(error) {
          console.log(error);
        });
      }
      const FbProvider = new firebase.auth.FacebookAuthProvider();
      
    const handleSignInFacebook = () =>{
      firebase.auth().signInWithPopup(FbProvider).then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;
        setUser(user);
        setLoggedInUser(user);
        history.replace(from);
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
    }
    return (
          <div>
            <Header2></Header2>
            <div>
                {isCreateAccount ? <CreateAccount toggleLogInToSignUp={toggleLogInToSignUp} handleSubmit={handleSubmit} handleBlour={handleBlour} ></CreateAccount> :<LogInForm toggleLogInToSignUp={toggleLogInToSignUp} handleSubmit={handleSubmit} handleBlour={handleBlour} ></LogInForm>}
            </div>
            <div>
                <Authentication handleSignInGoogle={handleSignInGoogle} handleSignInFacebook={handleSignInFacebook}></Authentication>
            </div>
               
          </div>
    );
};

export default UserVarification;