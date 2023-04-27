import { Args } from "../../../utils/types";
import PersonModel from "../../models/PersonModel";
import AddressModel from "../../models/AddressModel";

export default {
  createPerson: async (parent: any, args: Args) => {
    const person = await PersonModel.create(args.input);
    return person;
  },
  updatePerson: async (parent: any, args: Args) => {
    const person = await PersonModel.findByIdAndUpdate(args.id, args.input, {
      new: true,
    });
    return person;
  },
  deletePerson: async (parent: any, args: Args) => {
    const person = await PersonModel.findByIdAndDelete(args.id);
    return person;
  },
  createAddress: async (parent: any, args: Args) => {
    const address = await AddressModel.create(args.input);
    return address;
  },
  updateAddress: async (parent: any, args: Args) => {
    const address = await AddressModel.findByIdAndUpdate(args.id, args.input, {
      new: true,
    });
    return address;
  },
  deleteAddress: async (parent: any, args: Args) => {
    const address = await AddressModel.findByIdAndDelete(args.id);
    return address;
  },
};
