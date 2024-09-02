import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccountCreateInput = {
  accountType?: "Option1" | null;
  suspended?: boolean | null;
  user?: UserWhereUniqueInput | null;
};
