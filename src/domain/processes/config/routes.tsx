import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Processes = lazy(() => import("../pages/Processes"));

const ProcessesRoutes = () => {
    return (
        <Routes>
            <Route path="">
                <Route index element={<Processes />} />
            </Route>
        </Routes>
    );
};

export default ProcessesRoutes;
