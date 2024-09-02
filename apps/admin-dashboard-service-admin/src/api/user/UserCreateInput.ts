import { AccountCreateNestedManyWithoutUsersInput } from "./AccountCreateNestedManyWithoutUsersInput";
import { PaymentCreateNestedManyWithoutUsersInput } from "./PaymentCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  accounts?: AccountCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  payments?: PaymentCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
