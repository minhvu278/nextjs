import React from 'react';
import {ThemeProvider} from "@mui/material";
import {theme} from "@/lib/theme";
import SkillSheetComponent from "@/components/SkillSheet";

export default function SkillSheet() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <SkillSheetComponent />
            </ThemeProvider>
        </>
    )
}
