import { Box, Typography } from "@mui/material";
import { PageProps } from "gatsby";
import * as React from "react"
import NavBar from "../components/nav";
import Layout from "../layout/layout";


const AboutPage = (props: PageProps) => {

    return (
        <Layout>
            <Box>
                <Typography variant="h1">Hello, I'm Hamsa.</Typography>
            </Box>
        </Layout>
    )
}

export default AboutPage;