import { Box, Typography } from "@mui/material";
import { PageProps } from "gatsby";
import * as React from "react"
import NavBar from "../components/nav";


const AboutPage = (props: PageProps) => {

    return (
        <>
            <NavBar />
            <Box>
                <Typography variant="h1">Hello, I'm Hamsa.</Typography>
            </Box>
        </>
    )
}

export default AboutPage;