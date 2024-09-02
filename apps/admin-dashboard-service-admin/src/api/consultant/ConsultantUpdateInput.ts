import { PaymentUpdateManyWithoutConsultantsInput } from "./PaymentUpdateManyWithoutConsultantsInput";

export type ConsultantUpdateInput = {
  email?: string | null;
  name?: string | null;
  payments?: PaymentUpdateManyWithoutConsultantsInput;
  specialization?: string | null;
  status?: "Option1" | null;
};
