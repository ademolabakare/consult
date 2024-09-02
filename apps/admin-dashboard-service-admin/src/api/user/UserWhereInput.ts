import { AccountListRelationFilter } from "../account/AccountListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";

export type UserWhereInput = {
  accounts?: AccountListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  payments?: PaymentListRelationFilter;
  username?: StringFilter;
};
