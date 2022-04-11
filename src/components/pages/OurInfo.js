import React from "react";

const OurInfo = ({
  setYourUserMenu,
  yourUserMenu,
  CgClose,
  Avatar,
  FaUser,
  MdEdit,
  RiPhoneFill,
  RiSendBackward,
  BsFillCameraFill,
  changeYourName,
  setChangeYourName,
  setToggleChangeYourName,
  toggleChangeYourName,
  updateYourBio,
  setUpdateYourBio,
  HiOutlineExclamationCircle,
}) => {
  return (
    <div className=" w-[20rem] flex flex-col">
      <div className="w-full h-16 bg-gray-800 px-2 flex justify-end items-center">
        <CgClose
          onClick={() => setYourUserMenu(!yourUserMenu)}
          size={30}
          className="text-gray-300 cursor-pointer"
        />
      </div>
      <div className="w-full h-full bg-gray-800 flex flex-col items-center ">
        <div className="text-center w-full px-3">
          <div className="w-full relative">
            <Avatar size="200px" name={changeYourName} round />
            <BsFillCameraFill
              size={35}
              className=" absolute top-32 text-gray-200 right-0  bg-green-400 p-2 rounded-md "
            />
          </div>
          {/* edite your name */}
          <div className="py-2">
            {toggleChangeYourName ? (
              <div
                onClick={() => setToggleChangeYourName(false)}
                className=" w-full relative cursor-pointer flex justify-start items-center"
              >
                <FaUser size={20} className=" mr-1 text-gray-900" />
                <h4 className=" text-3xl font-medium py-2 text-gray-50">
                  {changeYourName}
                </h4>
                <MdEdit
                  size={20}
                  className=" absolute top-2 right-0 text-green-400"
                />
              </div>
            ) : (
              <div className="flex items-center bg-gray-900 p-1 rounded-md my-2">
                <input
                  className="w-full py-1 px-2 bg-transparent outline-none border-none text-gray-300"
                  type="text"
                  placeholder="chaange your name"
                  onChange={(e) => setChangeYourName(e.target.value)}
                  value={changeYourName}
                />
                <RiSendBackward
                  onClick={() => setToggleChangeYourName(true)}
                  size={30}
                  className="text-gray-200 pr-1 cursor-pointer"
                />
              </div>
            )}
          </div>

          {/* update your bio */}
          <div className="py-2 border-y-2 border-gray-900">
            {updateYourBio ? (
              <>
                <div
                  onClick={() => setUpdateYourBio(false)}
                  className=" w-full relative cursor-pointer flex justify-start items-center"
                >
                  <HiOutlineExclamationCircle
                    size={20}
                    className=" mr-1 text-gray-900"
                  />
                  <p className="  text-1xl py-2 text-gray-300">add your bio</p>
                  <MdEdit
                    size={20}
                    className=" absolute top-2 right-0 text-green-400"
                  />
                </div>
              </>
            ) : (
              <div className="flex items-center bg-gray-900 p-1 rounded-md my-2">
                <input
                  className="w-full py-1 px-2 bg-transparent outline-none border-none text-gray-300"
                  type="text"
                  placeholder="add your bio"
                />
                <RiSendBackward
                  onClick={() => setUpdateYourBio(true)}
                  size={30}
                  className="text-gray-200 pr-1 cursor-pointer"
                />
              </div>
            )}
          </div>

          <div className="py-2 flex items-center justify-start">
            <RiPhoneFill size={20} className="mr-1 text-gray-900" />
            <p className=" text-gray-300">9028080730280</p>
          </div>
        </div>
      </div>
      <div className="w-full  bg-gray-900">
        <div className="flex flex-col m-2">
          <button className=" text-gray-200 py-2 bg-green-400 m-1">
            Switch Account
          </button>
          <button className=" text-gray-200 py-2 bg-red-400 m-1">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default OurInfo;
