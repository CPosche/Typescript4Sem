import { Router } from "express";
import MC from "../controllers/MechanicController";

const MechanicRouter = Router();

MechanicRouter.route("/").post(MC.createMechanic).get(MC.getMechanics);
MechanicRouter.route("/:id")
  .get(MC.getMechanic)
  .delete(MC.deleteMechanic)
  .patch(MC.updateMechanic);

export default MechanicRouter;
