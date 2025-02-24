import gql from "graphql-tag";

export const typeDefs = gql`
  enum Speciality {
    PSYCHOLOGIST
    OPHTALMOLOGIST
  }

  type Doctor {
    name: String
    speciality: Speciality
  }

  type Query {
    doctors(specialities: [Speciality!]): [Doctor]
    add(number1: Int!, number2: Int!): Int
    subtract(number1: Int!, number2: Int!): Int
    multiply(number1: Int!, number2: Int!): Int
    divide(number1: Int!, number2: Int): Float
    colors(color: String): [String]
  }
`;
