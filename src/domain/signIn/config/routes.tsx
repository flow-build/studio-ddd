import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const SignIn = lazy(() => import("../pages/SignIn"));

const SignInRoutes = () => {
    return (
        <Routes>
            <Route path="">
                <Route index element={<SignIn />} />
            </Route>
        </Routes>
    );
};

export default SignInRoutes;
