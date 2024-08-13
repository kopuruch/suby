import { ObjectOf } from "@Interfaces/interfaces";


export interface IMeta {
  current_page: number;
  from: number;
  last_page: number;
  per_page: number;
  to: number;
  total: number;
}

export type Sort = 'asc' | 'desc' | null;

export interface ITableResponse<Data> {
  data: Data;
  meta: IMeta;
}

export interface IMetaState {
  maxPage: number;
  total: number;
}