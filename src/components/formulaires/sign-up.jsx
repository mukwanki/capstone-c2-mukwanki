import { FaGoogle } from "react-icons/fa6";
import ProfilImg from "../image/fondation.jpg";

const SignUp = () => {
  return (
    <>
      <div className="container">
        <div className="flex items-center justify-center min-h-[400px] bg-white">
          <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
            <div className="flex flex-col justify-center p-8 md:p-14">
              <span className="mb-3 text-4xl font-bold">Formulaire</span>
              <span className="font-light text-gray-400 mb-8">Welcom Back</span>
              <div className="py-4">
                <span className="mb-2 text-sm">Username</span>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500 "
                  name="user"
                  id="name"
                />
              </div>
              <div className="py-4">
                <span className="mb-2 text-sm">Email</span>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500 "
                  name="email"
                  id="email"
                />
              </div>
              <div className="py-4">
                <span className="mb-2 text-sm">Password</span>
                <input
                  type="password"
                  name="pass"
                  id="pass"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                />
              </div>
              <div className="flex justify-between w-full py-4">
                <div className="mr-24 ">
                  <input
                    type="checkbox"
                    name="check"
                    id="ch"
                    className="mr-2"
                  />
                  <span className="text-sm">Remember for 30 days</span>
                </div>
                <span className="font-bold text-">forgot password</span>
              </div>
              <button className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-primary hover:text-white hover:border-gray-300">
                Sign in
              </button>
              <button className="w-full border border-gray-300 text-sm p-2 rounded-lg mb-6 hover:bg-primary hover:text-white">
                <FaGoogle className="w-6 h-6 inline mr-2" />
              </button>
              <div className="text-center text-gray-400">
                Dont have an account?
                <span className="font-bold text-black">Sign up for free</span>
              </div>
            </div>
            <div className="relative">
              <img
                className="w-[400px] h-full hidden rounded-r-xl md:block object-cover"
                src={ProfilImg}
                alt="photo"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
