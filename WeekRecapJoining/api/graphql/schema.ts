import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    people: [Person!]!
    person(id: ID!): Person
    addresses: [Address!]!
    address(id: ID!): Address!
  }

  type Mutation {
    createPerson(input: PersonInput!): Person!
    updatePerson(input: PersonInput!, id: ID!): Person!
    deletePerson(id: ID!): Person!
    createAddress(input: AddressInput!): Address!
    updateAddress(input: AddressInput!, id: ID!): Address!
    deleteAddress(id: ID!): Address!
  }

  type Person {
    id: ID!
    name: String!
    age: Int!
    email: String!
    address: Address!
  }

  type Address {
    id: ID!
    street: String!
    number: Int!
    city: String!
    postalCode: Int!
    persons: [Person!]!
  }

  input PersonInput {
    name: String!
    age: Int!
    email: String!
    address: ID
  }

  input AddressInput {
    street: String!
    number: Int!
    city: String!
    postalCode: Int!
    persons: [ID]
  }
`;

export default typeDefs;
