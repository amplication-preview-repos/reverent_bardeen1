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

import { SOURCE_TITLE_FIELD } from "./SourceTitle";

export const SourceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="WebsiteURL" source="websiteUrl" />
        <ReferenceManyField
          reference="Article"
          target="sourceId"
          label="Articles"
        >
          <Datagrid rowClick="show">
            <TextField label="Content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="PublishedAt" source="publishedAt" />
            <ReferenceField
              label="Source"
              source="source.id"
              reference="Source"
            >
              <TextField source={SOURCE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Summary" source="summary" />
            <TextField label="Title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
