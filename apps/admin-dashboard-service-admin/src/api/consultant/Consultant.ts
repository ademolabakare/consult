import { Payment } from "../payment/Payment";

export type Consultant = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  payments?: Array<Payment>;
  specialization: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
