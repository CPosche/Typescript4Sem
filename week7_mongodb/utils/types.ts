import mongoose from "mongoose";

export type Person = {
  id?: mongoose.Types.ObjectId;
  name: string;
  age: number;
  city: string;
  cars?: mongoose.Types.ObjectId[];
  createdAt?: Date;

  [key: string]: any;
};
