import { Box, Grid, Typography } from "@mui/material";
import { PageProps } from "gatsby";
import * as React from "react"
import NavBar from "../components/nav";
import Layout from "../layout/layout";
import Hamsa from "../images/hamsa.png";
import { useEffect } from "react";


const AboutPage = (props: PageProps) => {

    return (
        <Layout>
            <Grid container
                direction={"column"}
                columnSpacing={2}
                sx={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: '1px solid red',
                }}
            >
                <Grid item
                    sx={{
                        width: "50%",
                        border: '1px solid blue',
                        paddingLeft: '0 !important',
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Box padding={0} sx={{ border: "1px solid green", m: 0, pl: 0 }}>
                        Hello
                    </Box>
                </Grid>
                <AboutItem>
                    <img src={Hamsa} 
                        style={{
                            width: '100%',
                            maxWidth: '100%',
                            height: 'auto',
                            backgroundSize: 'contain',
                            overflow: 'hidden',
                            objectFit: 'contain'
                        }}
                    />
                </AboutItem>
                <AboutItem>
                    <Typography variant="h2" border="1px solid blue">Hello, I'm Hamsa.</Typography>
                </AboutItem>

            </Grid>
        </Layout>
    )
}

const AboutItem = ({ children }: { children: React.ReactNode }) => {

    return (
        <Grid item
            sx={{
                width: '50%',
                height: 'auto',
                border: '1px solid red',
                
            }}
        >
            {children}
        </Grid>
    )
}
    
    

export default AboutPage;