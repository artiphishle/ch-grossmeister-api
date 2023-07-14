import type { IUser } from "@/app/models/types/user.types";

const mockUser: IUser = {
  id: "007",
  username: "GM_Bond",
};

/**
 * Finds a user by its id
 */
async function readOne(id: string) {
  // TODO clerk import and return logged user
  return { error: null, response: mockUser };
}

export { mockUser };
export { readOne };
