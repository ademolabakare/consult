import { Account } from "../account/Account";
import { Payment } from "../payment/Payment";
import { JsonValue } from "type-fest";

export type User = {
  accounts?: Array<Account>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  payments?: Array<Payment>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
