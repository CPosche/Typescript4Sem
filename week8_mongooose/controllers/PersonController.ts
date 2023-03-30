import { Request, Response } from "express";
import PersonModel from "../models/PersonModel";
import { Person } from "../utils/types";

const createPerson = async (req: Request, res: Response) => {
  try {
    const newPerson: Person = await PersonModel.create(req.body);
    res.status(201).json({
      status: "success",
      data: newPerson,
    });
  } catch (err: any) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

const getPeople = async (req: Request, res: Response) => {
  const queryObj = req.query;
  let persons: Person[];
  try {
    if (queryObj) {
      persons = await PersonModel.find(queryObj);
    } else {
      persons = await PersonModel.find();
    }

    res.status(200).json({
      status: "success",
      data: persons,
    });
  } catch (err: any) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

const getPerson = async (req: Request, res: Response) => {
  try {
    const person: Person | null = await PersonModel.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: person,
    });
  } catch (err: any) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

const deletePerson = async (req: Request, res: Response) => {
  try {
    const person: Person | null = await PersonModel.findByIdAndDelete(
      req.params.id
    );
    res.status(200).json({
      status: "success",
      data: person,
    });
  } catch (err: any) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

const updatePerson = async (req: Request, res: Response) => {
  try {
    const person: Person | null = await PersonModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json({
      status: "success",
      data: person,
    });
  } catch (err: any) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

const PC = {
  createPerson,
  getPeople,
  getPerson,
  deletePerson,
  updatePerson,
};

export default PC;
