import { AppRouter } from "./router/AppRouter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme();

export const JournalApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
};
