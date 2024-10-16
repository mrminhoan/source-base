import { IMenu } from "@models";
import NotFound from "@pages/not-found/not-found";
import { path } from "@routes/menu/menu";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

export const GetMenu = () => {
  const ItemRoute = (item: Partial<IMenu>) => {
    const { search, key } = useLocation();
    const { path, element, children, to } = item;
    return to ? (
      <Route
        path={path}
        element={
          <Navigate
            to={{
              pathname: to,
              search: search,
            }}
          />
        }
        key={key}
      >
        {Array.isArray(children) && ListRoute(children)}
      </Route>
    ) : (
      <Route path={path} element={element} key={path}>
        {Array.isArray(children) && ListRoute(children)}
      </Route>
    );
  };
  const ListRoute = (list: Partial<IMenu>[]) => {
    return list.map((item) => ItemRoute(item));
  };
  return (
    <Routes>
      {ListRoute(path)}
      <Route path={'*'} element={<NotFound />} />
    </Routes>
  );
};
