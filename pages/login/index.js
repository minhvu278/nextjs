import React from 'react';
import Login from "../../components/Login";
import {ThemeProvider} from "@mui/material";
import {theme} from "../../lib/theme";

export default function LoginPage() {
    return (
        <ThemeProvider theme={theme}>
            <Login />
        </ThemeProvider>
    )
}
