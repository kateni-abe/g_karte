import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Home() {
  const [user] = useAuthState(auth);
  return (
    <div>
      {user ? (
        <>
          <UserInfo />
          <SignOutButton />
        </>
      ) : (
        <SignInButton />
      )}
    </div>
  );
}

export default Home;

//----------------------------------------
// ▼googleボタンでサインイン
//----------------------------------------
function SignInButton() {
  const signInWithGoogle = () => {
    // ▼firebaseを使ってgoogleでサインインする
    signInWithPopup(auth, provider);
  };

  return (
    <button onClick={signInWithGoogle}>
      <p>Sign in with google</p>
    </button>
  );
}

//----------------------------------------
// ▼サインアウト
//----------------------------------------
function SignOutButton() {
  return (
    <button onClick={() => auth.signOut()}>
      <p>Sign Out</p>
    </button>
  );
}

function UserInfo() {
  return (
    <div className='userInfo'>
      <img src={auth.currentUser.photoURL} alt='' />
      <p>{auth.currentUser.displayName} </p>
    </div>
  );
}
