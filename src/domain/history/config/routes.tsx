import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const History = lazy(() => import("../pages/History"));

const HistoryRoutes = () => {
    return (
        <Routes>
            <Route path="">
                <Route index element={<History />} />
            </Route>
        </Routes>
    );
};

export default HistoryRoutes;
