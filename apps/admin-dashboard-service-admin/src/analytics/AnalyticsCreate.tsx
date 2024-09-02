import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const AnalyticsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <TextInput label="metricName" source="metricName" />
        <NumberInput step={1} label="metricValue" source="metricValue" />
      </SimpleForm>
    </Create>
  );
};
