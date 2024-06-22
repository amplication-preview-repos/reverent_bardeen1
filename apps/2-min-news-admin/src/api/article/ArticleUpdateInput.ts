import { CommentUpdateManyWithoutArticlesInput } from "./CommentUpdateManyWithoutArticlesInput";
import { SourceWhereUniqueInput } from "../source/SourceWhereUniqueInput";

export type ArticleUpdateInput = {
  comments?: CommentUpdateManyWithoutArticlesInput;
  content?: string | null;
  publishedAt?: Date | null;
  source?: SourceWhereUniqueInput | null;
  summary?: string | null;
  title?: string | null;
};
