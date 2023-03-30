import { Router } from "express";
import RC from "../controllers/ReviewController";

const ReviewRouter = Router();

ReviewRouter.route("/").post(RC.createReview).get(RC.getReviews);
ReviewRouter.route("/:id")
  .get(RC.getReview)
  .delete(RC.deleteReview)
  .patch(RC.updateReview);

export default ReviewRouter;
