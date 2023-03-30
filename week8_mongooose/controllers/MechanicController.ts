import { Request, Response } from "express";
import { Mechanic } from "../utils/types";
import MechanicModel from "../models/MechanicModel";

const createMechanic = async (req: Request, res: Response) => {
  try {
    const newMechanic: Mechanic = await MechanicModel.create(req.body);
    res.status(201).json({
      status: "success",
      data: newMechanic,
    });
  } catch (err: any) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

const getMechanics = async (req: Request, res: Response) => {
  const queryObj = req.query;
  let mechanics: Mechanic[];
  try {
    if (queryObj) {
      mechanics = await MechanicModel.find(queryObj);
    } else {
      mechanics = await MechanicModel.find();
    }

    res.status(200).json({
      status: "success",
      data: mechanics,
    });
  } catch (err: any) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

const getMechanic = async (req: Request, res: Response) => {
  try {
    const mechanic: Mechanic | null = await MechanicModel.findById(
      req.params.id
    );
    res.status(200).json({
      status: "success",
      data: mechanic,
    });
  } catch (err: any) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

const deleteMechanic = async (req: Request, res: Response) => {
  try {
    const mechanic: Mechanic | null = await MechanicModel.findByIdAndDelete(
      req.params.id
    );
    res.status(200).json({
      status: "success",
      data: mechanic,
    });
  } catch (err: any) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

const updateMechanic = async (req: Request, res: Response) => {
  try {
    const mechanic: Mechanic | null = await MechanicModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    res.status(200).json({
      status: "success",
      data: mechanic,
    });
  } catch (err: any) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

const MC = {
  createMechanic,
  getMechanics,
  getMechanic,
  deleteMechanic,
  updateMechanic,
};

export default MC;
