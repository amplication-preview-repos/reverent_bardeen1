import { CommentCreateNestedManyWithoutArticlesInput } from "./CommentCreateNestedManyWithoutArticlesInput";
import { SourceWhereUniqueInput } from "../source/SourceWhereUniqueInput";

export type ArticleCreateInput = {
  comments?: CommentCreateNestedManyWithoutArticlesInput;
  content?: string | null;
  publishedAt?: Date | null;
  source?: SourceWhereUniqueInput | null;
  summary?: string | null;
  title?: string | null;
};
