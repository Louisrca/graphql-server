import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { hashPassword } from "../../modules/auth.js";
import { MutationResolvers } from "../../types.js";

export const createUser: MutationResolvers["createUser"] = async (
  _,
  { username, password, email },
  { dataSources },
  __
) => {
  try {
    if (username === "" || password === "" || email === "") {
      return {
        code: 400,
        message: "Username, password or email is empty",
        success: false,
        user: null,
      };
    }
    const createdUser = await dataSources.db.user.create({
      data: {
        username,
        email,
        password: await hashPassword(password),
      },
    });
    return {
      code: 201,
      message: "the user has been created",
      success: true,
      user: {
        id: createdUser.id,
        username: createdUser.username,
      },
    };
  } catch (e) {
    if (e instanceof PrismaClientKnownRequestError) {
      return {
        code: 401,
        message: e.message,
        success: false,
        user: null,
      };
    }

    return {
      code: 400,
      message: (e as Error).message,
      success: false,
      user: null,
    };
  }
};
