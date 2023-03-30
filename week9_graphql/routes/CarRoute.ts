import { Router } from "express";
import CC from "../controllers/CarController";

const CarRouter = Router();

CarRouter.route("/").post(CC.createCar).get(CC.getCars);
CarRouter.route("/:id").get(CC.getCar).delete(CC.deleteCar).patch(CC.updateCar);

export default CarRouter;
