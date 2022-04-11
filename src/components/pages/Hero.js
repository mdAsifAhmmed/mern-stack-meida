import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { BiHappyAlt } from "react-icons/bi";
import { MdEdit } from "react-icons/md";
import { RiSendBackward, RiPhoneFill } from "react-icons/ri";
import { CgMenuGridO, CgClose } from "react-icons/cg";
// import { RiPhoneFill } from "react-icons/io";
import { BsFillCameraFill } from "react-icons/bs";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import Avatar from "react-avatar";

import OurInfo from "./OurInfo";
import UserInfo from "./UserInfo";

const Hero = () => {
  const [outherUserMenu, setOutherUserMenu] = useState(true);
  const [yourUserMenu, setYourUserMenu] = useState(true);
  const [toggleChangeYourName, setToggleChangeYourName] = useState(true);
  const [changeYourName, setChangeYourName] = useState([]);
  const [updateYourBio, setUpdateYourBio] = useState(true);
  const [addNickName, setaddNickName] = useState([]);
  const [nickNameToggle, setNickNameToggle] = useState(true);

  const demouser = [
    {
      name: "kalam",
      chat: "lsjflasjl",
      id: 1,
    },
    {
      name: "lam",
      chat: "lsjflasjl",
      id: 2,
    },
    {
      name: "alam",
      chat: "lsjflasjl",
      id: 3,
    },
    {
      name: "jkalam",
      chat: "lsjflasjl",
      id: 4,
    },
  ];

  return (
    <div className="w-full h-[100vh] flex bg-green-400">
      {yourUserMenu ? (
        <div className=" w-[20rem] flex flex-col">
          <div className="w-full h-16 bg-gray-900 px-2 flex justify-between items-center">
            <Avatar onClick={() => setYourUserMenu(!yourUserMenu)} size="40px" name="kala miya" round className=" cursor-pointer" />
            <CgMenuGridO
              onClick={() => setYourUserMenu(!yourUserMenu)}
              size={30}
              className="text-gray-300 cursor-pointer"
            />
          </div>
          <div className="w-full h-full p-3 bg-gray-800">
            {demouser.map(({ name, chat, id }) => (
              <div
                onClick={() => console.log(id)}
                key={id}
                className=" border-b-[1px] w-full flex last:border-0 border-gray-900 py-2 "
              >
                <Avatar size="40" name={name} round />
                <p className="pl-2">{chat}</p>
              </div>
            ))}
          </div>
          <div className="w-full h-16 bg-gray-900"></div>
        </div>
      ) : (
        <OurInfo
          setYourUserMenu={setYourUserMenu}
          yourUserMenu={yourUserMenu}
          CgClose={CgClose}
          Avatar={Avatar}
          FaUser={FaUser}
          MdEdit={MdEdit}
          RiPhoneFill={RiPhoneFill}
          RiSendBackward={RiSendBackward}
          BsFillCameraFill={BsFillCameraFill}
          changeYourName={changeYourName}
          setChangeYourName={setChangeYourName}
          toggleChangeYourName={toggleChangeYourName}
          setToggleChangeYourName={setToggleChangeYourName}
          updateYourBio={updateYourBio}
          setUpdateYourBio={setUpdateYourBio}
          HiOutlineExclamationCircle={HiOutlineExclamationCircle}
        />
      )}
      <div className=" flex flex-col w-full bg-gray-800">
        <div className=" w-full h-16 flex items-center justify-between px-2">
          <div
            onClick={() => setOutherUserMenu(!outherUserMenu)}
            className=" flex items-center cursor-pointer"
          >
            <Avatar size="40px" name={addNickName} round />
            <h4 className=" text-gray-300 font-normal text-base px-1">{addNickName}</h4>
          </div>
          {outherUserMenu ? (
            <CgMenuGridO
              onClick={() => setOutherUserMenu(!outherUserMenu)}
              size={30}
              className="text-gray-300 cursor-pointer"
            />
          ) : (
            <CgClose
              onClick={() => setOutherUserMenu(!outherUserMenu)}
              size={30}
              className="text-gray-300 cursor-pointer"
            />
          )}
        </div>
        <div className=" w-full h-full bg-gray-900 scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-800 "></div>
        <div className="w-full h-16 flex items-center justify-center px-4">
          <div className="p-2 text-gray-300 cursor-pointer">
            <BiHappyAlt size={25} />
          </div>
          <div className="w-full h-full flex items-center rounded-full">
            <input
              className=" outline-none border-none w-full h-10  pl-5 bg-gray-900 text-gray-200"
              type="text"
              placeholder="send your sms!"
            />
            <div className=" p-2 cursor-pointer bg-transparent  text-gray-300">
              <FiSend size={25} />
            </div>
          </div>
        </div>
      </div>
      {!outherUserMenu ? (
        <UserInfo
          Avatar={Avatar}
          FaUser={FaUser}
          MdEdit={MdEdit}
          RiPhoneFill={RiPhoneFill}
          RiSendBackward={RiSendBackward}
          addNickName={addNickName}
          nickNameToggle={nickNameToggle}
          setNickNameToggle={setNickNameToggle}
          setaddNickName={setaddNickName}
          HiOutlineExclamationCircle={HiOutlineExclamationCircle}
        />
      ) : null}
    </div>
  );
};

export default Hero;
