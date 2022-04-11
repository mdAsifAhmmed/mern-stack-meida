import React from "react";

const UserInfo = ({
  Avatar,
  FaUser,
  MdEdit,
  RiPhoneFill,
  RiSendBackward,
  addNickName,
  nickNameToggle,
  setaddNickName,
  setNickNameToggle,
  HiOutlineExclamationCircle,
}) => {
  const randomname = 'korim'
  return (
    <div className="flex  px-3 items-center flex-col pt-14 w-[20rem] bg-gray-800">
      <Avatar size="180px" name={addNickName} round />
      <label className=" text-gray-500 font-neno pt-2">Add a nick name</label>
      {nickNameToggle ? (
        <div
          onClick={() => setNickNameToggle(false)}
          className=" w-full relative cursor-pointer flex justify-start items-center"
        >
          <FaUser size={20} className=" mr-1 text-gray-900" />
          <h4 className=" text-2xl font-medium  text-gray-50">{`${randomname && addNickName}`}</h4>
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
            placeholder="Add a nick name"
            onChange={(e) => setaddNickName(e.target.value)}
            value={addNickName}
          />
          <RiSendBackward
            onClick={() => setNickNameToggle(true)}
            size={30}
            className="text-gray-200 pr-1 cursor-pointer"
          />
        </div>
      )}
      <div className="py-2 my-2 mt-3 border-y-2 w-full border-gray-900">
        <div className=" w-full relative flex justify-start items-center">
          <HiOutlineExclamationCircle
            size={20}
            className=" mr-1 text-gray-900"
          />
          <p className="  text-1xl py-2 text-gray-300">add your bio</p>
        </div>
      </div>
      <div className="py-2 flex w-full items-center justify-start">
        <RiPhoneFill size={20} className="mr-1 text-gray-900" />
        <p className=" text-gray-300">9028080730280</p>
      </div>
    </div>
  );
};

export default UserInfo;
