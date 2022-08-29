import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import {publicRoutes} from "../Router/Route";

const Routers = () => {
    return (
        <Routes>
            {publicRoutes.map(route =>
                <Route
                    key={route.id}
                    path={route.path}
                    element={<route.element />}
                />
            )}
            <Route path="*" element={<Navigate to="/home" replace/>}/>
        </Routes>
    );
};

export default Routers;