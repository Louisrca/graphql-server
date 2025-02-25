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
    add(number1: Float!, number2: Float!): Float
    subtract(number1: Float!, number2: Float!): Float
    multiply(number1: Float!, number2: Float!): Float
    divide(number1: Float!, number2: Float): Float
    colors(closestColor: String): String
  }
`;
