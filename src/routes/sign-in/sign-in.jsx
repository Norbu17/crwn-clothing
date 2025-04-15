import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <h1>This is sign in page</h1>
      <button onClick={logGoogleUser}>Sign in with google pop up</button>
      <SignUpForm />
    </>
  );
};

export default SignIn;
