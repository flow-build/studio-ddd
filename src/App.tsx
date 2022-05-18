import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { Global } from "@emotion/react";

import { Dashboard } from "~/core/components/Dashboard";
import AppProviders from "~/core/providers";
import globalStyle from "~/core/theme/globalStyle";

import { routes as SignInRoutes } from "~/domain/signIn";
import { routes as WorkflowsRoutes } from "~/domain/workflows";

function App() {
    return (
        <AppProviders>
            <Global styles={globalStyle} />

            <Suspense fallback={<div>loading...</div>}>
                <Routes>
                    <Route path="/*" element={<SignInRoutes />} />
                    <Route path="dashboard" element={<Dashboard />}>
                        <Route path="workflows" element={<WorkflowsRoutes />} />
                    </Route>
                </Routes>
            </Suspense>
        </AppProviders>
    );
}

export default App;
