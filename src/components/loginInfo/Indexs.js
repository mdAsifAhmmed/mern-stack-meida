import { useState } from "react";
import { FaPagelines } from "react-icons/fa";
import { RiDragDropLine } from "react-icons/ri";
import { BsFillEyeSlashFill } from "react-icons/bs";
import Login from "./Login";
import Registration from "./Registration";
const Indexs = () => {
  const [newacount, setNewacount] = useState(true);
  const createAcc = () => {
    setNewacount(false);
  };

  const loginAcc = () => {
    setNewacount(true);
  };
  return (
    <div>
      {newacount ? (
        <Login
          createAcc={createAcc}
          FaPagelines={FaPagelines}
          BsFillEyeSlashFill={BsFillEyeSlashFill}
        />
      ) : (
        <Registration
        RiDragDropLine={RiDragDropLine}
          FaPagelines={FaPagelines}
          loginAcc={loginAcc}
          BsFillEyeSlashFill={BsFillEyeSlashFill}
        />
      )}
    </div>
  );
};

export default Indexs;
