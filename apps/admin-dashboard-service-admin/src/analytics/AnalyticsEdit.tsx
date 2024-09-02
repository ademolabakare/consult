import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const AnalyticsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <TextInput label="metricName" source="metricName" />
        <NumberInput step={1} label="metricValue" source="metricValue" />
      </SimpleForm>
    </Edit>
  );
};
