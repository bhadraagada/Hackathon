import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <div className="flex h-screen w-full justify-center items-center bg-white-5">
      <SignUp />
    </div>
  );
};

export default SignUpPage;
