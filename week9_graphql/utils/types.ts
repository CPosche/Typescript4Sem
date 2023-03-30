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

export type Mechanic = {
  id?: mongoose.Types.ObjectId;
  fname: string;
  lname: string;
  email: string;
  role: string;
  password: string;
  createdAt?: Date;
  car?: mongoose.Types.ObjectId;
  slug?: string;

  [key: string]: any;
};

export type Car = {
  id?: mongoose.Types.ObjectId;
  model: string;
  year: number;
  price: number;
  color: string;
  createdAt?: Date;
  reviews?: Reviews[];
};

export type Reviews = {
  id?: mongoose.Types.ObjectId;
  review: string;
  rating: number;
  createdAt?: Date;
};
