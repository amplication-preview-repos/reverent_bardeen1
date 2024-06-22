import { ArticleWhereUniqueInput } from "../article/ArticleWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentUpdateInput = {
  article?: ArticleWhereUniqueInput | null;
  content?: string | null;
  postedAt?: Date | null;
  user?: UserWhereUniqueInput | null;
};
