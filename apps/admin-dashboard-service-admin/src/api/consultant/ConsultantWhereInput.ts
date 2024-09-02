import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";

export type ConsultantWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  payments?: PaymentListRelationFilter;
  specialization?: StringNullableFilter;
  status?: "Option1";
};
