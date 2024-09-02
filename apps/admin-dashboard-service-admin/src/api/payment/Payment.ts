import { Consultant } from "../consultant/Consultant";
import { User } from "../user/User";

export type Payment = {
  amount: number | null;
  consultant?: Consultant | null;
  createdAt: Date;
  id: string;
  method: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
