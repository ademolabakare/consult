import { AccountUpdateManyWithoutUsersInput } from "./AccountUpdateManyWithoutUsersInput";
import { PaymentUpdateManyWithoutUsersInput } from "./PaymentUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  accounts?: AccountUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  payments?: PaymentUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
