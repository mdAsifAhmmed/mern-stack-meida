import axios from "axios";

const URL = "http://localhost:5000";

export const newUser = async (user) => {
  try {
    return await axios.post(`${URL}/newUser`, user);
  } catch (err) {
    console.log("error while calling newUser api", err);
  }
};
