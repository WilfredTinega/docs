import React, { useEffect } from 'react'
import OpenAI from "openai";

const Grok = () => {
    const grokLatest = async () => {
        const client = new OpenAI({
            apiKey: import.meta.env.VITE_XAI_API_KEY, dangerouslyAllowBrowser: true,
            baseURL: "https://api.x.ai/v1",
          });
          
          const completion = await client.chat.completions.create({
            model: "grok-2-latest"
          });

          const response = await completion.text();

          console.log(response)
    }
    
    useEffect(() => {
        grokLatest()
    },[])

  return (
    <div>
        Grok
      
    </div>
  )
}

export default Grok
