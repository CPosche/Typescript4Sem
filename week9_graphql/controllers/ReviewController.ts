import { Request, Response } from "express";
import ReviewModel from "../models/ReviewModel";
import { Reviews } from "../utils/types";

const createReview = async (req: Request, res: Response) => {
  try {
    const newReview: Reviews = await ReviewModel.create(req.body);
    res.status(201).json({
      status: "success",
      data: newReview,
    });
  } catch (err: any) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

const getReviews = async (req: Request, res: Response) => {
  const queryObj = req.query;
  let reviews: Reviews[];
  try {
    if (queryObj) {
      reviews = await ReviewModel.find(queryObj);
    } else {
      reviews = await ReviewModel.find();
    }

    res.status(200).json({
      status: "success",
      data: reviews,
    });
  } catch (err: any) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

const getReview = async (req: Request, res: Response) => {
  try {
    const review: Reviews | null = await ReviewModel.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: review,
    });
  } catch (err: any) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

const deleteReview = async (req: Request, res: Response) => {
  try {
    await ReviewModel.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err: any) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

const updateReview = async (req: Request, res: Response) => {
  try {
    const review: Reviews | null = await ReviewModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    res.status(200).json({
      status: "success",
      data: review,
    });
  } catch (err: any) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

const RC = {
  createReview,
  getReviews,
  getReview,
  deleteReview,
  updateReview,
};

export default RC;
