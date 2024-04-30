import { PageProps } from "gatsby";
import NavBar from "../components/nav";
import React from "react";
import { Box, Typography } from "@mui/material";
import Layout from "../layout/layout";




const BlogPage = (props: PageProps) => {
    return (
        <Layout>
            <Box>
                <Typography variant="h1">
                    Blog
                </Typography>
            </Box>
        </Layout>
    )
}


export default BlogPage;
