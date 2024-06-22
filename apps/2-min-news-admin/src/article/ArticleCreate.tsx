import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CommentTitle } from "../comment/CommentTitle";
import { SourceTitle } from "../source/SourceTitle";

export const ArticleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="comments"
          reference="Comment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CommentTitle} />
        </ReferenceArrayInput>
        <TextInput label="Content" multiline source="content" />
        <DateTimeInput label="PublishedAt" source="publishedAt" />
        <ReferenceInput source="source.id" reference="Source" label="Source">
          <SelectInput optionText={SourceTitle} />
        </ReferenceInput>
        <TextInput label="Summary" multiline source="summary" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
