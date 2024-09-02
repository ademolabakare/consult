import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ConsultantWhereUniqueInput } from "../consultant/ConsultantWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PaymentWhereInput = {
  amount?: FloatNullableFilter;
  consultant?: ConsultantWhereUniqueInput;
  id?: StringFilter;
  method?: StringNullableFilter;
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
