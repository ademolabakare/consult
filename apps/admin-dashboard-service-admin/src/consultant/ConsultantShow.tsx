import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CONSULTANT_TITLE_FIELD } from "./ConsultantTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ConsultantShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="specialization" source="specialization" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Payment"
          target="consultantId"
          label="Payments"
        >
          <Datagrid rowClick="show">
            <TextField label="amount" source="amount" />
            <ReferenceField
              label="Consultant"
              source="consultant.id"
              reference="Consultant"
            >
              <TextField source={CONSULTANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="method" source="method" />
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
