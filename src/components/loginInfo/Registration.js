import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import {} from "react-router-dom";
import { newUser } from "../../service/api";

const intialValues = {
  fname: "",
  lname: "",
  username: "",
  email: "",
  password: "",
  repassword: "",
  createDate: new Date(),
};

const Registration = ({
  loginAcc,
  FaPagelines,
  BsFillEyeSlashFill,
  RiDragDropLine,
}) => {
  const [passType, setPassType] = useState(false);
  const [repassType, setRePassType] = useState(false);
  const [fileNames, setFileNames] = useState();
  const [imagesUp, setImagesUp] = useState([]);
  const [addUser, setAddUser] = useState(intialValues);

  const handleSave = (e) => {
    const { name, value } = e.target;
    setAddUser({
      ...addUser,
      [name]: value,
    });
  };
  async function saveUser() {
    await newUser(addUser);
  }
  const handleAddUser = () => {
    console.log(addUser)
  }



  return (
    <div className=" h-[100vh] w-full flex items-center justify-center bg-slate-900">
      <div className=" h-fit w-full flex items-center justify-center bg-slate-900">
        <div className=" w-[25rem] h-[32rem] flex justify-center items-center rounded-md bg-slate-800">
          <div className=" w-[20rem] h-[20rem]  flex justify-center items-center border-dotted border-[4px] border-slate-900">
            {!fileNames ? (
              // <Dropzone
              //   onDrop={handleDrop}
              //   accept="image/*"
              //   minSize={1024}
              //   maxSize={3072000}
              //   className="w-full h-full flex justify-center items-center"
              // >
              //   {({ getRootProps, getInputProps }) => (
              //     <div
              //       className="w-full h-full flex justify-center items-center"
              //       {...getRootProps({ className: "dropzone" })}
              //     >
              //       <input {...getInputProps()} />
              //       <RiDragDropLine size={80} />
              //       <p>Drag'n'drop images, or click to select files</p>
              //     </div>
              //   )}
              // </Dropzone>
              <div>
                <input
                  onChange={(e) => setImagesUp(e.target.value)}
                  type="file"
                  placeholder="upload images"
                />
                <h2>{imagesUp}</h2>
              </div>
            ) : (
              <div>
                <image
                  className="w-[5rem] h-[5rem]"
                  src={imagesUp}
                  alt="images"
                />
              </div>
            )}

            {/* <h1>{fileNames}</h1> */}
          </div>
        </div>
        <div className=" w-[25rem] bg-green-400 rounded-md py-6 p-4 text-white">
          <div className=" flex items-center justify-center">
            <FaPagelines size={60} />
          </div>
          <div className="">
            <h1 className=" text-center font-bold text-3xl mb-2">
              Registration
            </h1>
            <input
              type="text"
              name="fname"
              placeholder="F-name"
              onChange={(e) => handleSave(e)}
              required
              className="w-full rounded-sm p-2 my-1 border-none outline-none text-gray-900"
            />
            <input
              type="text"
              name="lname"
              onChange={(e) => handleSave(e)}
              placeholder="L-name"
              className="w-full rounded-sm p-2 my-1 border-none outline-none text-gray-900"
            />
            <input
              type="text"
              name="username"
              onChange={(e) => handleSave(e)}
              placeholder="username"
              className="w-full rounded-sm p-2 my-1 border-none outline-none text-gray-900"
            />
            <input
              type="email"
              name="email"
              onChange={(e) => handleSave(e)}
              placeholder="email"
              className="w-full rounded-sm p-2 my-1 border-none outline-none text-gray-900"
            />
            <div className="relative w-full h-fit">
              <input
                type={passType ? "text" : "password"}
                name="password"
                onChange={(e) => handleSave(e)}
                placeholder="Password"
                className="w-full rounded-sm p-2 my-1 border-none outline-none text-gray-900"
              />
              <div
                onClick={() => setPassType(!passType)}
                className={
                  passType
                    ? " absolute top-0 my-1 right-0 bg-green-200 w-25 cursor-pointer p-2"
                    : " absolute top-0 my-1 right-0 bg-red-200 w-25 cursor-pointer p-2"
                }
              >
                <BsFillEyeSlashFill size={24} />
              </div>
            </div>
            <div className="relative w-full h-fit">
              <input
                type={repassType ? "text" : "password"}
                name="repassword"
                onChange={(e) => handleSave(e)}
                placeholder="Re-password"
                className="w-full rounded-sm p-2 my-1 border-none outline-none text-gray-900"
              />
              <div
                onClick={() => setRePassType(!repassType)}
                className={
                  repassType
                    ? " absolute top-0 my-1 right-0 bg-green-200 w-25 cursor-pointer p-2"
                    : " absolute top-0 my-1 right-0 bg-red-200 w-25 cursor-pointer p-2"
                }
              >
                <BsFillEyeSlashFill size={24} />
              </div>
            </div>

            <button onClick={saveUser} className="w-full bg-gray-800 p-2 text-center rounded-sm my-1">
              Registration
            </button>
            <div className="flex items-center justify-center">
              <p>I have a alredy Account!</p>
              <p
                className="px-1 underline text-blue-500 cursor-pointer"
                onClick={loginAcc}
              >
                Login
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
