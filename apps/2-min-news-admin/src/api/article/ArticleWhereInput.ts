import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { SourceWhereUniqueInput } from "../source/SourceWhereUniqueInput";

export type ArticleWhereInput = {
  comments?: CommentListRelationFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  publishedAt?: DateTimeNullableFilter;
  source?: SourceWhereUniqueInput;
  summary?: StringNullableFilter;
  title?: StringNullableFilter;
};
