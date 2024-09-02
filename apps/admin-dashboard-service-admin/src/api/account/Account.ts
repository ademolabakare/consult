import { User } from "../user/User";

export type Account = {
  accountType?: "Option1" | null;
  createdAt: Date;
  id: string;
  suspended: boolean | null;
  updatedAt: Date;
  user?: User | null;
};
