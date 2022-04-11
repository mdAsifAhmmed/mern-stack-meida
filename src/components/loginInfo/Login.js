import React, { useState } from "react";

const Login = ({ createAcc, FaPagelines,BsFillEyeSlashFill }) => {
  const [passType, setPassType] = useState(false);

  const passwordShow = () => {
    setPassType(!passType);
    // alert(e)
  };
  return (
    <div className=" h-[100vh] w-full flex items-center justify-center bg-slate-900">
      <div className=" w-[25rem] bg-green-400 rounded-md py-5 p-4 text-white">
        <div className=" flex items-center justify-center">
          <FaPagelines size={60} />
        </div>
        <div>
          <h1 className=" text-center font-bold text-3xl mb-2">Login</h1>
          <input
            type="text"
            placeholder="Username"
            className="w-full rounded-sm p-2 my-1 border-none outline-none text-gray-900"
          />
            <div className="relative w-full h-fit">
              <input
                type={passType? "text" : "password"}
                placeholder="Password"
                className="w-full rounded-sm p-2 my-1 border-none outline-none text-gray-900"
              />
              <div
                onClick={passwordShow}
                className={
                  passType
                    ? " absolute top-0 my-1 right-0 bg-green-200 w-25 cursor-pointer p-2"
                    : " absolute top-0 my-1 right-0 bg-red-200 w-25 cursor-pointer p-2"
                }
              >
                <BsFillEyeSlashFill size={24} />
              </div>
            </div>
          <button className="w-full bg-gray-800 p-2 text-center rounded-sm my-1">
            Login
          </button>
          <div className="flex items-center justify-center">
            <p>I have no Account!</p>
            <p
              className="px-1 underline text-blue-500 cursor-pointer"
              onClick={createAcc}
            >
              Create
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
