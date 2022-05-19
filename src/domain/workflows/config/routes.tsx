import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Workflows = lazy(() => import("../pages/Workflows"));

const WorkflowsRoutes = () => {
    return (
        <Routes>
            <Route path="">
                <Route index element={<Workflows />} />
            </Route>
        </Routes>
    );
};

export default WorkflowsRoutes;
