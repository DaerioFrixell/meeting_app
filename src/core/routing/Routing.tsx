import { Routes, Route } from 'react-router-dom';
import { allRoutes } from './routes.config';

export const Routing = () => {
    return (
        <Routes>
            {allRoutes.map((route) => (
                <Route path={route.path} element={<route.element />} />
            ))}
        </Routes>
    );
};
