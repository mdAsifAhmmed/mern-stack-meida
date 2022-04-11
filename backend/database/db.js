import mongoose from "mongoose";

const Connetion = async (password) => {
  const URL = `mongodb+srv://media:${password}@cluster0.4lsev.mongodb.net/media?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected Succesfully");
  } catch (error) {
    console.log("error:", error.message);
  }
};

export default Connetion