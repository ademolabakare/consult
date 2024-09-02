import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccountWhereInput = {
  accountType?: "Option1";
  id?: StringFilter;
  suspended?: BooleanNullableFilter;
  user?: UserWhereUniqueInput;
};
