import { Suspense } from "react";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider as ReduxProvider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Global } from '@emotion/react'

import { ThemeProvider } from "@mui/material/styles";

import { Dashboard } from "~/core/components/Dashboard";

import { queryClient } from "~/core/config/queryClient";
import { darkTheme } from "~/core/theme/darkTheme";
import globalStyle from "~/core/theme/globalStyle";

import { routes as SignInRoutes } from "~/domain/signIn";
import { routes as WorkflowsRoutes } from "~/domain/workflows";

import { store } from "~/store";


function App() {
    return (
        <ReduxProvider store={store}>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={darkTheme}>
                    <Global styles={globalStyle} />

                    <Suspense fallback={<div>loading...</div>}>
                        <Routes>
                            <Route path="/" element={<SignInRoutes />} />
                            <Route path="dashboard" element={<Dashboard />}>
                                <Route path="workflows" element={<WorkflowsRoutes />} />
                            </Route>
                        </Routes>
                    </Suspense>
                </ThemeProvider>

                <ReactQueryDevtools />
            </QueryClientProvider>
        </ReduxProvider>
    );
}

export default App;
