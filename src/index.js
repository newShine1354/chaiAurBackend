// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log(`ERRR: ${error}`);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(
        `Server listening at port: http://localhost${process.env.PORT}`
      );
    });
  })
  .catch((error) => {
    console.log("MONGO db connection failed !!!", error);
    throw error;
  });

/* import mongoose from "mongoose";
import { DB_NAME } from "../src/constants.js";
import express from "express";
const app = express();

(async () => {
    try {
      mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
      app.on("error", (error) => {
        console.log("ERRR: ", error);
        throw error
      });
      app.listen(process.env.PORT, ()=>{
        console.log(`App is listening at port ${process.env.PORT}`);
      })
    } catch (error) {
      console.error("ERROR: ", error);
      throw err;
    }
  })(); */
