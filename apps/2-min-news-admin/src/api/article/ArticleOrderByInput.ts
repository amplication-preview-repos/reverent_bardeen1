import { SortOrder } from "../../util/SortOrder";

export type ArticleOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  publishedAt?: SortOrder;
  sourceId?: SortOrder;
  summary?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
