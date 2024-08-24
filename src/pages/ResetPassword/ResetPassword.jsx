const ResetPassword = () => {
  return (
    <div className="w-full flex-col gap-3 h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-md">
        <div className="text-center mb-4">
          <h2 className="text-lg md:text-2xl font-bold">Reset Your Password</h2>
        </div>
        <form action="">
          <div className="relative flex gap-1">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Inter Your Email"
              className="w-full flex-1 px-3 py-2 border rounded-md border-gray-100 outline-none bg-gray-100 text-gray-800 focus:border-primary transition-all duration-200"
            />
            <button
              type="submit"
              className=" flex-0 px-8 py-3 font-semibold rounded-md bg-primary text-white"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
