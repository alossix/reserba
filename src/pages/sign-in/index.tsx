import { signIn } from "next-auth/react";

const SignInPage: React.FC = () => {
  return (
    <>
      Sign-in page
      <button onClick={() => signIn("google")}>Sign in</button>
    </>
  );
};

export default SignInPage;
