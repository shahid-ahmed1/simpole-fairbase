import { GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import auth from "../../faireBase/fair-base";
import { useState } from "react";


const Login = () => {
    const [user ,setUser]=useState(null);
const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()
    const handleGogleSignIn =()=>{
        signInWithPopup(auth,provider)
        .then((reault=> {
           setUser(reault.user)
        }))
        .catch(error=>{
           console.log('error',error)
           setUser(null)
        });
        
    }
    const handleGitHubSignIn=()=>{
signInWithPopup(auth ,githubProvider)
.then((result=>{
    setUser(result.user)
    
}))
.catch(error => console.log(error))
    }

    const handleGogleSignOut =()=>{
          signOut(auth)
          .then(()=>{
            console.log('sign out done')
            setUser(null)
          })
          .catch(error => console.log(error))
    }
    return (
        <div>
           
           
            {
                user ?<button onClick={handleGogleSignOut}>SignOut</button> :  <div>
                    <button onClick={handleGogleSignIn}>Login width Google</button> 
                    <button onClick={handleGitHubSignIn}>Login width GitHub</button>
                </div>
            }
            {
                user && <div>
                    <h4>{user.
                    displayName
                    }</h4>
                    <h4>{user.email}</h4>
                </div>
            }
        </div>
    );
};

export default Login;