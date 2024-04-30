import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import NavBar from "../components/nav"
import { Box, Typography } from "@mui/material"
import Layout from "../layout/layout"



const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
        <Box>
          <Typography variant="h1">
            Home
          </Typography>
        </Box>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
