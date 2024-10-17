import { IMenu } from '@models';
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';
type MenuItem = Required<MenuProps>['items'][number];
import { Navigate } from 'react-router-dom';
export const GenMenuItem = (
  item: Partial<IMenu>,
  index: number,
  pathRoot?: string
): MenuItem[] => {
  const navigate = useNavigate();
  const { title, path, children, to, key } = item;
  if (path === '') {
    if (children && children.length > 0) {
      return GenMenuList(children);
    }
    return [];
  }
  const menuItem: MenuItem = {
    key: key || `${index}-${title}`,
    label: title,
    onClick: () => {
      if (path) return navigate(pathRoot ? path.combieKeyUrl(pathRoot) : path);
      if (to) return navigate(to);
    },
    children: children ? GenMenuList(children, path?.combieKeyUrl(pathRoot || "")) : undefined,
  };

  return [menuItem];
};

export const GenMenuList = (paths: Partial<IMenu>[], rootPath?:string): MenuItem[] => {
  let menuItems: MenuItem[] = [];
  paths.forEach((item, index) => {
    const items = GenMenuItem(item, index,rootPath);
    menuItems = menuItems.concat(items);
  });
  return menuItems;
};
