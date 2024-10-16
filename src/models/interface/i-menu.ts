import { ReactNode } from "react";

export interface IMenu {
  title: string;
  path: string;
  exact: boolean;
  element: ReactNode;
  children: Partial<IMenu>[];
  to: string;
  search: string;
}