import { SortOrder } from "../../util/SortOrder";

export type AnalyticsOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  metricName?: SortOrder;
  metricValue?: SortOrder;
  updatedAt?: SortOrder;
};
