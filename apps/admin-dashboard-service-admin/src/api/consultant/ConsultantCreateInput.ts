import { PaymentCreateNestedManyWithoutConsultantsInput } from "./PaymentCreateNestedManyWithoutConsultantsInput";

export type ConsultantCreateInput = {
  email?: string | null;
  name?: string | null;
  payments?: PaymentCreateNestedManyWithoutConsultantsInput;
  specialization?: string | null;
  status?: "Option1" | null;
};
