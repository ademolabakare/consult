import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type AnalyticsWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  metricName?: StringNullableFilter;
  metricValue?: IntNullableFilter;
};
