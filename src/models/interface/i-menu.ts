import { ReactNode } from "react";

export interface IMenu {
  key: string,
  title: string;
  path: string;
  exact: boolean;
  element: ReactNode;
  children: Partial<IMenu>[];
  to: string;
  search: string;
  isShowSidebar: boolean
}