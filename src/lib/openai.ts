// import OpenAI from "openai";
import { OpenAI } from "openai";
import { ChatConfig, ChatMessage } from "./chat-llm";
import { ChatCompletion } from "openai/resources";
import { Stream } from "openai/streaming";
// import { openai } from "../../gatsby-config";



export const openai_chat = async function* (messages: ChatMessage[], stream: boolean=false, config?: ChatConfig) {
    const openai = new OpenAI({
        //todo: add api key
    })
    const defaults = {
        model: "gpt-3.5-turbo",
        maxTokens: 500,
        temperature: 1.0,
    }
    const modelConfig = {...defaults, ...config}
    const response = await openai.chat.completions.create({
        model: modelConfig.model,
        messages: messages,
        max_tokens: modelConfig.maxTokens,
        temperature: modelConfig.temperature,
        stream: stream
    });
    if (stream) {
        const streamResponse = response as Stream<OpenAI.Chat.Completions.ChatCompletionChunk>
        
        for await (const chunk of streamResponse) {
            yield chunk.choices[0]?.delta?.content || "";
        }
    } else {
        const blockResponse = response as ChatCompletion
        return blockResponse.choices[0].message.content;
    }
};
