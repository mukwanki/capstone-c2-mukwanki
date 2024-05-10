const Connexion = () => {
  return (
    <div className="container">
      <div className="flex items-center justify-center min-h-[400px] bg-white">
        <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
          <div className="flex flex-col justify-center p-8 md:p-14">
            <span className="mb-3 text-4xl font-bold">CONNEXION</span>

            <form className="">
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
            </form>
            <button
              type="submit"
              className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-primary hover:text-white hover:border-gray-300"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connexion;
