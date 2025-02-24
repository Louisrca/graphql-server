import gql from "graphql-tag";

export const typeDefs = gql`
  type Doctor {
    name: String
    speciality: Speciality
  }

  type Query {
    doctors: [Doctor]
  }

  enum Speciality {
    PSYCHOLOGIST
    OPHTALMOLOGIST
  }
`;
