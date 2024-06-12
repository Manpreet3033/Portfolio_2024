import mongoose, { Mongoose } from "mongoose";
import projectsModel from "./models/projects.model";

const MONGO_DB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;
  if (!MONGO_DB_URL) {
    console.log("MongoDB URL is missing");
    return;
  }
  try {
    cached.promise =
      cached.promise ||
      mongoose.connect(MONGO_DB_URL, {
        dbName: "portfolioDB",
      });
    cached.conn = await cached.promise;
    console.log("MongoDB Connected Successfully");
    return cached.conn;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
