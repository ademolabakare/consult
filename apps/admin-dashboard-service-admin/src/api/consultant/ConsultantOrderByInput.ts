import { SortOrder } from "../../util/SortOrder";

export type ConsultantOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  specialization?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
