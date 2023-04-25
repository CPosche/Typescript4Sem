import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    getPeople: [Person!]!
    getPerson(id: ID!): Person!
  }

    type Person {
        _id: ID!
        name: String!
        age: Int!
        address: Address!
    }

    type Address {
        _id: ID!
        street: String!
        city: String!
    }

    type PersonInput {
        name: String!
        age: Int
        address: ID
    }

    type AddressInput {
        street: String!
        city: String!
    }

    type Mutation {
        createPerson(input: PersonInput!): Person!
        createAddress(input: AddressInput!): Address!
    }
`;

export default typeDefs;