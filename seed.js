import mongoose from "mongoose";
import * as dotenv from "dotenv";
import data from "./seedData.js";
import Task from "./task.js";
// import { DATABASE_URL } from "./env.js";

dotenv.config();

console.log("Start seed");
await mongoose.connect(process.env.DATABASE_URL);

await Task.deleteMany({});
await Task.insertMany(data);

await mongoose.connection.close();
console.log("End seed");
