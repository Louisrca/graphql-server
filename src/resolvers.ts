import { doctorsData } from "./data.js";
import { ColorsData } from "./data.js";

type Speciality = { specialities: "PSYCHOLOGIST" | "OPHTALMOLOGIST" };

type Colors = { closestColor: string };

export const resolvers = {
  Query: {
    doctors: (_: unknown, args: Speciality) => {
      const { specialities } = args;

      return specialities
        ? doctorsData.filter((doctor) =>
            specialities.includes(doctor.speciality)
          )
        : doctorsData;
    },
    add: (
      _: unknown,
      { number1, number2 }: { number1: number; number2: number }
    ) => {
      return number1 + number2;
    },

    subtract: (
      _: unknown,
      { number1, number2 }: { number1: number; number2: number }
    ) => {
      return number1 - number2;
    },

    multiply: (
      _: unknown,
      { number1, number2 }: { number1: number; number2: number }
    ) => {
      return number1 * number2;
    },

    divide: (
      _: unknown,
      { number1, number2 }: { number1: number; number2: number }
    ) => {
      if (number2 === 0) {
        throw new Error("Cannot divide by 0");
      }
      return number1 / number2;
    },

    colors: (_: unknown, args: Colors) => {
      const { closestColor } = args;

      return closestColor
        ? ColorsData.filter((colors) => colors.includes(closestColor))
        : ColorsData;
    },
  },
};
