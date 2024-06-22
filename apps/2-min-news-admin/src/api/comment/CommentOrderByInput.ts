import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  articleId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  postedAt?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
