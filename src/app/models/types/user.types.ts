type TUserId = string;
type TUsername = string;

// !TODO find out about Clerk IUser interface
interface IUser {
  id: Readonly<TUserId>;
  username: Readonly<TUsername>;
}

export type { TUserId };
export type { IUser };
