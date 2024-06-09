import React from "react"
import NavBar from "../components/nav"
import { Box } from "@mui/material"


interface LayoutProps {
    children: React.ReactNode
}

const Layout = (props: LayoutProps) => {
    return (
        <Box
            sx={{
                mx: 2
            }}
        >
            <NavBar />
            {props.children}
        </Box>
    )
}



export default Layout;