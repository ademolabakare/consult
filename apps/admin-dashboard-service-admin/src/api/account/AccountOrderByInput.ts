import { SortOrder } from "../../util/SortOrder";

export type AccountOrderByInput = {
  accountType?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  suspended?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
