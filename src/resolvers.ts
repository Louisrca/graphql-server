import { doctorsData } from "./data.js";
import { ColorsData } from "./data.js";

type Speciality = { specialities: "PSYCHOLOGIST" | "OPHTALMOLOGIST" };

type Numbers = { number1: number; number2: number };
type Colors = { closestColor: string };

export const resolvers = {
  Query: {
    doctors: (parents: unknown, args: Speciality) => {
      const { specialities } = args;

      if (specialities) {
        return doctorsData.filter((doctor) =>
          specialities.includes(doctor.speciality)
        );
      }
    },
    add: (parents: unknown, args: Numbers) => {
      const { number1, number2 } = args;
      return number1 + number2;
    },

    subtract: (parents: unknown, args: Numbers) => {
      const { number1, number2 } = args;
      return number1 - number2;
    },

    multiply: (parents: unknown, args: Numbers) => {
      const { number1, number2 } = args;
      return number1 * number2;
    },

    divide: (parents: unknown, args: Numbers) => {
      if (args.number2 === 0) {
        throw new Error("Cannot divide by 0");
      }
      const { number1, number2 } = args;
      return number1 / number2;
    },

    colors: (parents: unknown, args: Colors) => {
      const { closestColor } = args;

      if (closestColor) {
        return ColorsData.filter((colors) => colors.includes(closestColor));
      }
    },
  },
};
