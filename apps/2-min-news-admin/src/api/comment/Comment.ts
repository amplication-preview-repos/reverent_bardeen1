import { Article } from "../article/Article";
import { User } from "../user/User";

export type Comment = {
  article?: Article | null;
  content: string | null;
  createdAt: Date;
  id: string;
  postedAt: Date | null;
  updatedAt: Date;
  user?: User | null;
};
