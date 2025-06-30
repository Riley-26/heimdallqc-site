import { createTheme } from "@mui/material/styles"

const mainTheme = createTheme({
    palette: {
        primary: {
            main: '#ddd',
            // light: will be calculated from palette.primary.main,
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        }
    },
});

export { mainTheme }