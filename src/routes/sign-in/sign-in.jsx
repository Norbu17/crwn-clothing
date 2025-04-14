import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <h1>This is sign in page</h1>
      <button onClick={logGoogleUser}>Sign in with google pop up</button>
    </>
  );
};

export default SignIn;
