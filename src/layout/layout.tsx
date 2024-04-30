import React from "react"
import NavBar from "../components/nav"


interface LayoutProps {
    children: React.ReactNode
}

const Layout = (props: LayoutProps) => {
    return (
        <>
            <NavBar />
            {props.children}
        </>
    )
}



export default Layout;