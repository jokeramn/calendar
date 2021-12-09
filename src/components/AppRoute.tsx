import { Routes, Route, Navigate } from "react-router";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { privateRoutes, publicRoutes, RouteNames } from "../router";

const AppRoute = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
      <Route
        path="*"
        element={<Navigate to={RouteNames.EVENT} replace={true} />}
      />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
      <Route
        path="*"
        element={<Navigate to={RouteNames.LOGIN} replace={true} />}
      />
    </Routes>
  );
};

export default AppRoute;
