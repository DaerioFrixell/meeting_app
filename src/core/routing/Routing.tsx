import { Routes, Route } from 'react-router-dom';
import { authRoutes, unAuthRoutes } from './routes.config';


export const Routing = () => {
  const fakeToken = localStorage.getItem("token");

  return (
    <>
      {fakeToken
        ? (
          <Routes>
            {authRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.element />} />
            ))}
          </Routes>
        )
        : (
          <Routes>
            {unAuthRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.element />} />
            ))}
          </Routes>
        )}
    </>
  );
};
