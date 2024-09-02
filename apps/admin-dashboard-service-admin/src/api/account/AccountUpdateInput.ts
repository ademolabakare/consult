import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccountUpdateInput = {
  accountType?: "Option1" | null;
  suspended?: boolean | null;
  user?: UserWhereUniqueInput | null;
};
