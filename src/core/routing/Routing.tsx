import { Routes, Route } from 'react-router-dom';
import { allRoutes } from './routes.config';

// V2: приватные, публичные, общие роуты сделать.
export const Routing = () => {
  return (
    <Routes>
      {allRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
    </Routes>
  );
};
