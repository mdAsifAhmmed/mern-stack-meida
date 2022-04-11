import  user  from "../model/User";

export const addUser = async (request, response) => {
  try {
    // const exist = await user.findOne({ userId: request.body.userId });
    // if (exist) {
    //   response.status(200).json("user alredy exists");
    //   return;
    // }
    const newUser = new user(request.body);
    await newUser.save();
    response.status(200).json("user saved Successfully");
  } catch (error) {
    response.status(500).json(error);
  }
};

export const getUser = async (request, response) => {
  try {
    const users = await user.find({});
    response.status(200).json(users);
  } catch (err) {
    response.status(500).json(err);
  }
};
