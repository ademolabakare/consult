import { Analytics as TAnalytics } from "../api/analytics/Analytics";

export const ANALYTICS_TITLE_FIELD = "metricName";

export const AnalyticsTitle = (record: TAnalytics): string => {
  return record.metricName?.toString() || String(record.id);
};
