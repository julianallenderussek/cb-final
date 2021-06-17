const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => console.log("Connected Succesfully to MongoDB"))
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = connectDB;