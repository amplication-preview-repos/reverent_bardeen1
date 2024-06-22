import { Article } from "../article/Article";

export type Source = {
  articles?: Array<Article>;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
  websiteUrl: string | null;
};
