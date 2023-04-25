import PersonModel from "../../models/PersonModel";
import { PersonInput, AddressInput, Args } from "../../utils/types";
import AddressModel from "../../models/AddressModel";

export default {
    createPerson: async (parent: any, {PersonInput}: Args) => {
        return await PersonModel.create(PersonInput);
    },
    createAddress: async (parent: any, {AddressInput}: Args) => {
        return await AddressModel.create(AddressInput);
    },
}