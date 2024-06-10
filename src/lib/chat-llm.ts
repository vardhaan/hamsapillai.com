import { useEffect, useState } from "react";
import { openai_chat } from "./openai";

export interface ChatConfig {
    provider: "openai" | "anthropic";
    model?: string;
    maxTokens?: number;
    temperature?: number;
    returnAllMessages?: boolean;
    streamResponse?: boolean;
}

export interface ChatMessage {
    role: "system" | "user" | "assistant";
    content: string;
}

export const useChatLLM = (config: ChatConfig) => {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [response, setResponse] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchChat = async (newMessage: ChatMessage[]) => {
        setIsLoading(true);
        setError(null);
        setMessages([...messages, {role: "assistant", content: response}])
        setResponse("");
        if (config.provider === "openai") {
            try {
                const llmResponse = await openai_chat([...messages, ...newMessage], config.streamResponse ?? false, config);
                if (config.streamResponse) {    
                    for await (const chunk of llmResponse || "") {
                        setResponse((prev) => prev+chunk);
                    }
                }
                setMessages([...messages, ...newMessage])
            } catch (error) {
                setError(error as Error);
            }
        }
        setIsLoading(false);
    }

    const sendNewMessages = (newMessages: ChatMessage[]|null) => {
        console.log("Bout to fetch new message", newMessages)
        if (newMessages) {
            fetchChat(newMessages)
        }
    }

    // useEffect(() => {
    //     if (!newMessages) {
    //         return
    //     }
    //     if (newMessages.length === 0 && messages.length === 0) {
    //         return
    //     }
    //     console.log("NEW MESSAGES BEING ADDED?", newMessages)
    //     // setMessages([...messages, ...newMessages]);
    //     // fetchChat();
    //     // setResponse("abcd")
    // }, [newMessages]);

    return { messages, response, isLoading, error, sendNewMessages };
}
