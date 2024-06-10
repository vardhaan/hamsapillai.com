import { Box, Button, Grid, Input, TextField, Typography } from "@mui/material";
import { PageProps } from "gatsby";
import * as React from "react"
import NavBar from "../components/nav";
import Layout from "../layout/layout";
import Hamsa from "../images/hamsa.png";
import { useEffect, useState } from "react";
import { DASHED_BORDER_COLOR } from "../constants/styles";
import { ChatMessage, useChatLLM } from "../lib/chat-llm";
import { ChatCompletion, ChatCompletionMessage } from "openai/resources";
import { RESUME_PROMPT } from "../constants/prompts/about";


const AboutPage = (props: PageProps) => {

    const [newInput, setNewInput] = useState<ChatMessage|null>(null)
    const {messages, response, isLoading, error, sendNewMessages} = useChatLLM({
        provider: "openai",
        streamResponse: true
    })

    useEffect(() => {
        console.log(response)
    }, [response])

    const sendAboutMessages = () => {
        if (!newInput) return
        if (messages.length === 0) {
            sendNewMessages([{role: "system", content: RESUME_PROMPT}, newInput])
        } else {
            sendNewMessages([newInput])
        }
    }

    return (
        <Layout>
            <TextField onChange={(e) => setNewInput({content: e.target.value, role: "user"})}>
                What's your background?
            </TextField>
            <Button onClick={() => sendAboutMessages()}>
                Submit
            </Button>
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
                <AboutItem>
                    <img src={Hamsa} 
                        style={{
                            width: "50%",
                            backgroundSize: 'contain',
                            overflow: 'hidden',
                            objectFit: 'contain'
                        }}
                    />
                </AboutItem>
                <AboutItem>
                    <Typography variant="h2">
                        Hello, I'm Hamsa.
                    </Typography>
                </AboutItem>
                

            </Grid>
            <Typography variant="h2">
                {response}
            </Typography>
        </Layout>
    )
}

const AboutItem = ({ children }: { children: React.ReactNode }) => {

    return (
        <Grid item
            sx={{
                width: '50%',
                height: 'auto',             
            }}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            {children}
        </Grid>
    )
}
    
    

export default AboutPage;