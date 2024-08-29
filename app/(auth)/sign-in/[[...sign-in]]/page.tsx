import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div className="flex h-screen w-full justify-center items-center bg-white-5">
      <SignIn />
    </div>
  );
};

export default SignInPage;
