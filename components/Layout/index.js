import React from 'react';
import {ThemeProvider} from "@mui/material";
import {theme} from "../../lib/theme";
import Header from "../Header";

export default function Layout({children}) {
    return (
        <ThemeProvider theme={theme}>
            <Header />
            {children}
        </ThemeProvider>
    )
}
