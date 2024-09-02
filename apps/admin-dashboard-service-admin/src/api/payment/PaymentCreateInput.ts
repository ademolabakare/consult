import { ConsultantWhereUniqueInput } from "../consultant/ConsultantWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PaymentCreateInput = {
  amount?: number | null;
  consultant?: ConsultantWhereUniqueInput | null;
  method?: string | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
