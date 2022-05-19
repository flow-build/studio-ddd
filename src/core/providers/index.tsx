import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider as ReduxProvider } from "react-redux";
import { SnackbarProvider } from 'notistack';

import { ThemeProvider } from "@mui/material/styles";

import { queryClient } from "~/core/config/queryClient";
import { darkTheme } from "~/core/theme/darkTheme";

import { store } from "~/store";

type AppProvidersProps = {
    children: React.ReactNode;
};

const AppProviders = ({ children }: AppProvidersProps) => {
    return (
        <ReduxProvider store={store}>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={darkTheme}>
                    <SnackbarProvider maxSnack={3}>
                        {children}
                    </SnackbarProvider>
                </ThemeProvider>
                {import.meta.env.MODE !== "production" && <ReactQueryDevtools />}
            </QueryClientProvider>
        </ReduxProvider>
    );
};

export default AppProviders;
