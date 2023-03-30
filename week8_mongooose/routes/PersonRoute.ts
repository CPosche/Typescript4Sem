import { Router } from "express";
import PC from "../controllers/PersonController";

const PersonRouter = Router();

PersonRouter.route("/").post(PC.createPerson).get(PC.getPeople);
PersonRouter.route("/:id")
  .get(PC.getPerson)
  .delete(PC.deletePerson)
  .patch(PC.updatePerson);

export default PersonRouter;
