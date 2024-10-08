import { Link, useNavigate } from "react-router-dom";
import toastAlert from "../../utils/toastAlert";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signIn, signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // Validation
    if (!email || !password)
      return toastAlert("All Fields Are Required", "error");
    try {
      const resUser = await signIn(email, password);
      if (resUser.user) {
        toastAlert("User Login Successful", "success");
        navigate("/");
      }
    } catch (error) {
      toastAlert(error.message, "error");
    }
  };

  // Handle Login With Google
  const handleGoogleLogin = async () => {
    const resUser = await signInWithGoogle();
    if (resUser.user) {
      toastAlert("User Login Successful", "success");
      navigate("/");
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-white text-gray-800">
        <h2 className="mb-3 text-3xl font-semibold text-center">
          Login to your account
        </h2>

        <div className="my-6 space-y-4">
          <button
            aria-label="Login with Google"
            type="button"
            onClick={handleGoogleLogin}
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <p>Login with Google</p>
          </button>
        </div>
        <div className="flex items-center w-full my-4">
          <hr className="w-full text-gray-400" />
          <p className="px-3 text-gray-400">OR</p>
          <hr className="w-full text-gray-400" />
        </div>
        <form noValidate="" onSubmit={handleSubmitForm} className="space-y-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md border-gray-100 outline-none bg-gray-100 text-gray-800 focus:border-primary transition-all duration-200"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <Link
                  rel="noopener noreferrer"
                  to="/reset-password"
                  className="text-xs hover:underline text-gray-400"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md border-gray-100 outline-none bg-gray-100 text-gray-800 focus:border-primary transition-all duration-200"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3 font-semibold rounded-md bg-primary text-white"
          >
            Sign in
          </button>
        </form>
        <p className="text-sm text-center text-gray-400 mt-3">
          Dont have account? &nbsp;
          <Link
            to="/sign-up"
            rel="noopener noreferrer"
            className="focus:underline hover:underline text-primary"
          >
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
