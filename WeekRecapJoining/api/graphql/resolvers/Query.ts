import { PersonInput, AddressInput, Args } from "../../utils/types";
import PersonModel from "../../models/PersonModel";
import AddressModel from "../../models/AddressModel";

export default {
  people: async () => {
    const people = await PersonModel.find();
    return people;
  },
  person: async (parent: any, args: Args) => {
    const person = await PersonModel.findById(args.id);
    return person;
  },
  addresses: async () => {
    const addresses = await AddressModel.find().populate("persons");
    return addresses;
  },
  address: async (parent: any, args: Args) => {
    const address = await AddressModel.findById(args.id).populate("persons");
    return address;
  },
};
