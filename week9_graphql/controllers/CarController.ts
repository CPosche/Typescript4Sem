import { Request, Response } from "express";
import { Car } from "../utils/types";
import CarModel from "../models/CarModel";

const createCar = async (req: Request, res: Response) => {
  try {
    const newCar: Car = await CarModel.create(req.body);
    res.status(201).json({
      status: "success",
      data: newCar,
    });
  } catch (err: any) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

const getCars = async (req: Request, res: Response) => {
  const queryObj = req.query;
  let cars: Car[];
  try {
    if (queryObj) {
      cars = await CarModel.find(queryObj);
    } else {
      cars = await CarModel.find();
    }

    res.status(200).json({
      status: "success",
      data: cars,
    });
  } catch (err: any) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

const getCar = async (req: Request, res: Response) => {
  try {
    const car: Car | null = await CarModel.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: car,
    });
  } catch (err: any) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

const deleteCar = async (req: Request, res: Response) => {
  try {
    const car: Car | null = await CarModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: car,
    });
  } catch (err: any) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

const updateCar = async (req: Request, res: Response) => {
  try {
    const car: Car | null = await CarModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    res.status(200).json({
      status: "success",
      data: car,
    });
  } catch (err: any) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

const CC = {
  createCar,
  getCars,
  getCar,
  deleteCar,
  updateCar,
};

export default CC;
