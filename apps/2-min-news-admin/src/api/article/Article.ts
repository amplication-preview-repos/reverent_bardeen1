import { Comment } from "../comment/Comment";
import { Source } from "../source/Source";

export type Article = {
  comments?: Array<Comment>;
  content: string | null;
  createdAt: Date;
  id: string;
  publishedAt: Date | null;
  source?: Source | null;
  summary: string | null;
  title: string | null;
  updatedAt: Date;
};
