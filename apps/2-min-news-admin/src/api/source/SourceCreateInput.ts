import { ArticleCreateNestedManyWithoutSourcesInput } from "./ArticleCreateNestedManyWithoutSourcesInput";

export type SourceCreateInput = {
  articles?: ArticleCreateNestedManyWithoutSourcesInput;
  name?: string | null;
  websiteUrl?: string | null;
};
