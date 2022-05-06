import { Suspense } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import { routes as SignInRoutes } from "./domain/signIn";

import { store } from "./store";

import GlobalStyle from "./core/theme/globalStyle";
import { darkTheme } from "./core/theme/darkTheme";

const twentyFourHoursInMs = 1000 * 60 * 60 * 24;
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            refetchOnReconnect: false,
            retry: false,
            staleTime: twentyFourHoursInMs,
        },
    },
});

function App() {
    return (
        <ReduxProvider store={store}>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={darkTheme}>
                    <GlobalStyle />

                    <Suspense fallback={<div>loading...</div>}>
                        <Routes>
                            <Route path="/*" element={<SignInRoutes />} />
                        </Routes>
                    </Suspense>
                </ThemeProvider>

                <ReactQueryDevtools />
            </QueryClientProvider>
        </ReduxProvider>
    );
}

export default App;
