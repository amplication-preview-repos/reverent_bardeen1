import { ArticleUpdateManyWithoutSourcesInput } from "./ArticleUpdateManyWithoutSourcesInput";

export type SourceUpdateInput = {
  articles?: ArticleUpdateManyWithoutSourcesInput;
  name?: string | null;
  websiteUrl?: string | null;
};
